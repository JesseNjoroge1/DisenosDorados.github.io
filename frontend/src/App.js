import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './hocs/Layouts';
import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

import PrivateRoute from './hocs/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';
import Courses from './containers/Courses';
import ProductDetail from './containers/ProductDetail';
import { StateContext } from './context/StateContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import { Toaster } from 'react-hot-toast';

const App = ({ isAuthenticated }) => {
  return (
    <Provider store={store}>
        <Router>
          <StateContext>
              <Layout>
                {/* <Toaster /> */}
                  <Routes>
                      <Route exact path='/' Component={Home} />
                      <Route exact path='/register' Component={Register} />
                      <Route exact path='/login' Component={Login} />
                      <Route exact path='/dashboard' element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      } />
                      <Route exact path='/courses' Component={Courses} />
                      <Route path='/product/:id' Component={ProductDetail} />
                  </Routes>
              </Layout>
            </StateContext>
        </Router>
    </Provider>
  )
};

export default App;
