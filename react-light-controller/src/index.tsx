import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

import App from 'domains/app/containers/App';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';

// const storeCreator = createStore; 
const storeCreator = process.env.REACT_APP_DEVELOPMENT ? composeWithDevTools()(createStore) : createStore;

const store = storeCreator(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
