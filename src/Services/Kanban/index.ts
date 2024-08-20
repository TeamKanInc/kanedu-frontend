import { kanEduApi } from "../../api";
import { createTaskDto, Task } from "../../models";

export const CreateTask = async (task:createTaskDto) => {
  const { data } = await kanEduApi.post("/create-task", task);
  return data;
};
