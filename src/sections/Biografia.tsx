'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Biografia() {
    const scrollRef = useRef(null)

    return (
        <>
            <div className="w-full flex items-center xs:flex-col sm:flex-col md:flex-row xs:grid-cols-1 justify-center 2xl:mt-10 md:px-10 lg:px-10 xl:px-16 2xl:px-20 sm:grid-cols-1 md:grid-cols-2">
                <div className="flex flex-row sm:mr-10 md:mr-8 lg:mr-10">
                    <Image 
                        className="shadow-2xl shadow-gray-800 relative rounded-2xl group object-contain xs:w-[180px] sm:w-[280px] lg:w-[350px] xl:w-[400px] xs:justify-center xs:flex" 
                        width={400} 
                        height={0} 
                        src="/computer.jpeg" 
                        alt="Img de um computador"
                    />
                </div>

                {/* parte direita com cards descritivos */}
                <div className="md:w-1/2 xs:w-72 sm:w-[420px] flex flex-col gap-6 justify-between items-start">
                    <div className="flex flex-row items-center lg:mt-10 xs:mt-12 sm:mt-14">
                        <h1 className="xs:text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold text-indigo-900 flex items-center dark:text-[#818cf8] uppercase">
                            Sobre mim
                        </h1>
                        <span className="sm:inline-flex xs:w-[250px] sm:w-[350px] md:w-[260px] lg:w-[480px] h-[6px] bg-indigo-800 dark:bg-[#818cf8] xs:ml-2 sm:ml-3 lg:ml-3 2xl:ml-6"></span>
                    </div>
                    <motion.div 
                        whileHover={{ transform: "translateX(100px)" }}
                        viewport={{ root: scrollRef }}
                        transition={{ duration: 1.0 }}
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Card 
                            placeholder="descrição sobre mim" className="dark:bg-[#1e293b]"
                        >

                                <p className="dark:text-white sm:text-lg p-6 rounded-md">
                                    Sou apaixonado por tecnologia e suas evoluções constante. Para mim, ter a sensação
                                    de finalmente descobrir uma solução para um problema {" "}<span className="font-bold text-indigo-700 dark:text-[#818cf8]">é algo  sensacional</span>.
                                </p>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileHover={{ transform: "translateX(100px)" }}
                        viewport={{ root: scrollRef }}
                        transition={{ duration: 1.4 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Card 
                            placeholder="descrição sobre mim" 
                            className="mt-2 dark:bg-[#1e293b]"
                        >
                            <p className="dark:text-white sm:text-lg p-6 rounded-md">
                                Meu interesse em programação surgiu em 2022, quando me surgiu uma oportunidade de estágio.
                                Participei em diversos desenvolvimentos nesse periodo, e com muitos estudos e diversas praticas,
                                me tornei  {" "}<span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">especialista</span>{" "}
                                em {" "}<span className="font-extrabold text-indigo-700 antialiased dark:text-[#818cf8]">projetar</span>{" "} e
                                {" "}<span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">desenvolver</span>{" "}
                                soluções de alta qualidade que {" "}<span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">encantem</span>{" "}
                                os clientes e {" "}<span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">superem suas expectativas</span>.
                            </p>
                        </Card>
                    </motion.div>
                    <motion.div
                        whileHover={{ transform: "translateX(100px)" }}
                        viewport={{ root: scrollRef }}
                        transition={{ duration: 1.8 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <Card
                            placeholder="descrição sobre mim"  
                            className="mt-2 dark:bg-[#1e293b]"
                        >
                            <p className="dark:text-white sm:text-lg p-6 rounded-md">
                                <span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">Minha stack principal </span>é
                                {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 dark:text-[#818cf8]">React,</span>
                                {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 dark:text-[#818cf8]">Tailwind CSS</span>
                                {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 dark:text-[#818cf8]">Next.js,</span>
                                {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 dark:text-[#818cf8]">Node.js,</span>
                                {" "}<span className="underline underline-offset-4 decoration-2 font-extrabold text-indigo-700 dark:text-[#818cf8]">Python e MySQL.</span>
                                Também estou familiarizado com
                                {" "}<span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">TypeScript</span> e
                                {" "}<span className="font-extrabold text-indigo-700 dark:text-[#818cf8]">Golang</span>.
                                Estou sempre em busca de aprender novas tecnologias.
                                Atualmente estou procurando uma posição como desenvolvedor de software.
                            </p>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </>
    )
}