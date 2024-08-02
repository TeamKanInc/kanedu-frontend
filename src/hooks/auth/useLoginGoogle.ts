import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginGoogleApi } from "../../Services";

export const useLoginGoogle = () => {
  const navigate = useNavigate();

  const { isPending: isLoggingGoogle, mutate: loginGoogle } = useMutation({
    mutationFn: loginGoogleApi,
    onSuccess() {
      navigate("/inicio", { replace: true });
    },
  });

  return { loginGoogle, isLoggingGoogle };
};
