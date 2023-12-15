'use client'
import { Card, Input, Button, Textarea } from "@material-tailwind/react"
import { useState } from "react"


export default function Contact() {

    const [nomeRecrutador, setNomeRecrutador] = useState("")
    const enviaEmail = () => {

    }

    return (
        <>
            <div className="justify-center items-center flex mt-16">
                <h1 className="uppercase text-3xl font-extrabold text-white dark:text-[#818cf8]">Contato</h1>
            </div>
            <div className="justify-center items-center flex mt-2 mb-20">
                <span className="rounded-lg justify-center flex md:inline-flex md:w-[250px] h-[6px] bg-white dark:bg-[#818cf8] ml-6"></span>
            </div>        
            <div className="justify-center ml-60 mr-60 flex dark:bg-[#1e293b]">
                <div className="justify-center grid grid-cols-1">
                    <div className="flex mb-8 gap-12">
                        <Input onChange={() => setNomeRecrutador} placeholder="Seu Nome" value={nomeRecrutador} className="items-center "/>
                        <Input placeholder="Endereço de email" className="items-center"/>
                    </div>
                    <div>
                        <Textarea placeholder="Sua mensagem" className="h-96 w-80 mb-6 items-center "/>
                        <Button onClick={enviaEmail} className="w-48">Enviar</Button>
                    </div>
                </div>
            </div>
        </>
    )
}