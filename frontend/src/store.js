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
import { serviceTypeListReducer } from './components/serviceType/reducers/admin/serviceTypeListReducer'
import { serviceTypeCreateReducer } from './components/serviceType/reducers/admin/serviceTypeCreateReducer'
import { serviceTypeDetailReducer } from './components/serviceType/reducers/serviceTypeDatailReducer'
import { serviceTypeUpdateReducer } from './components/serviceType/reducers/admin/serviceTypeUpdateReducer'
import { prospectionListReducer } from './components/prospection/reducers/admin/prospectionListReducer'
import { prospectionCreateReducer } from './components/prospection/reducers/admin/prospectionCreateReducer'
import { prospectionDetailUpdateReducer } from './components/prospection/reducers/admin/prospectionDetailUpdateReducer'
import { prospectionUpdateReducer } from './components/prospection/reducers/admin/prospectionUpdateReducer'
import { socialMediaListReducer } from './components/socialMedia/reducers/admin/socialMediaListReducer'
import { socialMediaCreateReducer } from './components/socialMedia/reducers/admin/socialMediaCreateReducer'
import { socialMediaDetailReducer } from './components/socialMedia/reducers/admin/socialMediaDetailReducer'
import { socialMediaUpdateReducer } from './components/socialMedia/reducers/admin/socialMediaUpdateReducer'

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

  //Service Types
  serviceTypeListReducer: serviceTypeListReducer,
  serviceTypeCreateReducer: serviceTypeCreateReducer,
  serviceTypeDetailReducer: serviceTypeDetailReducer,
  serviceTypeUpdateReducer: serviceTypeUpdateReducer,

  //Prospection
  prospectionListReducer: prospectionListReducer,
  prospectionCreateReducer: prospectionCreateReducer,
  prospectionDetailUpdateReducer: prospectionDetailUpdateReducer,
  prospectionUpdateReducer: prospectionUpdateReducer,

  //SocialMidia
  socialMediaListReducer: socialMediaListReducer,
  socialMediaCreateReducer: socialMediaCreateReducer,
  socialMediaDetailReducer: socialMediaDetailReducer,
  socialMediaUpdateReducer: socialMediaUpdateReducer

})

const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export { store }