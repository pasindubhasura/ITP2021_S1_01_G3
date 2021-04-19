import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerTable from './components/customerTable/customerTable';
import AddCustomer from './components/addCustomer/addCustomer';
import UpdateCustomer from './components/updateCustomer/updateCustomer';
import CustomerLogin from './components/customerLogin/customerLogin';
import CustomerRegister from './components/customerRegister/customerRegister';
import CustomerUserProfile from './components/customerUserProfile/customerUserProfile';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import CustomerPasswordReset from './components/customerPasswordReset/customerPasswordReset';

function App() {
  return (
    <div className="container">
    <Router>
      <Route exact path="/customers" component = {CustomerTable} exact></Route>
      <Route path="/customer/add" component = {AddCustomer} exact></Route>
      <Route path="/updateCustomer/:id" component = {UpdateCustomer} exact></Route>
      <PublicRoute path="/customer/login" component = {CustomerLogin} exact></PublicRoute>
      <PublicRoute path="/customer/register" component = {CustomerRegister} exact></PublicRoute>
      <PrivateRoute path="/customer/profile" component = {CustomerUserProfile} exact></PrivateRoute>
      <PrivateRoute path="/customer/profile/password-reset" component = {CustomerPasswordReset} exact></PrivateRoute>
    </Router>
    </div>
  );
}

export default App;
