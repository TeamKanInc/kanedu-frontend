import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../../Services";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: LoginApi,
    onSuccess: () => {
      navigate("/inicio");
    },
  });

  return { login, isPending };
};
