'use client'
import { Card, Input, Button, Textarea, Typography } from "@material-tailwind/react"
import { useState } from "react"
import emailjs from '@emailjs/browser'
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner";

export default function Contact() {

    const [nomeRecrutador, setNomeRecrutador] = useState("")
    const [emailRecrutador, setEmailRecrutador] = useState("")
    const [mensagem, setMensagem] = useState("")

    const createUserFormSchema = z.object({
        emailRecrutador: z.string()
          .nonempty("Campo obrigatório!")
          .email("Formato de email invalido"),
        nomeRecrutador: z.string()
          .nonempty("Campo obrigatório!"),
        mensagem: z.string().nonempty("Campo obrigatório!")
    })

    type createUserFormData = z.infer<typeof createUserFormSchema>

    const { register, handleSubmit, watch, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    });

    function enviaEmail(data:createUserFormData) {

        console.log(data)

        const templateParams = {
            from_name: nomeRecrutador,
            message: mensagem,
            email: emailRecrutador    
        }

        toast.success("Mensagem enviada com sucesso !");
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
                <h1 className="uppercase xs:text-2xl sm:text-2xl 2xl:text-3xl font-extrabold text-white">Contato</h1>
            </div>
            <div className="justify-center items-center flex mt-2 xs:mb-10 md:mb-20">
                <span className="rounded-lg justify-center flex w-[250px] h-[6px] bg-[#ffffff] ml-6"></span>
            </div>      

            <div className="xs:relative justify-center xs:grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:grid md:flex sm:mx-40 sm:p-10 mt-20 sm:gap-x-12 xs:gap-y-4 sm:gap-y-8">
                
                <div className="relative xs:grid-cols-1 sm:grid-cols-1 xs:flex-row sm:flex-row md:flex-col xs:flex sm:flex justify-center items-center">

                    <div className="absolute xs:-top-10 flex justify-center items-center xs:px-2 xs:left-4 xs:-bottom-20 sm:right-20 sm:-bottom-16 md:-top-[400px] md:-left-10 lg:-top-[40px] lg:-left-36 border border-solid border-white border-opacity-25 rounded-lg bg-gray-200/20 bg-opacity-45 shadow-md backdrop-blur-15 sm:w-72 sm:h-20 md:w-72 md:h-36 sm:p-2 md:px-8">
                        <Typography placeholder="" className="flex justify-center z-10 text-white xs:text-md sm:text-lg lg:text-xl font-extrabold items-center">
                            Estou empolgado para trabalhar com você !
                        </Typography>
                    </div>

                    <div className="flex justify-center items-center absolute xs:w-40 sm:w-60 lg:w-60 xs:top-10 xs:left-[95px] sm:-bottom-24 sm:left-24 md:bottom-20 md:-left-40 lg:-bottom-8 lg:-left-32">
                        <Image
                            className=""
                            src="/2206-removebg-preview.png"
                            width={600}
                            height={0}
                            alt="cartoon de contato"
                        />
                    </div>
                </div>

                <div className="relative justify-center items-center flex shadow-2xl shadow-indigo-200 xs:-bottom-40 xs:left-0 sm:-bottom-24 sm:right-40 md:-top-6 md:-right-32 lg:-right-44 xs:w-[350px] sm:w-[550px] lg:w-[500px]">
                    <Card placeholder="" className="w-full xs:p-10 items-center">
                        <form action="" onSubmit={handleSubmit(enviaEmail)}>
                            {/* recrutador enviar mensagem   */}
                            <div className="justify-center items-center xs:mx-0 2xl:mx-60 flex sm:p-8">
                                <div className="justify-center grid grid-cols-1">
                                    <div className="xs:grid sm:flex md:grid lg:flex mb-8 sm:gap-12 xs:gap-6 md:gap-6">
                                        <div className="flex-col">
                                            <Input
                                                label="Seu Nome"
                                                crossOrigin=""
                                                {...register("nomeRecrutador")}
                                                // placeholder="Seu Nome"
                                                className="items-center w-auto"
                                            />
                                            {errors.nomeRecrutador && <span className="text-red-700">{errors.nomeRecrutador.message}</span>}
                                        </div>
                                        <div className="flex-col">
                                            <Input
                                                label="Endereço de email"
                                                {...register("emailRecrutador")}
                                                // placeholder="Endereço de email" 
                                                className="items-center w-auto"
                                                crossOrigin=""
                                            />
                                            {errors.emailRecrutador && <span className="text-red-700">{errors.emailRecrutador.message}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex-col mb-6">
                                            <Textarea                               label="Sua mensagem"
                                                {...register("mensagem")}
                                                // placeholder="Sua mensagem ..." 
                                                className="xs:h-24 xs:w-64 sm:h-32 sm:w-full items-center"
                                            />
                                            {errors.mensagem && <span className="text-red-700">{errors.mensagem.message}</span>}
                                        </div>
                                        <Button
                                            placeholder=""
                                            type="submit"
                                            className="justify-center items-center xs:w-28 xs:h-12 sm:w-32 md:w-48 !bg-gradient-to-r !from-indigo-500 !to-blue-500 hover:!from-indigo-300 hover:!from-100%"
                                        >
                                            Enviar
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <Toaster
                                position="bottom-center"
                                richColors  
                            />

                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}