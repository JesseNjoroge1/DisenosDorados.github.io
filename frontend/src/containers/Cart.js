import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0' ref={cartRef}>
      <div className='float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8'>
        <button type='button' className='flex items-center text-lg font-medium cursor-pointer gap-1 ml-1 border-none bg-transparent' onClick={() => setShowCart(false)}>
            <AiOutlineLeft />
            <span className='heading'>Your Cart</span>
            <span className='cart-num-items'>({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
            <div className='empty-cart'>
                <AiOutlineShopping size={150} />
                <h3>Your shopping cart is empty</h3>
                <Link to='/'>
                    <button 
                        type='button'
                        onClick={() => setShowCart(false)}
                        className='btn'
                    >
                        Continue Shopping
                    </button>
                </Link>
            </div>
        )}
        <div className='mt-[15px] overflow-auto max-h-[70vh] pt-[20px] pr-[10px]'>
            {cartItems.length >= 1 && cartItems.map((item) => (
                <div key={item.id}>
                    <div>
                        <div className='flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4'>
                            <img src={item.image} alt={item.image_caption} className='w-24 h-80 rounded-lg bg-white' />
                            <div>
                                <p className='font-semibold'>{item.name}</p>
                                <div className='flex gap-4 mt-2 items-center'>
                                    <p className='font-semibold text-lg'>KSH {item.price}</p>
                                    <div className='flex items-center border-1 border-r-0 border-color rounded'>
                                        <p className='p-2 border-r-1 dark:border-gray-600 border-color text-red-600' onClick={() => toggleCartItemQuantity(item, 'dec')}><AiOutlineMinus /></p>
                                        <p className='p-2 border-r-1 border-color dark:border-gray-600 text-green-600'>{item.quantity}</p>
                                        <p className='p-2 border-r-1 border-color dark:border-gray-600 text-green-600' onClick={() => toggleCartItemQuantity(item, 'inc')}><AiOutlinePlus /></p>
                                    </div>
                                    <button
                                        type='button'
                                        className='remove-item'
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {cartItems.length >= 1 && (
            <div className='mt-3 mb-3 fixed'>
                <div className='flex flex-row gap-[180px] justify-center items-center'>
                    <p className='text-[20px]'>Subtotal:</p>
                    <p className='text-[20px]'>KSH{totalPrice}</p>
                </div>
                <div className='flex flex-row mt-2 items-center justify-center'>
                    <button type='button' className='
                        w-full max-w-[400px] pl-[10px] ml-4 mb-0 mr-4 rounded-[15px] border-none text-[20px] uppercase bg-red-600 text-white cursor-pointer scale-100 items-center
                    ' onClick=''>
                        Pay Now
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Cart
