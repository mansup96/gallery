import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer,
  CombinedState,
  compose,
} from 'redux';
import galleryReducer from './galleryStore/reducer';
import thunkMiddleware from 'redux-thunk';
import {galleryState} from "./galleryStore/types";


export type RootState = {
  galleryReducer: galleryState;
};

const reducers: Reducer<CombinedState<RootState>> = combineReducers({
  galleryReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, process.env.NODE_ENV === 'development' ?
  composeEnhancers(applyMiddleware(thunkMiddleware)) : applyMiddleware(thunkMiddleware)
);

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
