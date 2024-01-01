'use client'
import { Card, Input, Button, Textarea } from "@material-tailwind/react"
import { useState } from "react"


export default function Contact() {

    const [nomeRecrutador, setNomeRecrutador] = useState("")
    const enviaEmail = () => {

    }

    return (
        <>
            {/* titulo */}
            <div className="justify-center items-center flex xs:mt-6 md:mt-16">
                <h1 className="uppercase xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-white">Contato</h1>
            </div>
            <div className="justify-center items-center flex mt-2 mb-20">
                <span className="rounded-lg justify-center flex w-[250px] h-[6px] bg-white ml-6"></span>
            </div>      

            {/* recrutador enviar mensagem   */}
            <div className="justify-center items-center xs:mx-0 2xl:mx-60 flex">
                <div className="justify-center grid grid-cols-1">
                    <div className="md:flex xs:grid sm:grid mb-8 gap-12">
                        <Input onChange={() => setNomeRecrutador} placeholder="Seu Nome" value={nomeRecrutador} className="items-center "/>
                        <Input placeholder="Endereço de email" className="items-center"/>
                    </div>
                    <div>
                        <Textarea placeholder="Sua mensagem" className="xs:h-24 xs:w-64 sm:h-32 sm:w-72 md:h-96 md:w-80 mb-6 items-center "/>

                        <Button onClick={enviaEmail} className="justify-center items-center flex xs:w-24 xs:h-8 sm:w-32 md:w-48">Enviar</Button>
                    </div>
                </div>
            </div>
        </>
    )
}