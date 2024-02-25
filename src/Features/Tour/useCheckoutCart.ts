import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../../Services/apiCreateBooking";
import { useNavigate } from "react-router-dom";

const useCheckoutCart = () => {
  const navigate = useNavigate();
  const { mutate: createCart, isPending: isCreateCart } = useMutation({
    retry: false,
    mutationKey: ["booking"],
    mutationFn: (data: { user?: string; tour?: string; price?: number }) =>
      createBooking(data),
    onSuccess: () => {
      navigate("/overview");
    },
    onError: (er) => {
      console.log(er.message);
    },
  });

  return { createCart, isCreateCart };
};

export default useCheckoutCart;
