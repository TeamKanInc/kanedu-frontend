import { kanEduApi } from "../../../api";
import { createProjectDto, Project, updateProjectDto } from "../../../models";

export const CreateProject = async (project: createProjectDto) => {
  const { data } = await kanEduApi.post("/projects", project);
  return data;
};

export const UpdateProject = async (project: updateProjectDto) => {
  const { data } = await kanEduApi.put(`/projects/${project.uuid}`, project);
  return data as Project;
};

export const DeleteProject = async (uuid: string) => {
  const { data } = await kanEduApi.delete(`/projects/${uuid}`);
  return data as Project;
};

export const GetProjectById = async (uuid: string) => {
  const { data } = await kanEduApi.get(`/projects/info/${uuid}`);

  return data as Project;
};

export const GetAllProjects = async (): Promise<Project[]> => {
  const { data } = await kanEduApi.get("/projects");

  return data as Project[];
};
