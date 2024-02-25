import { toast } from "react-toastify";
import { loginUser } from "../../Services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
//wait for getQueryData
export const UseLogin = function () {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: loginUserFunc, isPending: isLogin } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      //set user to be someone before query
      queryClient.setQueryData(["user"], data?.data.data.user);
      toast.success(`Welcome back ${data?.data.data.user.name.split(" ")[0]}`);
      navigate("/overview", { replace: true });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { loginUserFunc, isLogin };
};
