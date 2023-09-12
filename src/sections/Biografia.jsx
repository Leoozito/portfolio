'use client'
import Image from "next/image"
import { Card } from "@material-tailwind/react"

export default function Biografia() {
    return (
        <>
            <div className="w-full flex items-center grid-cols-2 justify-center mt-10">
                <div className="flex flex-col xl:flex-row xl:-mr-12">
                    <Image 
                        className="relative rounded-2xl group object-contain" 
                        width={380} 
                        height={0} 
                        src="/computer.jpeg" 
                        alt="Img de um computador"
                    />
                </div>
                <div className="w-1/2 xl-w:1/2 flex flex-col gap-6 justify-betwwen items-end z-10">
                    <h1 className="text-3xl font-bold text-indigo-900 flex items-center mt-8">Sobre mim</h1>
                    <Card>
                        <p className="text-lg md:text-base p-2 md:p-6 rounded-md">
                            Sou apaixonado por tecnologia e suas evoluções constante. Para mim, ter a sensação 
                            de finalmente descobrir uma solução para um problema {" "}<span className="text-bold text-indigo-700">é algo  sensacional.</span> {" "}
                        </p>
                    </Card>
                    <Card className="mt-4">
                        <p className="text-lg md:text-base p-2 md:p-6 rounded-md">
                            Meu interesse em programação surgiu em 2022, quando me surgiu uma oportunidade de estágio.
                            Participei em diversos desenvolvimentos nesse periodo, e com muitos estudos e diversas praticas, 
                            me tornei  {" "}<span className="text-bold text-indigo-700">especialista</span> 
                            em {" "}<span className="text-bold text-indigo-700">projetar</span> e 
                            {" "}<span className="text-bold text-indigo-700">desenvolver</span>
                            soluções de alta qualidade que {" "}<span className="text-bold text-indigo-700">encantem</span> 
                            os clientes e {" "}<span className="text-bold text-indigo-700">superem suas expectativas.</span>
                        </p>
                    </Card>
                </div>
            </div>
        </>
    )
}