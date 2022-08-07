import * as yup from 'yup';

export const userSchemaRegister = yup.object({
    confirmPassword: yup.string()
        .required("Confirme sua senha")
        .oneOf([yup.ref('password'), null], "As senhas não coincidem"),
    password: yup.string().required('Senha Obrigatória'),
    email: yup.string().email('Digite um Email Válido').required('Email Obrigatório'),
    name: yup.string().required('Nome Obrigátorio'),
})

export const userSchemaLogin = yup.object({
    password: yup.string().required('Senha Obrigatória'),
    email: yup.string().email('Digite um Email Válido').required('Email Obrigatório'),
});

export const commentSchema = yup.object({
    text: yup.string().required('Digite um comentário')
});
