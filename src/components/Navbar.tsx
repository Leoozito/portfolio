"use client"

import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { BsFillMoonStarsFill,BsFillSunFill } from 'react-icons/bs'
import { VscError } from "react-icons/vsc";

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
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-2">
          {theme !== 'dark' ? (          
            <Image 
              width={80} 
              height={80} 
              src='/logos/my-logo-blue.svg' 
              alt="Logo do site"
              className='m-0'
            />
          ) : (
            <Image 
              width={80} 
              height={80} 
              src='/logos/my-logo-white.svg' 
              alt="Logo do site"
              className='m-0'
            />
          )}
        </div>
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
        {!menuAberto ? (
          <button onClick={alternarMenu} className='md:hidden cursor-pointer z-20'>
            <FaBars size={24}  className='dark:text-white'/>
          </button>) : (
          <button onClick={alternarMenu} className='md:hidden cursor-pointer z-20'>
            <VscError size={28} className='text-white'/>
          </button>
        )}

        {menuAberto && (
          <ul 
            className='bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center'>
            <li className='hover:text-gray-500'>
              <a href='#apresentacao'>Homepage</a>
            </li>
            <li className='hover:text-gray-500'>
              <a href='#biografia'>About Me</a>
            </li>
            <li className='hover:text-gray-500'>
              <a href='#habilidades'>Services</a>
            </li>
            <li className='hover:text-gray-500'>
              <a href='#experiencia'>Works</a>
            </li>
            <li className='hover:text-gray-500'>
              <a href='#contato'>Contact</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}
