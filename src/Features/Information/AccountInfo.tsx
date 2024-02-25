import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../../Ui/Form";
import { FormRow } from "../../Ui/FormRow";
import { Header } from "../../Ui/Heading";
import { Input } from "../../Ui/Input";
import { IUpdateUser } from "./IUserUpdate";
import useUpdateUser from "./useUpdateUser";
import { Image } from "../../Ui/Image";
import { ESize, EVariation } from "../../Ui/IUi/TButton";
import { Button } from "../../Ui/Button";
import { EHeader } from "../../Ui/IUi/THeading";
import styled from "styled-components";
import propTypes from "prop-types";
import { updateUserSchema } from "../YupValidate/UpdateUser";
import { yupResolver } from "@hookform/resolvers/yup";

const AccountInfo = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 8rem 5rem 8rem;

  display: flex;
  flex-direction: column;
  gap: 4.2rem;

  border-bottom: 1px solid var(--color-grey-300);
`;
const FormImage = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  & input {
    visibility: "hidden";
    opacity: 0;
    width: 0;
  }
  & label {
    font-size: 2rem;
    letter-spacing: 1px;
    color: var(--color-primary);
    border-bottom: 1px solid var(--color-primary);
    transition: all 0.3s;
    padding: 0.8rem 0;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--color-secondary);
      border-bottom: 1px solid transparent;
      color: var(--color-grey-0);
    }
  }
`;

const AccountInfos = ({
  name,
  email,
  photo,
}: {
  name: string;
  email: string;
  photo: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>({
    defaultValues: {
      name: name,
      email: email,
    },
    resolver: yupResolver(updateUserSchema),
  });
  const { updateByUser, isUpdate } = useUpdateUser();
  const onSubmit: SubmitHandler<IUpdateUser> = function (data) {
    updateByUser({ ...data, photo: data.photo[0] });
  };
  return (
    <AccountInfo>
      <Header as={EHeader.h4}>your account setting</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Name" errors={errors.name?.message}>
          <Input
            disabled={isUpdate}
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
        </FormRow>
        <FormRow label="Email address" errors={errors.email?.message}>
          <Input
            disabled={isUpdate}
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
        </FormRow>
        <FormImage>
          <Image
            src={`http://localhost:8000/img/User/${photo}`}
            height="10rem"
            radius="100rem"
          />
          <label htmlFor="photo">Choose new photo</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            {...register("photo")}
          />
        </FormImage>
        <div style={{ alignSelf: "end" }}>
          <Button
            disabled={isUpdate}
            size={ESize.large}
            $variation={EVariation.primary}
          >
            save setting
          </Button>
        </div>
      </Form>
    </AccountInfo>
  );
};

export default AccountInfos;

AccountInfos.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
};
