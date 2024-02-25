import { useQuery } from "@tanstack/react-query";
import { getStripe } from "../../Services/apiStripe";
import { useParams } from "react-router-dom";

//get information about stripe
function useSession() {
  const { id } = useParams<string>();
  const { data: stripeResult, isPending: isStripe } = useQuery({
    queryFn: () => getStripe(id as string),
    queryKey: ["stripe"],
  });

  return { isStripe, stripeResult };
}

export default useSession;
