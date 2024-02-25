export interface IUpdateUser {
  name: string;
  email: string;
  photo?: any;
}

export interface IUpdatePassword {
  passwordCurrent: string;
  password: string;
  passwordConfirm: string;
}
