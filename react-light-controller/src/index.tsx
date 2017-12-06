import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootSaga from './rootSaga';
import createStore from './createStore';
import App from 'domains/app/containers/App';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/index.css';

const store: any = createStore();
store.runSaga(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
