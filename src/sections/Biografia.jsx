'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"

export default function Biografia() {
    return (
        <>
            <div className="w-full flex items-center grid-cols-2 justify-center mt-10">
                <div className="flex flex-col xl:flex-row xl:-mr-10">
                    <Image 
                        className="shadow-2xl shadow-gray-800 relative rounded-2xl group object-contain" 
                        width={400} 
                        height={0} 
                        src="/computer.jpeg" 
                        alt="Img de um computador"
                    />
                </div>
                <div className="w-1/2 xl-w:1/2 flex flex-col gap-6 justify-betwwen items-start z-10">
                    <h1 className="text-3xl font-bold text-indigo-900 flex items-center mt-10">Sobre mim</h1>
                    <Card className="dark:bg-[#1e293b]">
                        <p className="dark:text-white text-lg p-2 md:p-6 rounded-md">
                            Sou apaixonado por tecnologia e suas evoluções constante. Para mim, ter a sensação 
                            de finalmente descobrir uma solução para um problema {" "}<span className="font-bold text-indigo-700">é algo  sensacional</span>
                        </p>
                    </Card>
                    <Card className="mt-2 dark:bg-[#1e293b]">
                        <p className="dark:text-white text-lg p-2 md:p-6 rounded-md">
                            Meu interesse em programação surgiu em 2022, quando me surgiu uma oportunidade de estágio.
                            Participei em diversos desenvolvimentos nesse periodo, e com muitos estudos e diversas praticas, 
                            me tornei  {" "}<span className="font-bold text-indigo-700 dark:text-[#818cf8]">especialista</span>{" "} 
                            em {" "}<span className="font-bold text-indigo-700 dark:text-[#818cf8]">projetar</span>{" "} e 
                            {" "}<span className="font-bold text-indigo-700">desenvolver</span>{" "}
                            soluções de alta qualidade que {" "}<span className="font-bold text-indigo-700">encantem</span>{" "} 
                            os clientes e {" "}<span className="font-bold text-indigo-700">superem suas expectativas</span>.
                        </p>
                    </Card>
                    <Card className="mt-2 dark:bg-[#1e293b]">
                        <p className="dark:text-white text-lg p-2 md:p-6 rounded-md">
                            <span className="font-bold text-indigo-700">Minha stack principal </span>é 
                            {" "}<span className="font-bold text-indigo-700">React,</span> 
                            {" "}<span className="font-bold text-indigo-700">Tailwind CSS</span>
                            {" "}<span className="font-bold text-indigo-700">Next.js,</span>
                            {" "}<span className="font-bold text-indigo-700">Node.js,</span>
                            {" "}<span className="font-bold text-indigo-700">Python e MySQL.</span>
                            Também estou familiarizado com 
                            {" "}<span className="font-bold text-indigo-700">TypeScript</span> e 
                            {" "}<span className="font-bold text-indigo-700">Golang</span>. 
                            Estou sempre em busca de aprender novas tecnologias. 
                            Atualmente estou procurando uma posição como desenvolvedor de software. 
                        </p>
                    </Card>
                    <Card className="mt-2 dark:bg-[#1e293b]">
                        <p className="dark:text-white text-lg p-2 md:p-6 rounded-md">
                            <span className="font-bold text-indigo-700">Mais sobre minha pessoal</span>, 
                            faço trabalho voluntario todos os meus finais de semana. 
                            E como hobbies favorito separo meus domingos no periodo da tarde, 
                            para me exercitar e jogar vôlei, e meu outro hobbie também é cantar. 
                        </p>
                    </Card>
                </div>
            </div>
        </>
    )
}