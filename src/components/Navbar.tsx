"use client"

import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill,BsFillSunFill } from 'react-icons/bs'

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [modifyIconTheme, setModifyIconTheme] = useState(false)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);    

  useEffect(() => {
    // Dark Mode
    if (theme == "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);

  const modifyTheme = () => {
    setModifyIconTheme(!modifyIconTheme)
    setTheme(theme === 'dark' ? 'light': 'dark')
  }
  const navClasses = `w-full fixed top-0 backdrop-blur z-10 dark:bg-slate-900 ${
    scrolling ? "shadow-xl" : ""
  }`;

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className={navClasses}>
      <div className="container mx-auto py-5 flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-900">Logo Company.</span>
        </div>
          {/* <div className='hidden md:flex items-center justify-center'> */}
        <ul className='hidden md:flex items-center space-x-10 dark:text-white text-gray-700 font-bold text-sm uppercase'>
          <li className='hover:text-gray-500'>
            <a href='#apresentacao'>Homepage</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#biografia'>About Me</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#habilidades'>Skills</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#experiencia'>Experience</a>
          </li>
          <li className='hover:text-gray-500'>
            <a href='#contato'>Contact</a>
          </li>
        </ul>
        {/* <span className='hidden md:block w-5 cursor-pointer'>DARK MODE</span> */}
        {!modifyIconTheme && (
        <button onClick={modifyTheme} >
          <BsFillMoonStarsFill className='text-3xl dark:text-white'/>
        </button>
        )}
        {modifyIconTheme && (
        <button onClick={modifyTheme}>
          <BsFillSunFill className='text-3xl dark:text-white'/>
        </button>
        )}
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
