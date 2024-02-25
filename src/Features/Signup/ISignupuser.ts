export interface ISignUpUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IVerify {
  id?: string;
  otp: string;
}
