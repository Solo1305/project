import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import {
  //productsReducer,
  //productDetailsReducer,
//} from "../reducers/productsReducer";

//import { loginReducer } from "../reducers/userReducer";
const reducer = combineReducers({
  //products: productsReducer,
  //productDetails: productDetailsReducer,
  //userLogin: loginReducer,
});

const store = configureStore({reducer}
);

export default store;