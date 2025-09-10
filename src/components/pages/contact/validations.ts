import { z, ZodType } from "zod"; // Add new import
import { SendEmailContactFormData } from "./models";

const schema: ZodType<SendEmailContactFormData> = z.object({
    email: z.string()
        .nonempty("Campo obrigatório !")
        .email("Formato de email invalido !"),
    name: z.string()
        .nonempty("Campo obrigatório !"),
    message: z.string().nonempty("Campo obrigatório !")
  })
  .required();

export default schema;