import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../Services/apiUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignup = function () {
  const navigate = useNavigate();
  const { mutate: insertUser, isPending: isUser } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      toast.success(data?.data.message);
      navigate(`/verifyUser}`);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { insertUser, isUser };
};
