'use client'
import Image from 'next/image'
import React, { useEffect } from 'react';
import { LiaFileDownloadSolid } from "react-icons/lia";
import { motion } from "framer-motion";

export default function Apresentacao() {

  return(
    <>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
      >
        <Image width={400} height={400} className="items-center block absolute dark:absolute mx-auto 2xl:bottom-0 xs:top-20 sm:top-36 md:-bottom-20 right-0 xs:left-6 sm:left-12 lg:block sm:mt-6 lg:h-5/6 object-cover xs:p-16 sm:p-14 2xl:p-0 xs:w-[400px] sm:w-[560px] sm:h-[560px] md:w-[760px]" src='/my-picture.png' alt="Minha foto perfil"/>
      </motion.div>
      
      <motion.div         
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="lg:-bottom-1/12 xs:top-12 left-0 mx-auto 2xl:w-big 2xl:h-big xs:w-[260px] xs:h-[260px] sm:w-[460px] sm:h-[460px] bg-indigo-900 rounded-full -z-10 right-0 xs:mt-28 sm:mt-40 dark:bg-gradient-to-b dark:from-indigo-50 dark:via-indigo-300 dark:to-indigo-900 absolute"      
      >
      </motion.div>
      
      <div className="items-center absolute lg:top-1/3 left-5 sm:left-10 xs:text-2xl xs:left-12 sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl lg:left-5 xl:left-48 font-bold xs:top-24 sm:top-36">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{
            duration: 3,
            delay: 1.8,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-800 to-gray-400 dark:from-white dark:via-blue-gray-300 dark:to-white"
        >
          Desenvolvedor
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{
            duration: 3,
            delay: 2,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-indigo-900 to-indigo-500 dark:from-blue-gray-600 dark:via-white dark:to-white"
        >
          Full-Stack
        </motion.h1>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.6 }} 
        className="xs:items-center sm:items-center lg:items-start xs:flex sm:flex flex-col lg:gap-5 xs:gap-1 sm:gap-1 absolute rounded-md shadow-lg top-0 xs:-bottom-72 sm:bottom-14 xl:bottom-0 m-auto lg:right-10 xs:right-8 sm:right-4 dark:bg-[#1e293b] bg-white lg:p-6 xs:p-2 sm:p-4 h-fit xs:w-64 xs:h-44 sm:w-60 lg:w-80 xl:w-96 2xl:w-1/3"
      >

        <h1 className="xs:text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-bold text-indigo-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#eef2ff] dark:via-[#7dd3fc] dark:to-[#eef2ff]">Olá, Me chamo Leonardo</h1>
        
        <p className="dark:text-white xs:text-sm sm:text-md lg:text-lg xl:text-xl">
          Interessado em trabalhar ao lado de uma pessoa que esteja empolgado com novos desafios, e que tenha comprometimento e criatividade?
        </p>
        
        <div className='flex grid-cols-2 items-center gap-12'>
          <a
            className="dark:bg-gradient-to-r dark:to-[#7dd3fc] bg-indigo-600 text-white xs:text-sm sm:text-md lg:text-lg xl:text-xl sm:px-2 xs:p-1.5 sm:py-1 lg:px-3 lg:py-2 rounded-md font-semibold w-fit xs:mt-2.5 sm:mt-1.5 lg:mt-0"
            href="#contato"
          >
            Contate-Me
          </a>
          <a
            className="ml-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white xs:text-sm sm:text-md lg:text-lg xl:text-lg sm:px-2 xs:p-1.5 sm:py-1 lg:px-3 lg:py-2 rounded-md font-semibold xs:mt-2.5 sm:mt-1.5 lg:mt-0 dark:bg-gradient-none dark:bg-indigo-600 flex w-fit items-center"
            href="#contato"
          >
            CV
            <LiaFileDownloadSolid className='ml-1 text-white' size={32}/>
          </a>
        </div>
      </motion.div>
    </>
  )
}