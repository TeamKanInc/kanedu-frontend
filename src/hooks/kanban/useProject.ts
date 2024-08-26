import { useNavigate } from "react-router-dom";
import {
  CreateProject,
  DeleteProject,
  GetAllProjects,
  GetProjectById,
  UpdateProject,
} from "../../Services";
import { useMutation } from "@tanstack/react-query";

export const useProject = () => {
  const navigate = useNavigate();

  const { mutate: project, isPending } = useMutation({
    mutationFn: CreateProject,
    onSuccess: () => {
      navigate("/projects");
    },
  });

  return { project, isPending };
};

export const useUpdateProject = () => {
  const navigate = useNavigate();

  const { mutate: project, isPending } = useMutation({
    mutationFn: UpdateProject,
    onSuccess: () => {
      navigate("/projects");
    },
  });
  return { project, isPending };
};

export const useDeleteProject = () => {
  const navigate = useNavigate();
  const { mutate: project, isPending } = useMutation({
    mutationFn: DeleteProject,
    onSuccess: () => {
      navigate("/projects");
    },
  });
  return { project, isPending };
};

export const useGetProjectById = () => {
  const navigate = useNavigate();
  const { mutate: project, isPending } = useMutation({
    mutationFn: GetProjectById,
    onSuccess: () => {
      navigate("/projects");
    },
  });
  return { project, isPending };
};

export const useGetAllProjects = () => {
  const navigate = useNavigate();
  const { mutate: project, isPending } = useMutation({
    mutationFn: GetAllProjects,
    onSuccess: () => {
      navigate("/projects");
    },
  });
  return { project, isPending };
};
