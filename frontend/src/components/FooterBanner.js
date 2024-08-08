import React from 'react';
import { Link } from 'react-router-dom';

const FooterBanner = ({ footerBanner: { image, smallText, midText, desc, buttonText, discount, largeText1, largeText2, saleTime } }) => {
  return (
    <div className='mt-[150px] p-10 pt-24 pr-10 bg-gradient-to-r from-[#f8ca0a] from-10% via-[#e8b602] via-30% to-[#f8d104] to-90% text-white rounded-2xl relative h-[400px] leading-4 w-full'>
      <div className='flex justify-between'>
        <div className='absolute flex flex-col'>
            <p className='m-[18px]'>{discount}</p>
            <h3 className='sm:text-[24px] font-black ml-2'>{largeText1}</h3>
            <h3 className='md:text-[24px] font-black ml-2'>{largeText2}</h3>
            <p className='m-[18px]'>{saleTime}</p>
        </div>
        <div className='absolute right-[5%] bottom-[10%] flex flex-col text-right'>
            <p className='text-[18px]'>{smallText}</p>
            <h3 className='text-[20px] font-extrabold'>{midText}</h3>
            <p className='text-[14px] font-light'>{desc}</p>
            <Link to={`/products/`}>
                <button type='button' className='p-4 bg-white text-red-600 border-none mt-10 mr-3 text-[18px] font-medium cursor-pointer rounded-2xl'>{buttonText}</button>
            </Link>
        </div>
        <img src={image} alt={image} className='absolute -top-1/4 left-1/4 w-[350px] h-[350px]'/>
      </div>
    </div>
  )
}

export default FooterBanner
