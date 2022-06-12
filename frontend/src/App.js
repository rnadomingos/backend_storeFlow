import { HashRouter as Router, Route } from 'react-router-dom'
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
import { ServiceTypesScreen } from './components/serviceType/screens/admin/ServiceTypesScreen'
import { CreateServiceTypeScreen } from './components/serviceType/screens/admin/CreateServiceTypeScreen';
import { UpdateServiceTypeScreen } from './components/serviceType/screens/admin/UpdateServiceTypeScreen'
import { ProspectionScreen } from './components/prospection/screens/admin/ProspectionScreen';
import { CreateProspectionScreen } from './components/prospection/screens/admin/CreateProspectionScreen';

function App() {
  const { userInfo } = useSelector(state => state.userLogin)

  return (
    <Router>
      {userInfo && <Header />}
      {!userInfo && <Route path='/' component={LoginScreen} />}
      <Route path='/password/forgot' component={ForgotPasswordScreen} />

      <Container>
        <main className='mx-auto'>
          <ProtectRoute path='/home' component={Home} />
          <ProtectRoute isAdmin={true} path='/admin/stores' component={StoresScreen} />
          <ProtectRoute path='/admin/store/new' component={CreateStoreScreen} />
          <ProtectRoute path='/admin/store/:cnpj/edit' component={UpdateStoreScreen} />
          <ProtectRoute isAdmin={true} path='/admin/sellers' component={SellerScreen} />
          <ProtectRoute path='/admin/seller/:user_dms/edit' component={UpdateSellerScreen} />
          <ProtectRoute path='/admin/seller/new' component={CreateSellerScreen} />
          <ProtectRoute isAdmin={true} path='/admin/service-types' component={ServiceTypesScreen} />
          <ProtectRoute path='/admin/service-type/:id/edit' component={UpdateServiceTypeScreen} />
          <ProtectRoute path='/admin/service-type/new' component={CreateServiceTypeScreen} />
          <ProtectRoute isAdmin={true} path='/admin/prospections' component={ProspectionScreen} />
          <ProtectRoute path='/admin/prospection/new' component={CreateProspectionScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
