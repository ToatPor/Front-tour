import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../Ui/Button";
import Form from "../../Ui/Form";
import { FormRow } from "../../Ui/FormRow";
import { Header } from "../../Ui/Heading";
import { EVariation, ESize } from "../../Ui/IUi/TButton";
import { EHeader } from "../../Ui/IUi/THeading";
import { Input } from "../../Ui/Input";
import { ILogin } from "../../Ui/IUi/TFormRow";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../YupValidate/LoginValidate";
import { UseLogin } from "./useLogin";

export const LogInForm = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>({
    resolver: yupResolver(LoginSchema),
  });
  const { loginUserFunc, isLogin } = UseLogin();

  const handleSubmitForm: SubmitHandler<ILogin> = function (data) {
    loginUserFunc(data);
    reset();
  };

  return (
    <>
      <Header as={EHeader.h1}>Log into your account</Header>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormRow label="Email address" errors={errors.email?.message}>
          <Input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            {...register("email", {
              required: "This field is required",
            })}
            disabled={isLogin}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            disabled={isLogin}
            type="password"
            id="password"
            placeholder="•••••••"
            required
            minLength={8}
            {...register("password", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <span style={{ display: "inline-block" }}>
          <Button
            size={ESize.large}
            $variation={EVariation.primary}
            disabled={isLogin}
          >
            Login
          </Button>
        </span>
      </Form>
    </>
  );
};
