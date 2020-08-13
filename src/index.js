import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {addCharacterById} from './actions'

import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(rootReducer);
console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(1));

ReactDom.render(
<Provider store ={store}>
    <App/>
</Provider>,document.getElementById('root')
)

