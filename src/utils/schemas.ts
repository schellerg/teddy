import * as yup from "yup"

yup.setLocale({
  mixed: {
    required: "Campo obrigatório",
  },
})

export const loginSchema = yup.object({
  username: yup.string().max(50).required(),
})

export const clientFormSchema = yup.object({
  name: yup.string().required(),
  salary: yup.number().transform((v, o) => (o === '' ? null : v)).min(0).typeError("Valor deve ser um número").nullable().required(),
  companyValuation: yup.number().transform((v, o) => (o === '' ? null : v)).min(0).typeError("Valor deve ser um número").nullable().required(),
})