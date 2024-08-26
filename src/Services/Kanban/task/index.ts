import { kanEduApi } from "../../../api";
import { createTaskDto, Task, updateTaskDto } from "../../../models";

export const CreateTask = async (task:createTaskDto) => {
  const { data } = await kanEduApi.post("/create-task", task);
  return data as Task;
};

export const UpdateTask = async (task: updateTaskDto) => {
  const { data } = await kanEduApi.put(`/update-task/${task.uuid}`, task);
  return data as Task;
};

export const DeleteTask = async (uuid: string) => {
  const { data } = await kanEduApi.delete(`/task/${uuid}`);
  return data as Task;
};

export const GetTaskById = async (uuid: string) => {
  const { data } = await kanEduApi.get(`/task/${uuid}`);
  return data as Task;
};

export const GetAllTasks = async (): Promise<Task[]> => {
  const { data } = await kanEduApi.get("/list-task");
  return data as Task[];
};