"use client"

import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import { RiMoonClearFill } from 'react-icons/ri'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="w-full fixed top-0 bg-transparent z-10 dark:bg-slate-900">
      <div className="container mx-auto py-5 flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-900">Logo Company.</span>
        </div>
          {/* <div className='hidden md:flex items-center justify-center'> */}
        <ul className='hidden md:flex items-center space-x-10 text-gray-600 font-bold text-sm uppercase'>
          <li className='hover:text-gray-500'>
            <a href='#'>Homepage</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>About Me</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>Services</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>Works</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>Contact</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='/pagina-teste'>Tela de Criações e Testes</a>
          </li>
        </ul>
        {/* <span className='hidden md:block w-5 cursor-pointer'>DARK MODE</span> */}
        <RiMoonClearFill className='text-3xl'/>
        <div onClick={alternarMenu} className='md:hidden cursor-pointer z-20'>
          <FaBars />
        </div>
        {menuAberto && (
        <ul id="menu" className='bg-red-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white'>
          <li className='hover:text-gray-500'>
            <a href='#'>Homepage</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>About Me</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>Services</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>Works</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#'>Contact</a>
          </li>
        </ul>
        )}
      </div>
    </nav>
  )
}
