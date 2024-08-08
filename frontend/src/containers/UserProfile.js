import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../context/StateContext';
import { NavLink } from 'react-router-dom';

const UserProfile = ({ isAuthenticated, logout }) => {
  const { setShowUserProfile } = useStateContext();
  return (
    <div className='nav-item absolute right-1 top-16 glassmorphism dark:glassmorphism rounded-lg w-96 pt-1 mt-1'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg'>
          <button type='button' className='flex items-center text-lg font-medium cursor-pointer gap-1 ml-1 border-none bg-transparent' onClick={() => setShowUserProfile(false)}>
              <MdOutlineCancel />
          </button>
        </p>
      </div>
      {isAuthenticated ? (
        <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
          <img className='rounded-full h-24 w-24' src='./DisenosDoradosLogo.png' alt='user-profile' />
          <div>
            <p className='font-semibold text-xl dark:text-gray-200'>Jesse</p>
            <p className='text-gray-500 text-sm dark:text-gray-400'>Administrator</p>
          </div>
        </div>
      ) : (
        <div className='flex gap-5 mt-6 border-color border-b-1 pb-6'>
          <p className='font-semibold text-xl'>Welcome, Kindly: </p>
          <div className='mt-5 flex flex-row gap-5 justify-between items-center'>
            <button type='button' className='border-color bg-red-500 rounded-md w-full p-2' onClick={() => setShowUserProfile(false)}>
              <NavLink aria-current="page" to="/login">Login</NavLink>
            </button>
            <button type='button' className='bg-red-500 border-color rounded-md w-full p-2' onClick={() => setShowUserProfile(false)}>
              <NavLink aria-current="page" to="/register">Register</NavLink>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile
