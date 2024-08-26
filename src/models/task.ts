export interface Task {
  uuid: string;
  project?: string;
  title: string;
  description: string;
  assignedTo: string;
  reporter: string;
  urgency: string;
  statusTask: string;
}
export type createTaskDto = Omit<Task, "uuid">;
export type updateTaskDto = Partial<Task>;