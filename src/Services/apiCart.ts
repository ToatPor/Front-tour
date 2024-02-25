import axios from "axios";

export const getCart = async function () {
  try {
    const cart = await axios.get(
      `${import.meta.env.VITE_URL}/api/v1/user/myCart`,
      { withCredentials: true }
    );

    return cart;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};
