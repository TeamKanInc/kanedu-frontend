import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { singupGoogleApi } from "../../Services";

export const useSingupGoogle = () => {
  const navigate = useNavigate();

  const { isPending: isSingupGoogle, mutate: singupGoogle } = useMutation({
    mutationFn: singupGoogleApi,
    onSuccess() {
      navigate("/login", { replace: true });
    },
  });

  return { singupGoogle, isSingupGoogle };
};
  