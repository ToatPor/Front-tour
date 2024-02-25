import axios from "axios";
// import { ITours } from "./TypeLogin/TCabin";

export const getAllCabin = async function () {
  try {
    const getAllCabin = await axios.get(
      `${import.meta.env.VITE_URL}/api/v1/tours`,
      { withCredentials: true }
    );

    return getAllCabin;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};
