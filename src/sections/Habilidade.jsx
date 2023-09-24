'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
    return (
        <>
            <div className="justify-center items-center flex">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Habilidades</h1>
            </div>
            <div className="w-4/5 mt-12 justify-center flex gap-8">
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-orange-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/html.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
                
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/css.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-yellow-200"
                >
                    <Image
                        width={60} 
                        height={60} 
                        src="/img_tecnologies/javascript.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-orange-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/git.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-yellow-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/python.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={44} 
                        height={44} 
                        src="/img_tecnologies/typescript.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
                <div
                    className="h-24 w-24 justify-center flex rounded-full items-center bg-blue-200"
                >
                    <Image
                        width={50} 
                        height={50} 
                        src="/img_tecnologies/mu5.png" 
                        alt="foto do icon html" 
                    /> 
                </div>
            </div>
        </>
    )
}