import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../Services/apiUser";
import { toast } from "react-toastify";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateByUser, isPending: isUpdate } = useMutation({
    mutationKey: ["user"],
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data?.data.data.users);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Update successfully");
    },
  });
  return { updateByUser, isUpdate };
};

export default useUpdateUser;
