import { useQuery } from "@tanstack/react-query";
import { getUserByTokenApi } from "../../Services";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserByTokenApi(),
  });

  return { isLoading, user };
};
