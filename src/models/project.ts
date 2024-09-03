export interface Project{
    uuid: string;
    workZone: string;
    projectName: string;
    members: string[];
    leader: string;
    area: string;
    endDate: string;
    description: string;
}

export type createProjectDto = Omit<Project,"uuid">;
export type updateProjectDto = Partial<Project>;