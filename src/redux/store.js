import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './restaurant/restaurantReducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
