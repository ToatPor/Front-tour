import { useMutation } from "@tanstack/react-query";
import { userVerify } from "../../Services/apiUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useVerify = function () {
  const navigate = useNavigate();
  //   const queryClient = useQueryClient();
  const { mutate: verifyUser, isPending: isUser } = useMutation({
    mutationFn: userVerify,
    onSuccess: () => {
      toast.success("Verify token successfully");
      navigate(`/overview`);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  return { verifyUser, isUser };
};
