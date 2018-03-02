import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter} from 'react-router-dom';
import allReducers from './reducers';
import './styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    allReducers
)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();