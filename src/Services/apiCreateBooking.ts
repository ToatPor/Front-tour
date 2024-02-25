import axios from "axios";

export const createBooking = async function ({
  user,
  tour,
  price,
}: {
  user?: string;
  tour?: string;
  price?: number;
}) {
  try {
    if (!user && !tour && !price) return;
    const cabin = await axios({
      method: "POST",
      data: { user: user, tour: tour, price: price },
      url: `${import.meta.env.VITE_URL}/api/v1/booking/checkout`,
      withCredentials: true,
    });
    return cabin;
  } catch (er) {
    if (axios.isAxiosError(er)) throw new Error(er.response?.data.message);
  }
};
