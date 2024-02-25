import axios from "axios";

export const getStripe = async function (id: string) {
  try {
    const session = await axios.get(
      `${import.meta.env.VITE_URL}/api/v1/booking/checkoutSession/${id}`,
      { withCredentials: true }
    );
    return session;
  } catch (er) {
    if (axios.isAxiosError(er)) {
      throw new Error(er.response?.data.message);
    }
  }
};
