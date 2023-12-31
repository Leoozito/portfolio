'use client'
import Image from 'next/image'
import React, { useEffect } from 'react';

export default function Apresentacao() {

  return(
    <>
      {/* minha foto */}
      <Image width={760} height={160} className="items-center block absolute mx-auto 2xl:bottom-0 sm:top-36 md:-bottom-20 right-0 sm:left-12 lg:block mt-6 h-5/6 object-cover sm:p-14 2xl:p-0" src='/my-picture.png' alt="Minha foto perfil"/>
      
      {/* circulo */}
      <div className=" -bottom-1/12 left-0 mx-auto 2xl:w-big 2xl:h-big sm:w-[460px] sm:h-[460px] bg-indigo-900 rounded-full -z-10 right-0 mt-40 dark:bg-gradient-to-b dark:from-indigo-50 dark:via-indigo-300 dark:to-indigo-900 block visible absolute dark:static"></div>
      
      {/* profissão */}
      <div className="items-center absolute top-1/3 left-5 sm:left-10 sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl lg:left-5 xl:left-48 font-bold">
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-800 to-gray-400 dark:from-white dark:via-blue-gray-300 dark:to-white">Desenvolvedor</p>

        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-indigo-900 to-indigo-500 dark:from-white">Full-Stack</p>
      </div>
      
      {/* resumo de perfil */}
      <div className="sm:items-center lg:items-start sm:flex flex-col lg:gap-5 sm:gap-1 absolute rounded-md shadow-lg top-0 sm:bottom-14 xl:bottom-0 m-auto lg:right-10 sm:right-4 dark:bg-[#1e293b] bg-white lg:p-6 sm:p-4 h-fit sm:w-56 lg:w-80 xl:w-96 2xl:w-1/3">
        <h1 className="sm:text-xl lg:text-2xl 2xl:text-3xl font-bold text-indigo-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#eef2ff] dark:via-[#7dd3fc] dark:to-[#eef2ff]">Olá, Me chamo Leonardo</h1>
        <p className="dark:text-white sm:text-md lg:text-lg xl:text-xl">Interessado em trabalhar ao lado de uma pessoa que esteja empolgado com novos desafios, e que tenha comprometimento e criatividade?</p>
        <a className="bg-indigo-600 text-white sm:text-sm xl:text-xl sm:px-2 sm:py-1 lg:px-3 lg:py-2 rounded-md font-semibold w-fit sm:mt-1.5 lg:mt-0" href="#">Contate-Me</a>
      </div>
    </>
  )
}