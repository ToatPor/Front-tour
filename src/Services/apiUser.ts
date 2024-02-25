import axios from "axios";
import {
  IUpdatePassword,
  IUpdateUser,
} from "../Features/Information/IUserUpdate";
import { ISignUpUser, IVerify } from "../Features/Signup/ISignupuser";

export const updateUser = async function (data: IUpdateUser) {
  try {
    const updateUser = await axios({
      headers: { "Content-Type": "multipart/form-data" },
      method: "PATCH",
      url: `${import.meta.env.VITE_URL}/api/v1/user/updateMe`,
      data: data,
      withCredentials: true,
    });
    return updateUser;
  } catch (er) {
    if (axios.isAxiosError(er)) {
      throw new Error(er.response?.data.message);
    }
  }
};

export const updatePassword = async function (data: IUpdatePassword) {
  try {
    const updateUser = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_URL}/api/v1/user/updatePassword`,
      data: data,
      withCredentials: true,
    });
    return updateUser;
  } catch (er) {
    if (axios.isAxiosError(er)) {
      throw new Error(er.response?.data.message);
    }
  }
};

export const createUser = async function (data: ISignUpUser) {
  try {
    const user = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_URL}/api/v1/user/signup`,
      data: data,
      withCredentials: true,
    });
    return user;
  } catch (er) {
    if (axios.isAxiosError(er)) {
      throw new Error(er.response?.data.message);
    }
  }
};

export const userVerify = async function (data: IVerify) {
  try {
    const user = await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_URL}/api/v1/user/verifyOtp`,
      data: { otp: data.otp },
      withCredentials: true,
    });
    return user;
  } catch (er) {
    if (axios.isAxiosError(er)) {
      throw new Error(er.response?.data.message);
    }
  }
};
