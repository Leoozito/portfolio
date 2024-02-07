'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Skills() {

    const tecnologias = [
            {"name_tech": "HTML", "color_tech":"bg-orange-200", "img_tech": "/img_tecnologies/html.png", "size_img": 50, "alt_img": "Icone do HTML" },

            {"name_tech": "CSS", "color_tech":"bg-blue-200", "img_tech": "/img_tecnologies/css.png", "size_img": 50, "alt_img": "Icone do CSS" },

            {"name_tech": "Tailwind CSS" , "color_tech":"bg-blue-200", "img_tech": "/img_tecnologies/tailwindcss-icon.svg", "size_img": 50, "alt_img": "Icone do TailwindCSS" },

            {"name_tech": "JavaScript", "color_tech":"bg-yellow-200", "img_tech": "/img_tecnologies/javascript.png", "size_img": 60, "alt_img": "Icone do JavaScript" },

            { "name_tech": "Git", "color_tech":"bg-orange-200", "img_tech": "/img_tecnologies/git.png", "size_img": 50, "alt_img": "Icone do GIT" },

            { "name_tech": "Python" , "color_tech":"bg-yellow-200", "img_tech": "/img_tecnologies/python.png", "size_img": 50, "alt_img": "Icone do Python" },

            { "name_tech": "Typescript" , "color_tech":"bg-blue-200", "img_tech": "/img_tecnologies/typescript.png", "size_img": 44, "alt_img": "Icone do TypeScript" },

            { "name_tech": "MUI" , "color_tech":"bg-blue-200", "img_tech": "/img_tecnologies/mu5.png", "size_img": 50, "alt_img": "Icone do MUI" },

            { "name_tech": "NextJS" , "color_tech":"bg-gray-300", "img_tech": "/img_tecnologies/nextjs.svg", "size_img": 50, "alt_img": "Icone do NextJS" },

            {"name_tech": "ReactJS", "color_tech":"bg-gray-800", "img_tech": "/img_tecnologies/react.png", "size_img": 50, "alt_img": "Icone do ReactJS" },
    ]


    return (
        <>
            {/* titulo */}
            <div className="justify-center items-center flex">
                <h1 className="xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-indigo-900 dark:text-[#818cf8]">Habilidades</h1>
            </div>

            {/* tecnologias */}
            <div className="xs:mt-8 sm:mt-12 justify-center flex gap-8 flex-wrap">
                {tecnologias.map((tecnologia:any, index:any) => {
                    return(
                        <div key={index} className={`xs:h-16 xs:w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 justify-center flex rounded-full items-center ${tecnologia.color_tech}`}>
                            <Image
                                width={tecnologia.size_img} 
                                height={tecnologia.size_img} 
                                src={tecnologia.img_tech}
                                alt={tecnologia.alt_img}
                                className="xs:w-10 xs:h-10 sm:w-12 sm:h-12" 
                            /> 
                        </div>
                    )
                })}
            </div>
        </>
    )
}