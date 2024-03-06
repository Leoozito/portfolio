"use client"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

export default function Footer() {
    const [icons, setIcons] = useState<any>([])
    
    useState(() => {
        setIcons([
          <FaInstagram key="instagram" />,
          <FaLinkedinIn key="linkedin" />,
          <FaGithub key="github" />,
        ]);
    });

    return (
        <div className="sm:grid-cols-2 sm:justify-between w-full h-96">
            <div className="p-20">
                <ul>
                    {icons.map((icon: any, index: number) => (
                        <li 
                            className="text-[rgba(167,146,129,0.6)] list-none w-[80px] h-[80px] leading-[50px] border cursor-pointer transition-[ease] duration-[0.3s] p-2 items-center justify-center flex border-solid border-[rgba(167,146,129,0.4)] hover:text-[rgba(167,146,129,1)] hover:border hover:border-solid hover:border-[rgba(167,146,129,1)] sm:text-3xl" key={index}
                        >
                            {icon}
                        </li>                        
                    ))}
                </ul>
            </div>

            <div></div>
        </div>
    )
};