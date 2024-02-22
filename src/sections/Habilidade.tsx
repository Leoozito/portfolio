'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"
import { motion } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
//import Glide from "@glidejs/glide"
import Glide, { Anchors, Autoplay, Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

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

export default function Skills() {

    const slider = useMemo(() => {
        return new Glide('.glide', {
            focusAt: "center",
            autoplay: 2000,
            perView: 6,
            hoverpause: true,
            peek: {
                before: 100,
                after: 0
            },
            breakpoints: {
                300: {
                    perView: 4,
                },
                600: {
                    perView: 3,
                },
                1000: {
                    perView: 4,
                },
                1200: {
                    perView: 4,
                }
            }
        });
    }, []);

    useEffect(() => {
        const foo = async () => {
            await slider.mount({ Anchors, Autoplay, Controls, Breakpoints });
        };
        foo();
    }, [slider]);


    
    return (
        <>
            {/* titulo */}
            <div className="justify-center items-center flex">
                <h1 
                    className="xs:text-3xl sm:text-3xl xl:text-4xl 2xl:text-4xl font-extrabold text-indigo-900 flex items-center dark:text-[#818cf8]"
                >Habilidades</h1>
            </div>

            {/* tecnologias */}
            <div className="glide mt-20">
                <div 
                    className="glide__track xs:my-8 sm:my-12 lg:mx-20 sm:mx-10 xs:mx-6" data-glide-el="track"
                >
                    <ul className="glide__slides">
                        {tecnologias.map((tecnologia, index) => (
                            <li key={index} className="glide__slide">
                                <div 
                                    className={`xs:h-16 xs:w-16 sm:h-16 sm:w-16 md:h-24 md:w-24 justify-center flex rounded-full items-center ${tecnologia.color_tech}`}
                                >
                                    <Image
                                        width={tecnologia.size_img}
                                        height={tecnologia.size_img}
                                        src={tecnologia.img_tech}
                                        alt={tecnologia.alt_img}
                                        className="xs:w-10 xs:h-10 sm:w-12 sm:h-12"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div 
                        className="glide__arrows xs:mt-32 sm:mt-32 md:mt-48" data-glide-el="controls"
                    >
                        <button 
                            className="glide__arrow glide__arrow--prev glide__arrow--left" 
                            data-glide-dir="<"
                        >
                            <HiArrowSmLeft 
                                className="xs:text-xl sm:text-2xl lg:text-4xl"
                            />
                        </button>

                        <button 
                            className="glide__arrow glide__arrow--next glide__arrow--right hover:shadow-2xl" 
                            data-glide-dir=">"
                        >
                            <HiArrowSmRight 
                                className="xs:text-xl sm:text-2xl lg:text-4xl"
                            />
                        </button>
                    </div>

                    <div 
                        className="glide__bullets" 
                        data-glide-el="controls[nav]"
                    >
                        {tecnologias.map((tecnologia, index) => (
                            <button 
                                key={index}
                                className="glide__bullet" 
                                data-glide-dir={`=${index + 1}`} 
                                onClick={() => slider.go(`=${index + 1}`)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}