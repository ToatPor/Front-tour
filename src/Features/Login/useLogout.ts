import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isLogout } from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";

const useLogout = function () {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutFunc, isPending } = useMutation({
    mutationFn: isLogout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/overview", { replace: true });
    },
  });

  return { logoutFunc, isPending };
};

export default useLogout;
