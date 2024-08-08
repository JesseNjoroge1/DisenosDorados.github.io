/* eslint-disable no-undef */
import React from 'react'
import { Link } from 'react-router-dom'
import CanvasModel from '../canvas'

const HeroBanner = (
    { heroBanner: 
        { 
            buttonText,
            desc,
            discount,
            image,
            largeText1,
            largeText2,
            midText,
            saleTime,
            smallText
        } 
    }) => {
  return (
    <div className='mt-20 pt-24 mr-10 p-10 bg-gradient-to-r from-[#f8ca0a] from-10% via-[#e8b602] via-30% to-[#f6d626] to-90% rounded-2xl relative h-96 leading-3 w-full'>
      <div className='flex justify-center items-center'>
        <div className='absolute w-fit left-3.5 leading-5 flex flex-col gap-3 top-9 justify-start items-start'>
          <p className='text-[20px]'>
              {smallText}
          </p>
          <h3 className='mt-1 text-6xl sm:text-5xl mr-2'>{midText}</h3>
          <h3 className='text-white text-5xl -ml-3 uppercase'>{largeText1}</h3>
          <Link to={`/product/`}>
              <button type='button' className='p-3 rounded-2xl bg-gradient-to-r from-red-950 from-15% to-[#fbce08] to-95% text-white border-none text-[18px] font-medium cursor-pointer z-[10000]'>{buttonText}</button>
          </Link>
        </div>
        <div className='absolute inset-0 top-[30px] mx-auto left-1/3 right-1/5 min-h-[280px] min-w-7xl'>
          {/* <CanvasModel /> */}
        </div>
        <div>
            <div className='absolute right-[10%] bottom-[10%] w-80 leading-5 flex flex-col text-cyan-900'>
                {/* <h5 className='mb-3 font-extrabold text-base text-black self-end'>{desc}</h5> */}
                <p className='text-end text-slate-800 font-thick'>{desc}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
