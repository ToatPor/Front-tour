import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../Services/apiUser";
import { toast } from "react-toastify";

export const useUpdatePassword = function () {
  const { mutate: updatePass, isPending: isPassword } = useMutation({
    mutationKey: ["user"],
    mutationFn: updatePassword,
    onSuccess: () => {
      toast.success("Update successfully");
    },
  });

  return { updatePass, isPassword };
};
