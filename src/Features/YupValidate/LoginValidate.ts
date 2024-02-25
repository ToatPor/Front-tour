import { string, object } from "yup";
export const LoginSchema = object().shape({
  email: string()
    .email("Please provide valid e-mail")
    .required("Please provide e-mail for us"),
  password: string().min(8).required("Please provide password"),
});
