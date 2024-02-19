'use client'
import { Card, Input, Button, Textarea, Typography } from "@material-tailwind/react"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import Image from "next/image"


export default function Contact() {

    const [nomeRecrutador, setNomeRecrutador] = useState("")
    const [emailRecrutador, setEmailRecrutador] = useState("")
    const [mensagem, setMensagem] = useState("")

    function enviaEmail() {

        const templateParams = {
            from_name: nomeRecrutador,
            message: mensagem,
            email: emailRecrutador    
        }

        emailjs.send("service_e23n6h9", "template_pe67ijs", templateParams, 'Fd8CvKZwAuHWdj1FJ')
        .then((res) => {
            console.log("Email enviado", res.status, res.text)
        })
        .catch((err) => {
            console.log("ERRO", err)
        })
    }

    return (
        <>
            {/* titulo */}
            <div className="justify-center items-center flex xs:mt-6 sm:mt-10 md:mt-16">
                <h1 className="uppercase xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-white">Contato</h1>
            </div>
            <div className="justify-center items-center flex mt-2 xs:mb-10 md:mb-20">
                <span className="rounded-lg justify-center flex w-[250px] h-[6px] bg-[#ffffff] ml-6"></span>
            </div>      

            <div className="xs:relative justify-center xs:grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:grid md:flex sm:mx-40 sm:p-10 mt-20 sm:gap-x-12 xs:gap-y-4 sm:gap-y-8">
                
                <div className="relative xs:grid-cols-1 sm:grid-cols-1 xs:flex-row sm:flex-row md:flex-col xs:flex sm:flex justify-center items-center">

                    <Typography className="absolute xs:top-0 flex justify-center items-center text-white font-extrabold xs:text-lg sm:text-xl lg:text-2xl xs:left-6 sm:right-24 sm:-bottom-16 md:-top-[400px] md:-left-10 lg:-top-[350px] lg:-left-0">
                        Estou empolgado para trabalhar com você !
                    </Typography>

                    <div className="flex justify-center items-center absolute xs:w-40 sm:w-60 lg:w-72 xs:top-14 xs:left-[166px] sm:-bottom-24 sm:left-24 md:bottom-20 md:-left-40 lg:-bottom-8 lg:-left-36">
                        <Image
                            className=""
                            src="/2206-removebg-preview.png"
                            width={600}
                            height={0}
                            alt="cartoon de contato"
                        />
                    </div>
                </div>

                <div className="relative justify-center items-center flex shadow-2xl shadow-indigo-200 xs:-bottom-40 xs:left-0 sm:-bottom-24 sm:right-40 md:-top-6 md:-right-32 lg:-right-44 xs:w-[350px] sm:w-[550px] lg:w-[600px]">
                    <Card className="w-full xs:p-10 items-center">
                        <form action="" onSubmit={enviaEmail}>
                            {/* recrutador enviar mensagem   */}
                            <div className="justify-center items-center xs:mx-0 2xl:mx-60 flex sm:p-8">
                                <div className="justify-center grid grid-cols-1">
                                    <div className="xs:grid sm:flex md:grid lg:flex mb-8 sm:gap-12 xs:gap-6 md:gap-6">
                                        <Input
                                            onChange={(e) => setNomeRecrutador(e.target.value)}
                                            placeholder="Seu Nome"
                                            value={nomeRecrutador} className="items-center w-auto"
                                        />
                                        <Input
                                            onChange={(e) => setEmailRecrutador(e.target.value)}
                                            value={emailRecrutador} placeholder="Endereço de email" className="items-center w-auto"
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            onChange={(e) => setMensagem(e.target.value)}
                                            value={mensagem}
                                            placeholder="Sua mensagem" className="xs:h-24 xs:w-64 sm:h-32 sm:w-full mb-6 items-center"
                                        />
                                        <Button
                                            onClick={enviaEmail} className="justify-center items-center flex xs:w-24 xs:h-8 sm:w-32 md:w-48"
                                        >
                                            Enviar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}