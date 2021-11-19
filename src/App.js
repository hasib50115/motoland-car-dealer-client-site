
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage/HomePage';

import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Home/PurchasePage/Purchase';
import Explore from './Pages/Explore/Explore';
import Jump from './Pages/Jump/Jump';
import Navigation from './Pages/Home/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Pages/context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardRoute from './Pages/Dashboard/Dashboard/DashboardRoute';
import Booking from './Pages/BookingPage/Booking';
import Footer from './Pages/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        
        <Router>
          <Navigation></Navigation>
            <Switch>
              <Route exact path='/'>
                <HomePage></HomePage>
              </Route>
              <Route path='/homepage'>
                <HomePage></HomePage>
              </Route>
              <Route path='/jump'>
                <Jump></Jump>
              </Route>
              <PrivateRoute path='/purchase/:serviceId'>
                <Purchase></Purchase>
              </PrivateRoute>
              <PrivateRoute path='/booking'>
                <Booking></Booking>
              </PrivateRoute>
                
              <Route path='/explore'>
                <Explore></Explore>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <PrivateRoute path='/dashboard'>
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path='/dashboardroute'>
                <DashboardRoute></DashboardRoute>
              </PrivateRoute>            
            </Switch>
            <Footer></Footer>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

/* <PrivateRoute path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute> */
