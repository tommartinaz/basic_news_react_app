import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Store from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
