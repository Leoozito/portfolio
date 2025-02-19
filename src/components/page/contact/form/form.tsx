import { Card, CardBody, Input, Button, Textarea } from "@material-tailwind/react"
import { Toaster, toast } from "sonner";
import useSendEmailContact from "./controller";

export default function Form() {

    const {
        methods,
        onSubmit    
    } = useSendEmailContact()

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    
    return(
        <>
            <div className="relative justify-center items-center flex shadow-2xl shadow-indigo-200 xs:-bottom-40 xs:left-0 sm:-bottom-24 sm:right-40 md:-top-6 md:-right-32 lg:-right-44 xs:w-[350px] sm:w-[550px] lg:w-[500px]">
                <Card className="w-full xs:p-10 items-center">
                    <CardBody color="blue-gray">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                    </CardBody>
                </Card>
            </div>
         </>
    )
}