import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { storeCreateReducer } from './components/store/reducers/admin/storeCreateReducer'
import { storesListReducer } from './components/store/reducers/admin/storesListReducer'

import { loginReducer } from './components/account/reducers/loginReducer'
import { storesUpdateReducer } from './components/store/reducers/admin/storeUpdateReducer'
import { storesDetailReducer } from './components/store/reducers/storeDetailReducer'
import { sellersListReducer } from './components/seller/reducers/admin/sellersListReducer'
import { sellerDetailReducer } from './components/seller/reducers/sellerDetailReducer'
import { sellerUpdateReducer } from './components/seller/reducers/admin/sellerUpdateReduce'
import { sellerCreateReducer } from './components/seller/reducers/admin/sellerCreateReducer'

const reducer = combineReducers({
  //Account
  userLogin: loginReducer,

  //Stores
  storesListReducer: storesListReducer,
  storeCreateReducer: storeCreateReducer,
  storesDetailReducer: storesDetailReducer,
  storesUpdateReducer: storesUpdateReducer,

  //Sellers
  sellersListReducer: sellersListReducer,
  sellerDetailReducer: sellerDetailReducer,
  sellerUpdateReducer: sellerUpdateReducer,
  sellerCreateReducer: sellerCreateReducer,
})

const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export { store }