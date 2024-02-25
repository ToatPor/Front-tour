import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../Services/apiCart";

function useCart() {
  const { data: cart, isPending: isCart } = useQuery({
    queryKey: ["booking"],
    queryFn: getCart,
    refetchOnMount: true,
  });
  return { cart, isCart };
}

export default useCart;
