import { ProjectStatus } from "../models/ProjectStatus";

export const getProjectStatusVal = (): string[] => {
    return Object.keys(ProjectStatus).filter(key => isNaN(Number(key)));
}
