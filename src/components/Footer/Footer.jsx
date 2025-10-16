import React from 'react'

const Footer = () => {
  return (
    <div dir='ltr' className='overflow-hidden items-center h-32 px-40 py-2 bg-black rounded-t-lg text-white flex justify-between'>
      <img className='h-72 opacity-45' src="/src/assets/imgs/logo-inv.png" alt="" />
      <p className='self-end text-center text-gray-500'>DICE GAMERS @ all rights received</p>
      <div className='flex text-red-400 text-6xl items-center'>
        <i className="fa-brands fa-square-facebook cursor-pointer"></i>
        <i className="fa-brands fa-square-whatsapp"></i>
      </div>
    </div>
  )
}

export default Footer
