import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "../../Services";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: LoginApi,
    onSuccess: () => {
      navigate("/inicio");
    },
  });

  return { login, isLoading };
};
