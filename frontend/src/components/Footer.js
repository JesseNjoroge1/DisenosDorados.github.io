import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-gray-400 text-center mt-[20px] pt-[30px] pr-[10px] font-bold flex flex-col items-center gap-[10px] justify-center'>
      <p>2023 Disenos Dorados All rights reserved</p>
      <p className='text-[30px] flex gap-[10px]'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
