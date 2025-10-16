import React from 'react'
import { Link, Links } from 'react-router-dom'

const Header = () => {
  return (
    <div dir='ltr' className='bg-gradient-to-l from-gray-800 to-gray-900 h-16 p-2 flex items-center gap-10 justify-between rounded-b-lg'>
      <img src="/src/assets/imgs/logo-inv.png" className='h-full ' alt="" />
      <Link to="/">
      <h2 className='text-white text-5xl font-bold'>DICE GAMERS</h2>
      </Link>
      <img src="/src/assets/imgs/logo-inv.png" className='h-full ' alt="" />
    </div>
  )
}

export default Header
