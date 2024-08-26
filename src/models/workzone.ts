export interface Workzone {
  admin: string;
  zoneName: string;
  uniqueZoneCode: string;
  creationDate: string;
  members: string[];
}

export type createWorkzoneDto = Omit<Workzone, "uuid">;
export type updateWorkzoneDto = Partial<Workzone>;
