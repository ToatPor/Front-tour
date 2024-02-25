import axios from "axios";

export const getCabinById = async function (id: string) {
  try {
    const cabin = await axios.get(
      `${import.meta.env.VITE_URL}/api/v1/tours/${id}`
    );
    return cabin;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};
