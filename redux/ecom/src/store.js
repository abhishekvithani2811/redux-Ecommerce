import { legacy_createStore as createStore } from "redux";
import reducers from './redux/reducers/index'
import storage from 'redux-persist/lib/storage';
import {
    persistReducer
} from 'redux-persist';

const persistConfig = {
    key: 'counter',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store   
