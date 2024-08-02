import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../../Services";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUserApi,
  });

  return { isLoading, user };
};
