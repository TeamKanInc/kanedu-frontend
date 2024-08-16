import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { CreateTask } from "../../Services";

export const useTask = () => {
  const navigate = useNavigate();
  const { mutate: task, isPending } = useMutation({
    mutationFn: CreateTask,
    onSuccess: () => {
      navigate("/kanban");
    },
  });
  return { task, isPending };
};
