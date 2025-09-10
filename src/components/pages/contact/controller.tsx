import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { SendEmailContactContextType, SendEmailContactFormData } from "./models";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./validations";
import emailjs from '@emailjs/browser'
import { toast } from "sonner";

const  SendEmailContext = createContext({} as SendEmailContactContextType)

export const SendEmailContactProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
    const methods = useForm<SendEmailContactFormData>({
      resolver: zodResolver(schema),
    });

    const onSave = async (data: SendEmailContactFormData): Promise<any> => {
      emailjs.send("service_e23n6h9", "template_pe67ijs", data, 'Fd8CvKZwAuHWdj1FJ')
      
      .then((res) => {
          toast.success("Mensagem enviada com sucesso !");
          console.log("Email enviado", res.status, res.text)
      })
      .catch((err) => {
          console.log("ERRO", err)
      })
    }

    const onSubmit: SubmitHandler<SendEmailContactFormData> = (data) => {
      onSave({
        ...data,
      });
    };

    return(
        <>
          <SendEmailContext.Provider
            value={{
              methods,
              onSave,
              onSubmit
            }}
          >
            {children}
          </SendEmailContext.Provider>
        </>
    )
}

const useSendEmailContact = () => {
  const context = useContext(SendEmailContext)
  if (!context) {
    throw new Error("useSendEmailContact must be used within a SendEmailContactProvider");
  }
  return context;
};

export default useSendEmailContact;