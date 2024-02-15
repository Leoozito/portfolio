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
            <div className="justify-center items-center flex xs:mt-6 md:mt-16">
                <h1 className="uppercase xs:text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-white">Contato</h1>
            </div>
            <div className="justify-center items-center flex mt-2 xs:mb-10 md:mb-20">
                <span className="rounded-lg justify-center flex w-[250px] h-[6px] bg-[#ffffff] ml-6"></span>
            </div>      

            <div className="xs:relative justify-center xs:grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 sm:flex sm:mx-40 sm:p-10 mt-20 sm:gap-x-12 xs:gap-y-12">
                <div className="relative xs:grid-cols-1 sm:grid-cols-2 xs:flex-row sm:flex-col flex justify-center items-center w-2/6">
                    <Typography className="absolute xs:top-0 top-10 sm:-left-16 flex justify-center items-center text-white font-extrabold xs:text-xl sm:text-2xl xs:left-20">
                        Estou empolgado para trabalhar com você !
                    </Typography>
                    <div className="absolute xs:w-60 sm:w-80 xs:top-14 xs:left-[270px] sm:top-14 sm:-left-24 flex justify-center items-center bottom-16">
                        <Image
                            className=""
                            src="/2206-removebg-preview.png"
                            width={600}
                            height={0}
                            alt="cartoon de contato"
                        />
                    </div>
                </div>

                <div className="relative xs:-bottom-40 xs:left-20 sm:-bottom-40 sm:left-20 w-3/4 justify-center items-center flex">
                    <Card className="w-full p-10 items-center">
                        <form action="" onSubmit={enviaEmail}>
                            {/* recrutador enviar mensagem   */}
                            <div className="justify-center items-center xs:mx-0 sm:mx-10 2xl:mx-60 flex">
                                <div className="justify-center grid grid-cols-1">
                                    <div className="md:flex grid mb-8 sm:gap-12 xs:gap-6">
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
                                            placeholder="Sua mensagem" className="xs:h-24 xs:w-64 sm:h-32 sm:w-72 md:h-56 md:w-full mb-6 items-center"
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