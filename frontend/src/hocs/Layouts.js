import React, { useEffect, Fragment} from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';
import { checkAuthenticated } from '../actions/auth';
import { load_user } from '../actions/profile';
import Footer from '../components/Footer';
import { useStateContext } from '../context/StateContext';
import Home from '../containers/Home';
import { useSnapshot } from 'valtio';
import state from '../stores';

const Layouts = ({ children, checkAuthenticated, load_user }) => {
  const snap = useSnapshot(state);
  const { currentMode, activeMenu } = useStateContext();
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);
  return (
    <Fragment>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <main>
          {/* {!snap.intro ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 h-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )} */}
          {/* <div className={
            `dark:bg-main-dark-bg bg-main-bg ${activeMenu ? 'md:ml-72' : ''}`
          }> */}
          <div className='relative z-0'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              
            </div>
            <div>{children}</div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Fragment>
  )
}

export default connect(null, { checkAuthenticated, load_user })(Layouts)
