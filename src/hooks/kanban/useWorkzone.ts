import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  CreateWorkzone,
  DeleteWorkzone,
  GetAllWorkzones,
  GetWorkzoneById,
  UpdateWorkzone,
} from "../../Services";

export const useWorkzone = () => {
  const navigate = useNavigate();
  const { mutate: workzone, isPending } = useMutation({
    mutationFn: CreateWorkzone,

    onSuccess: () => {
      navigate("/work-zone");
    },
  });

  return { workzone, isPending };
};

export const useUpdateWorkzone = () => {
  const navigate = useNavigate();

  const { mutate: workzone, isPending } = useMutation({
    mutationFn: UpdateWorkzone,

    onSuccess: () => {
      navigate("/work-zone");
    },
  });

  return { workzone, isPending };
};

export const useDeeleteWorkzone = () => {
  const navigate = useNavigate();

  const { mutate: workzone, isPending } = useMutation({
    mutationFn: DeleteWorkzone,

    onSuccess: () => {
      navigate("/work-zone");
    },
  });

  return { workzone, isPending };
};

export const useGetAllWorkzone = () => {
  const navigate = useNavigate();

  const { mutate: workzone, isPending } = useMutation({
    mutationFn: GetAllWorkzones,

    onSuccess: () => {
      navigate("/work-zone");
    },
  });

  return { workzone, isPending };
};

export const useGetWorkzoneById = () => {
  const navigate = useNavigate();

  const { mutate: workzone, isPending } = useMutation({
    mutationFn: GetWorkzoneById,

    onSuccess: () => {
      navigate("/work-zone");
    },
  });

  return { workzone, isPending };
};
