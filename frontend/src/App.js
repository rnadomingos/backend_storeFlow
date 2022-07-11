import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { StoresScreen } from './components/store/screens/StoresScreen';
import { Home } from './components/layout/Home';
import { CreateStoreScreen } from './components/store/screens/CreateStoreScreen'
import { LoginScreen } from './components/account/screens/LoginScreen';
import { ForgotPasswordScreen } from './components/account/screens/ForgotPasswordScreen'
import { Container } from 'react-bootstrap';
import ProtectRoute from './components/route/ProtectRoute';
import { UpdateStoreScreen } from './components/store/screens/UpdateStoreScreen';
import { SellerScreen } from './components/seller/screens/admin/SellerScreen';
import { UpdateSellerScreen } from './components/seller/screens/admin/UpdateSellerScreen';
import { CreateSellerScreen } from './components/seller/screens/admin/CreateSellerScreen';
import { ServiceTypesScreen } from './components/serviceType/screens/admin/ServiceTypesScreen';
import { CreateServiceTypeScreen } from './components/serviceType/screens/admin/CreateServiceTypeScreen';
import { UpdateServiceTypeScreen } from './components/serviceType/screens/admin/UpdateServiceTypeScreen';
import { ProspectionScreen } from './components/prospection/screens/admin/ProspectionScreen';
import { CreateProspectionScreen } from './components/prospection/screens/admin/CreateProspectionScreen';
import { UpdateProspectionScreen } from './components/prospection/screens/admin/UpdateProspectionScreen';
import { SocialMediaListScreen } from './components/socialMedia/screen/admin/ListSocialMediaScreen';
import { CreateSocialMediaScreen } from './components/socialMedia/screen/admin/CreateSocialMediaScreen';
import { UpdateSocialMediaScreen } from './components/socialMedia/screen/admin/UpdateSocialMediaScreen';
import { SegmentScreen } from './components/segment/screens/admin/SegmentScreen';
import { CreateSegmentScreen } from './components/segment/screens/admin/CreateSegmentScreen';
import { ResetPasswordScreen } from './components/account/screens/ResetPasswordScreen';
import { UsersScreen } from './components/account/screens/admin/UsersScreen';
import { CreateUserScreen } from './components/account/screens/admin/CreateUserScreen';
import { UpdateUserScreen } from './components/account/screens/admin/UpdateUserScreen';
import { UpdatePasswordScreen } from './components/account/screens/UpdatePasswordScreen';
import { UpdateSegmentScreen } from './components/segment/screens/admin/UpdateSegmentScreen'
import { ProfileDetailScreen } from './components/account/screens/ProfileDetailScreen';


function App() {
  const { userInfo } = useSelector(state => state.userLogin)

  return (
    <Router>
      {userInfo && <Header />}
      {!userInfo && <Route path='/' component={LoginScreen} exact />}
      <Route path='/password/forgot' component={ForgotPasswordScreen} exact />
      <Route path='/password/reset' component={ResetPasswordScreen} exact />
      <main className='mx-auto'>
        <Container>
          <ProtectRoute path='/home' component={Home} />

          <ProtectRoute path='/profile' component={ProfileDetailScreen} exact />
          <ProtectRoute path='/profile/update-password' component={UpdatePasswordScreen} exact />

          <ProtectRoute path='/admin/users' isAdmin={true} component={UsersScreen} />
          <ProtectRoute path='/admin/user/new' isAdmin={true} component={CreateUserScreen} />
          <ProtectRoute path='/admin/user/:id/edit' isAdmin={true} component={UpdateUserScreen} />

          <ProtectRoute path='/admin/stores' isAdmin={true} component={StoresScreen} />
          <ProtectRoute path='/admin/store/new' component={CreateStoreScreen} />
          <ProtectRoute path='/admin/store/:cnpj/edit' component={UpdateStoreScreen} />

          <ProtectRoute path='/admin/sellers' isAdmin={true} component={SellerScreen} />
          <ProtectRoute path='/admin/seller/:user_dms/edit' component={UpdateSellerScreen} />
          <ProtectRoute path='/admin/seller/new' component={CreateSellerScreen} />

          <ProtectRoute path='/admin/service-types' isAdmin={true} component={ServiceTypesScreen} />
          <ProtectRoute path='/admin/service-type/:id/edit' component={UpdateServiceTypeScreen} />
          <ProtectRoute path='/admin/service-type/new' component={CreateServiceTypeScreen} />

          <ProtectRoute path='/admin/prospections' isAdmin={true} component={ProspectionScreen} />
          <ProtectRoute path='/admin/prospection/new' component={CreateProspectionScreen} />
          <ProtectRoute path='/admin/prospection/:id/edit' component={UpdateProspectionScreen} />

          <ProtectRoute path='/admin/social-medias' isAdmin={true} component={SocialMediaListScreen} />
          <ProtectRoute path='/admin/social-media/new' isAdmin={true} component={CreateSocialMediaScreen} />
          <ProtectRoute path='/admin/social-media/:id/edit' component={UpdateSocialMediaScreen} />

          <ProtectRoute path='/admin/segments' isAdmin={true} component={SegmentScreen} />
          <ProtectRoute isAdmin={true} path='/admin/segment/new' component={CreateSegmentScreen} />
          <ProtectRoute isAdmin={true} path='/admin/segment/:id/edit' component={UpdateSegmentScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
