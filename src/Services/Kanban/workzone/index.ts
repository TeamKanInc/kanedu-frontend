import { kanEduApi } from "../../../api";
import {
  createWorkzoneDto,
  updateWorkzoneDto,
  Workzone,
} from "../../../models";

export const CreateWorkzone = async (workzone: createWorkzoneDto) => {
  const { data } = await kanEduApi.post("/work-zones", workzone);
  return data as Workzone;
};

export const UpdateWorkzone = async (workzone: updateWorkzoneDto) => {
  const { data } = await kanEduApi.put(
    `/work-zones/${workzone.uniqueZoneCode}`
  );
  return data as Workzone;
};

export const DeleteWorkzone = async (uuid: string) => {
  const { data } = await kanEduApi.delete(`/work-zones/${uuid}`);

  return data as Workzone;
};

export const GetWorkzoneById = async (uuid: string) => {
  const { data } = await kanEduApi.get(`/work-zones/${uuid}`);

  return data as Workzone;
};

export const GetAllWorkzones = async (): Promise<Workzone[]> => {
  const { data } = await kanEduApi.get("/work-zones");

  return data as Workzone[];
};
