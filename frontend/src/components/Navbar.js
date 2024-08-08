 import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai';
import Cart from '../containers/Cart';
import { useStateContext } from '../context/StateContext';
import { MdKeyboardArrowDown } from 'react-icons/md';
import UserProfile from '../containers/UserProfile';
import state from '../stores';

const Navbar = ({ isAuthenticated, logout }) => {
  // const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { showCart, setShowCart, totalQuantities, activeMenu, setActiveMenu, showUserProfile, setShowUserProfile } = useStateContext();

  const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button type='button' onClick={() => customFunc()} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'></span>
      {icon}
    </button>
  );

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  
  const authLinks = (
    <Fragment>
      <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
        <NavLink aria-current="page" to="/dashboard">Dashboard</NavLink>
      </li>
      <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
        <NavLink aria-current="page" to="/courses">Courses</NavLink>
      </li>
      <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
        <a aria-current="page" onClick={logout} href='/'>Logout</a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
        <NavLink aria-current="page" to="/login">Login</NavLink>
      </li>
      <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
        <NavLink aria-current="page" to="/register">Register</NavLink>
      </li>
    </Fragment>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sm:px-16 w-full flex justify-between p-1 fixed top-0 z-50 ${ scrolled ? "bg-gradient-to-r from-red-950 from-15% to-[#fbce08] to-95%" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link className="flex items-center gap-1" exact to="/" onClick={() => state.intro = true}>
          <img src='./DisenosDoradosLogo.png' alt='logo' className='w-16 h-16 object-contain' />
          <p className='text-[#fbce08] text-[18px] font-bold cursor-pointer flex'>
            Disenos Dorados
          </p>
        </Link>
        {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
          { isAuthenticated ? authLinks : guestLinks }
        </ul> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
            </li>
            { isAuthenticated ? authLinks : guestLinks }
          </ul>
        </div> */}
      </div>
      <div className='flex gap-2'>
        <button type='button' className='text-[25px] text-gray-400 cursor-pointer relative duration-500 ease-in-out border-none bg-transparent hover:scale-110 mr-4' onClick={() => setShowCart(true)}>
          <span className='absolute -right-[15px] text-xs text-white bg-red-600 w-[18px] h-[18px] rounded-[50%] text-center items-center font-semibold'>{totalQuantities}</span>
          <AiOutlineShopping />
        </button>
        <div className='flex items-center gap-2 cursor-pointer p-1 m-1 hover:bg-transparent rounded-lg' onClick={() => setShowUserProfile(true)}>
          <img className='rounded-full w-8 h-8' src='./DisenosDoradosLogo.png' alt='avatar' />
          <p>
            <span className='text-gray-400 text-14'>Hi,</span>{' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>You</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14' />
        </div>

        {showCart && <Cart />}
        {showUserProfile && <UserProfile />}
      </div>
    </nav>
    // <div className='w-full flex items-center justify-between bg-gradient-to-r from-red-950 from-15% to-[#fbce08] to-95% text-white top-0 z-20 p-2 md:mx-6 fixed relative'>
    //   {/* <NavButton title='Menu' customFunc={handleActiveMenu} color='03C9D7' icon={<AiOutlineMenu />} /> */}
    //   <Link to='/' className='flex flex-col items-center gap-7 w-fit xl:h-full justify-start'>
    //     <img
    //       src='./DisenosDoradosLogo.png'
    //       alt='logo'
    //       className='w-fit w-24 h-14 object-contain'
    //     />
    //   </Link>
    //   <ul className='list-none hidden sm:flex flex-row gap-5'>
    //     <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
    //       <NavLink exact to='/'>Home</NavLink>
    //     </li>
    //     { isAuthenticated ? authLinks : guestLinks }
    //   </ul>
    //   <button type='button' className='text-[25px] text-gray-400 cursor-pointer relative duration-500 ease-in-out border-none bg-transparent hover:scale-110 mr-4' onClick={() => setShowCart(true)}>
    //     <span className='absolute -right-[15px] text-xs text-white bg-red-600 w-[18px] h-[18px] rounded-[50%] text-center items-center font-semibold'>{totalQuantities}</span>
    //     <AiOutlineShopping />
    //   </button>
        
    //   {showCart && <Cart />}
    // </div>
    // <nav className='w-full flex items-center top-0 z-20 hover:bg-slate-500 bg-transparent fixed'>
    //   <div className='w-full flex justify-between items-center mx-auto relative md:static bg-main-bg dark:bg-main-dark-bg navbar'>
    //     <NavButton title='Menu' customFunc={handleActiveMenu} color='03C9D7' icon={<AiOutlineMenu />} />
    //     {/* <Link to='/' className='flex items-center gap-2'>Session Auth</Link> */}
    //     <ul className='list-none hidden sm:flex flex-row gap-5'>
    //       <li className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'>
    //         <NavLink exact to='/'>Home</NavLink>
    //       </li>
    //       { isAuthenticated ? authLinks : guestLinks }
    //     </ul>
    //     <button type='button' className='text-[25px] text-gray-400 cursor-pointer relative duration-500 ease-in-out border-none bg-transparent hover:scale-110 mr-4' onClick={() => setShowCart(true)}>
    //       <span className='absolute -right-[15px] text-xs text-white bg-red-600 w-[18px] h-[18px] rounded-[50%] text-center items-center font-semibold'>{totalQuantities}</span>
    //       <AiOutlineShopping />
    //     </button>
        
    //     {showCart && <Cart />}
    //   </div>
    // </nav>
    // <div className='flex flex-row justify-between p-2 pb-5 md:mx-6 fixed'>
    //   <Link to='/'>Session Auth</Link>
    //   <div className='flex'>
    //     <ul>
    //       <li className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
    //         <NavLink aria-current="page" to='/'>Home</NavLink>
    //       </li>
    //       { isAuthenticated ? authLinks : guestLinks }
    //     </ul>
    //   </div>
    // </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);
