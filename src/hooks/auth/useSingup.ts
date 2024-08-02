import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { RegisterApi } from "../../Services";

export const useSingup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: RegisterApi,
    onSuccess: () => {
      navigate("/");
    },
  });

  return { signup, isLoading };
};