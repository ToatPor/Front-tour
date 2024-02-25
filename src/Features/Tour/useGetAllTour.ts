import { useQuery } from "@tanstack/react-query";
import { getAllCabin } from "../../Services/apiCabin";

export const useGetAllTour = function () {
  const {
    data: tours,
    isPending: isTour,
    error,
  } = useQuery({
    queryFn: getAllCabin,
    queryKey: ["Tours"],
    //make sure that this query not gonna change data infrequently
    //data will keep fresh 10 sec, if there any thing don't change
    staleTime: 10000,
    refetchOnMount: true,
  });

  return { tours, isTour, error };
};
