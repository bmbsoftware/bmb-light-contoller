import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

export default () => {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware];
	const storeCreator = process.env.REACT_APP_DEVELOPMENT
		? composeWithDevTools(applyMiddleware(...middleware))(createStore)
		: applyMiddleware(...middleware)(createStore);

	const store: any = storeCreator(rootReducer, {});
	store.runSaga = sagaMiddleware.run;

	if ((module as any).hot) {
		(module as any).hot.accept('./rootReducer', () => {
			const nextReducer = require('./rootReducer');
			store.replaceReducer(nextReducer);
		});
	}
	return store;
};
