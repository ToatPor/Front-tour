import { object, ref, string } from "yup";

export const SignUpSchema = object().shape({
  name: string()
    .required("Please provide name for us")
    .matches(
      /^([a-za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0E00-\u0E7F\s]*)$/gi,
      "Name can only contain letters."
    )
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, "Please enter your full name."),
  email: string()
    .email("Please provide valid e-mail")
    .required("Please provide email for us"),
  password: string()
    .required("Please provide password for us")
    .min(8)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password should contains 1 Uppercase Letter,Special character and Number"
    ),
  passwordConfirm: string()
    .oneOf(
      [ref("password"), undefined],
      "Password and Confirm password is not match"
    )
    .required("Password Confirm is required"),
});
