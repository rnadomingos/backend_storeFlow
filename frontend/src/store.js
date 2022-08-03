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
import { serviceTypeListReducer } from './components/serviceType/reducers/serviceTypeListReducer'
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
import { segmentListReducer } from './components/segment/reducers/admin/segmentListReducer'
import { segmentCreateReducer } from './components/segment/reducers/admin/segmentCreateReducer'
import { forgotPasswordReducer } from './components/account/reducers/forgotPasswordReducer'
import { userListReducer } from './components/account/reducers/admin/userListReducer'
import { userCreateReducer } from './components/account/reducers/admin/userCreateReducer'
import { userUpdateReducer } from './components/account/reducers/admin/userUpdateReducer'
import { userDetailReducer } from './components/account/reducers/userDetailReducer'
import { userUpdatePasswordReducer } from './components/account/reducers/userUpdatePasswordReducer'
import { segmentDetailReducer } from './components/segment/reducers/admin/segmentDetailReducer'
import { segmentUpdateReducer } from './components/segment/reducers/admin/segmentUpdateReducer'
import { storeSegmentListReducer } from './components/store/reducers/admin/storeSegmentListReducer'
import { storeJoinSegmentReducer } from './components/store/reducers/admin/storeJoinSegmentReducer'
import { storeSeparateSegmentReducer } from './components/store/reducers/admin/storeSeparateSegmentReducer'
import { userStoreDetailReducer } from './components/account/reducers/userStoreDetailReducer'
import { storeFlowCreateReducer } from './components/storeFlow/reducers/storeFlowCreateReducer'
import { storeSellersReducer } from './components/store/reducers/storeSellersReducer'
import { prospectionDeleteReducer } from './components/prospection/reducers/admin/prospectionDeleteReducer'


const reducer = combineReducers({
  //Account
  userLogin: loginReducer,
  forgotPassword: forgotPasswordReducer,
  userListReducer: userListReducer,
  userCreateReducer: userCreateReducer,
  userDetailReducer: userDetailReducer,
  userUpdateReducer: userUpdateReducer,
  userUpdatePasswordReducer: userUpdatePasswordReducer,
  userStoreDetailReducer: userStoreDetailReducer,

  //Stores
  storesListReducer: storesListReducer,
  storeCreateReducer: storeCreateReducer,
  storesDetailReducer: storesDetailReducer,
  storesUpdateReducer: storesUpdateReducer,
  storeSegmentListReducer: storeSegmentListReducer,
  storeJoinSegmentReducer: storeJoinSegmentReducer,
  storeSeparateSegmentReducer: storeSeparateSegmentReducer,
  storeSellersReducer: storeSellersReducer,

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
  prospectionDeleteReducer: prospectionDeleteReducer,

  //Social Media
  socialMediaListReducer: socialMediaListReducer,
  socialMediaCreateReducer: socialMediaCreateReducer,
  socialMediaDetailReducer: socialMediaDetailReducer,
  socialMediaUpdateReducer: socialMediaUpdateReducer,

  //Segment
  segmentListReducer: segmentListReducer,
  segmentCreateReducer: segmentCreateReducer,
  segmentDetailReducer: segmentDetailReducer,
  segmentUpdateReducer: segmentUpdateReducer,

  //Store Flow
  storeFlowCreateReducer: storeFlowCreateReducer

})

const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null

let initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export { store }