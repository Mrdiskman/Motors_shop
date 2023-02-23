/* import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email().required("Campo obrigatório"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/,
      "A senha deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"
    )
    .min(8)
    .required("Campo obrigatório"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem")
    .required("Campo obrigatório"),

  cpf: yup.string().required("Campo obrigatório").max(11),
  dateOfBirth: yup.string().required("Campo obrigatório").max(6),
  phone: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
});
 */
