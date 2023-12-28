'use client'
import Image from 'next/image'
import React, { useEffect } from 'react';

export default function Apresentacao() {

  return(
    <>
      {/* minha foto */}
      <Image width={760} height={260} className="absolute bottom-0 right-0 lg:left-20 mx-auto h-5/6 object-cover" src='/my-picture.png' alt="Minha foto perfil"/>
      {/* circulo */}
      <div className="hidden lg:block absolute -bottom-1/12 right-0 left-0 mx-auto w-big h-big bg-indigo-900 dark:bg-gradient-to-b dark:from-indigo-50 dark:via-indigo-300 dark:to-indigo-900 rounded-full -z-10"></div>
      {/* profissão */}
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md-left-1/4 md:text-6xl lg:left-5 xl:left-48 xl-text-7xl font-bold">
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-800 to-gray-500 dark:from-white dark:via-blue-gray-300 dark:to-white">Full-Stack</span>
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-indigo-900 to-indigo-500 dark:from-white">Developer</p>
      </div>
      {/* resumo de perfil */}
      <div className="hidden lg:flex flex-col gap-5 absolute rounded-md shadow-lg top-0 bottom-0 m-auto right-10 dark:bg-[#1e293b] bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[#eef2ff] dark:via-[#7dd3fc] dark:to-[#eef2ff]">Olá, Me chamo Leonardo</h1>
        <p className="dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ab dolorem voluptatum quisquam ut dicta aliquid quas odit quia, similique, amet cupiditate? Laboriosam, ullam! Exercitationem ratione minus mollitia quia error?</p>
        <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#">Contate-Me</a>
      </div>
    </>
  )
}