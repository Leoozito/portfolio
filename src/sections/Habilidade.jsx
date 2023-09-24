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
            <div className="w-4/5 mr-12 flex flex-row">
                <motion.div className="flex flex-1 flex-wrap justify-start items-start mr-16">
                    <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="flex-col text-center m flex justify-center transition-all duration-300 ease-in-out m-4 items-center"
                    >
                    <div
                        className="flex justify-center items-center"
                    >
                        <Image
                            width={50} 
                            height={50} 
                            src="/img_tecnologies/html.png" 
                            alt="foto do icon html" 
                        />
                    </div>
                    <p className="p-text font-bold mt-2">HTML</p>
                    </motion.div>
                </motion.div>  
            </div>    
        </>
    )
}