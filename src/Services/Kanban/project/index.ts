import { kanEduApi } from "../../../api";
import { createProjectDto } from "../../../models";

export const CreateProject = async (project: createProjectDto) => {
  const { data } = await kanEduApi.post("/projects", project);
  return data;
};
