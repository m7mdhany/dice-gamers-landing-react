import React from 'react'
import logo from '../../assets/imgs/logo-inv.png'
const Footer = () => {
  return (
    <div dir='ltr' className='overflow-hidden relative items-center md:h-24 md:px-40 py-2 bg-black rounded-t-lg text-white flex md:flex-row flex-col-reverse justify-between'>
      <img className='h-72 opacity-45 md:static absolute -top-20' src={logo} alt="" />
      <p className='self-end text-center text-gray-500 w-full'>DICE GAMERS @ all rights received</p>
      <div className='flex text-red-400 md:text-6xl text-5xl z-10 bg-black items-center'>
        <i className="fa-brands fa-square-facebook cursor-pointer "></i>
        <i className="fa-brands fa-square-whatsapp"></i>
      </div>
    </div>
  )
}

export default Footer
