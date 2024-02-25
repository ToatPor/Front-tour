import { isLogin } from "./../../Services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export const useIsAuth = function () {
  const { data: user, isPending: isUser } = useQuery({
    queryKey: ["user"],
    queryFn: isLogin,
    retry: false,
    refetchOnMount: true,
  });

  return {
    user,
    isUser,
  };
};
