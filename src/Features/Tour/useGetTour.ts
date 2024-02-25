import { useQuery } from "@tanstack/react-query";
import { getCabinById } from "../../Services/apiCabinByid";
import { useParams } from "react-router-dom";

export const useGetTourById = function () {
  const { id } = useParams<string>();
  const { data: tour, isPending: isTour } = useQuery({
    queryFn: () => getCabinById(id as string),
    queryKey: ["TourById", id],
    refetchOnMount: true,
    retry: false,
  });

  return { tour, isTour };
};
