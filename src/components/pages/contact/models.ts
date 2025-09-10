import { SubmitHandler } from "react-hook-form";

export type SendEmailContactFormData = {
    email: string;
    name: string;
    message: string;
}

export type SendEmailContactContextType = {
    methods: any;
    onSave: (data: SendEmailContactFormData) => Promise<any>;
    onSubmit: SubmitHandler<SendEmailContactFormData>;
}

export type CustomAlert = {
    show: boolean;
    message: string;
    title: string;
    alertType: undefined;
    errorMessage: any;
};