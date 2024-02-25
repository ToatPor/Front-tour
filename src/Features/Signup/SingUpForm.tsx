import { Header } from "../../Ui/Heading";
import { FormRow } from "../../Ui/FormRow";
import { Input } from "../../Ui/Input";
import { EHeader } from "../../Ui/IUi/THeading";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../Ui/Button";
import { ESize, EVariation } from "../../Ui/IUi/TButton";
import Form from "../../Ui/Form";
import { ISignUp } from "../../Ui/IUi/TFormRow";
import { SignUpSchema } from "../YupValidate/SignupValidate";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { useSignup } from "./useSignup";

const Warning = styled.h6`
  color: var(--color-progress);
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.5px;
`;
const SingUpForm = () => {
  const { isUser, insertUser } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: yupResolver(SignUpSchema),
  });
  const handleSubmitSignUP: SubmitHandler<ISignUp> = function (data) {
    if (!data) return;
    insertUser(data);
  };
  return (
    <>
      <Header as={EHeader.h1}>Sign up Account</Header>

      <Form onSubmit={handleSubmit(handleSubmitSignUP)}>
        <FormRow label="Name" errors={errors.email?.message}>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            required
            {...register("name", {
              required: "This field is required",
            })}
            disabled={isUser}
          />
        </FormRow>
        <FormRow label="Email address" errors={errors.email?.message}>
          <Input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            {...register("email", {
              required: "This field is required",
            })}
            disabled={isUser}
          />
        </FormRow>
        <FormRow label="Password" errors={errors.password?.message}>
          <Input
            disabled={isUser}
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
        <FormRow
          label="Confirm Password"
          errors={errors.passwordConfirm?.message}
        >
          <Input
            disabled={isUser}
            type="password"
            id="passwordConfirm"
            placeholder="•••••••"
            required
            minLength={8}
            {...register("passwordConfirm", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <Warning>
          Password should contain 1 upper letter , Special Character and Number
        </Warning>
        <span style={{ display: "inline-block" }}>
          <Button
            size={ESize.large}
            $variation={EVariation.primary}
            disabled={isUser}
          >
            Login
          </Button>
        </span>
      </Form>
    </>
  );
};

export default SingUpForm;
