import styled from "styled-components";
import { Header } from "../../Ui/Heading";
import { EHeader } from "../../Ui/IUi/THeading";
import { useNextInput } from "../../Hooks/useNextInput";
import useTimer from "../../Hooks/useTimer";
import { SubmitHandler, useForm } from "react-hook-form";
import { IOtp } from "../../Ui/IUi/TFormRow";
import { Row } from "../../Ui/Row";
import { EGap, ERow } from "../../Ui/IUi/TRow";
import { useVerify } from "./useVerifyUser";
import { Navigate } from "react-router-dom";

const InputVerifyOtp = styled.input`
  width: 16.7%;
  height: 6rem;
  border: none;
  background-color: var(--color-grey-300);
  color: var(--color-grey-0);
  font-size: 3rem;
  text-align: center;
  outline: none;
  transition: all 0.5s;

  &:valid {
    border-bottom: 5px solid var(--color-primary);
  }
  &:placeholder-shown {
    border-bottom: 5px solid var(--color-todo);
  }
`;
const StyledForm = styled.form`
  display: flex;
  overflow: hidden;
  gap: 2rem;
  border-radius: 3px;

  & + p + div {
    font-size: 2.4rem;
  }
  & + p + div p + span {
    color: var(--color-progress);
  }
`;
const VerifyUserForm = () => {
  const { register, handleSubmit } = useForm<IOtp>();

  const { verifyUser } = useVerify();
  const ref = useNextInput();
  const { min, sec } = useTimer();
  const onHandleSubmitOtp: SubmitHandler<IOtp> = function (data) {
    const getData = `${data.otpFirst}${data.otpSecond}${data.otpThird}${data.otpFourth}${data.otpFifth}${data.otpSix}`;
    if (getData.length !== 6) return;

    verifyUser({ otp: getData });
  };

  //not done yet need to resend otp
  if (min < 0 && sec < 0) return <Navigate to={"/login"} />;

  return (
    <>
      <Header as={EHeader.h4}>Verify User</Header>
      <StyledForm ref={ref} onChange={handleSubmit(onHandleSubmitOtp)}>
        <InputVerifyOtp
          type="text"
          minLength={1}
          maxLength={1}
          placeholder="0"
          tabIndex={1}
          {...register("otpFirst")}
        />
        <InputVerifyOtp
          type="text"
          minLength={1}
          maxLength={1}
          placeholder="0"
          tabIndex={2}
          {...register("otpSecond")}
        />
        <InputVerifyOtp
          type="text"
          minLength={1}
          maxLength={1}
          placeholder="0"
          tabIndex={3}
          {...register("otpThird")}
        />
        <InputVerifyOtp
          type="text"
          minLength={1}
          maxLength={1}
          placeholder="0"
          tabIndex={4}
          {...register("otpFourth")}
        />
        <InputVerifyOtp
          type="text"
          minLength={1}
          maxLength={1}
          placeholder="0"
          tabIndex={5}
          {...register("otpFifth")}
        />
        <InputVerifyOtp
          type="text"
          minLength={1}
          maxLength={1}
          placeholder="0"
          tabIndex={6}
          {...register("otpSix")}
        />
      </StyledForm>

      <p
        style={{
          fontSize: "1.8rem",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Token will expired in 30 minutes, get Token with your email
      </p>
      <Row direction={ERow.horizontal} $gap={EGap.small}>
        <p>Time remaining</p>
        <span>
          {`${min < 10 ? "0" + min : min}: ${sec < 10 ? "0" + sec : sec}`}
        </span>
      </Row>
    </>
  );
};

export default VerifyUserForm;
