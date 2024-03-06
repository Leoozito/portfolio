"use client"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
    const [icons, setIcons] = useState<any>([])
    
    useState(() => {
        setIcons([
          {"icon" : <FaInstagram key="instagram" className="text-purple-400"/>, "colorHouver":"hover:border-purple-400", "href":"https://www.instagram.com/_leeozito_/"}, 
          {"icon" : <FaLinkedinIn key="linkedin" className="text-blue-400"/>, "colorHouver":"hover:border-blue-400", "href":"https://www.linkedin.com/in/leonardo-nogueira-899789235/"}, 
          {"icon" : <FaGithub key="github" className="text-gray-200"/>, "colorHouver":"hover:border-[#ffffff]", "href":"https://github.com/Leoozito"}, 
        ]);
    });

    return (
        <div className="flex xs:flex-col items-center sm:flex-row w-full bg-gray-900 h-80 gap-16 sm:justify-between xs:justify-center px-20">
            <div className="">
                <ul className="flex flex-row grid-cols-2 gap-8">
                    {icons.map((icon: any, index: number) => (
                        <a href={icon.href} target="_blank">
                            <li
                                className={`text-[rgba(167,146,129,0.6)] list-none w-[80px] h-[80px] leading-[50px] border cursor-pointer transition-[ease] duration-[0.3s] p-2 items-center justify-center flex border-solid border-[rgba(167,146,129,0.4)] hover:text-[rgba(167,146,129,1)] hover:border hover:border-solid ${icon.colorHouver} xs:text-2xl sm:text-3xl`} key={index}
                            >
                                {icon.icon}
                            </li>
                        </a>                        
                    ))}
                </ul>
            </div>

            <div className="flex items-center">
                <MdCopyright className="text-[rgba(167,146,129,1)] mr-2"/>
                <h1 className="xs:text-lg sm:text-xl text-[rgba(167,146,129,1)]">Copyright 2024 por Leonardo Nogueira</h1>
            </div>
        </div>
    )
};