import axios from "axios";
import { ILogin } from "../Ui/IUi/TFormRow";

export const loginUser = async function (userData: ILogin) {
  try {
    const getUser = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_URL}/api/v1/user/login`,
      data: userData,
      withCredentials: true,
    });

    return getUser;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};

export const isLogin = async function () {
  try {
    const user = await axios.get(
      `${import.meta.env.VITE_URL}/api/v1/user/isLogin`,
      {
        withCredentials: true,
      }
    );
    return user;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};

export const isLogout = async function () {
  try {
    const user = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_URL}/api/v1/user/isLogout`,
      withCredentials: true,
    });
    return user;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};
