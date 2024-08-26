import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  CreateTask,
  DeleteTask,
  GetAllTasks,
  GetTaskById,
  UpdateTask,
} from "../../Services";

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

export const useUpdateTask = () => {
  const navigate = useNavigate();
  const { mutate: task, isPending } = useMutation({
    mutationFn: UpdateTask,
    onSuccess: () => {
      navigate("/kanban");
    },
  });
  return { task, isPending };
};

export const useDeleteTask = () => {
  const navigate = useNavigate();
  const { mutate: task, isPending } = useMutation({
    mutationFn: DeleteTask,
    onSuccess: () => {
      navigate("/kanban");
    },
  });

  return { task, isPending };
};

export const useGetAllTask = () => {
  const navigate = useNavigate();

  const { mutate: task, isPending } = useMutation({
    mutationFn: GetAllTasks,
    onSuccess: () => {
      navigate("/kanban");
    },
  });

  return { task, isPending };
};

export const useGetTaskById = () => {
  const navigate = useNavigate();

  const { mutate: task, isPending } = useMutation({
    mutationFn: GetTaskById,

    onSuccess: () => {
      navigate("/kanban");
    },
  });
  return { task, isPending };
};
