'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    return (
        <>
            {/* titulo */}
            <div className="justify-center items-center flex">
                <h1 className="xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Habilidades</h1>
            </div>

            {/* tecnologias */}
            <div className="xs:mt-8 sm:mt-12 justify-center flex gap-8 flex-wrap">
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-orange-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/html.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 
                    /> 
                </div>
                
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/css.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12"   
                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/tailwindcss-icon.svg" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 
                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-yellow-200"
                >
                    <Image
                        width={60} 
                        height={60} 
                        src="/img_tecnologies/javascript.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-14 sm:h-14" 
 
                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-orange-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/git.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 
 
                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-yellow-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/python.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 
 
                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={44} 
                        height={44} 
                        src="/img_tecnologies/typescript.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 

                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/mu5.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 
 
                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-gray-300"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/nextjs.svg" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 

                    /> 
                </div>
                <div
                    className="xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center bg-gray-800"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/react.png" 
                        alt="foto do icon html"
                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 

                    /> 
                </div>
            </div>
        </>
    )
}