import styled from "styled-components";
import { Header } from "../../Ui/Heading";
import { EHeader } from "../../Ui/IUi/THeading";
import Form from "../../Ui/Form";
import { FormRow } from "../../Ui/FormRow";
import { Input } from "../../Ui/Input";
import { Button } from "../../Ui/Button";
import { ESize, EVariation } from "../../Ui/IUi/TButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdatePassword } from "./IUserUpdate";
import { useUpdatePassword } from "./useUpdatePassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { updatePasswordSchema } from "../YupValidate/UpdateUser";

const StyledAccountChangePass = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 8rem 5rem 8rem;

  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  margin-top: 8rem;
`;

const AccountChangePass = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUpdatePassword>({
    resolver: yupResolver(updatePasswordSchema),
  });
  const { isPassword, updatePass } = useUpdatePassword();

  const handlePasswordSubmit: SubmitHandler<IUpdatePassword> = function (data) {
    updatePass(data);
  };
  return (
    <StyledAccountChangePass>
      <Header as={EHeader.h4}>password change</Header>
      <Form onSubmit={handleSubmit(handlePasswordSubmit)}>
        <FormRow
          label="Current password"
          errors={errors.passwordCurrent?.message}
        >
          <Input
            type="password"
            id="passwordCurrent"
            min={8}
            {...register("passwordCurrent", {
              required: "This field is required",
            })}
            placeholder="••••••••"
            disabled={isPassword}
          />
        </FormRow>
        <FormRow label="New password" errors={errors.password?.message}>
          <Input
            type="password"
            id="password"
            min={8}
            {...register("password", {
              required: "This field is required",
            })}
            placeholder="••••••••"
            disabled={isPassword}
          />
        </FormRow>
        <FormRow
          label="Confirm password"
          errors={errors.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            min={8}
            {...register("passwordConfirm", {
              required: "This field is required",
            })}
            placeholder="••••••••"
            disabled={isPassword}
          />
        </FormRow>
        <div style={{ alignSelf: "end", marginTop: "3rem" }}>
          <Button
            $variation={EVariation.primary}
            size={ESize.large}
            disabled={isPassword}
          >
            Save password
          </Button>
        </div>
      </Form>
    </StyledAccountChangePass>
  );
};

export default AccountChangePass;
