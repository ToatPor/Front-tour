import React from "react";

export interface IFormRow {
  label: string;
  //getting props.id from children
  children: React.ReactNode & { props: { id: string } };
  errors?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IOtp {
  otpFirst: number;
  otpSecond: number;
  otpThird: number;
  otpFourth: number;
  otpFifth: number;
  otpSix: number;
}
