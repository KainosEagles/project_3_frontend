import { ProjectStatus } from "./ProjectStatus"
 
export type ProjectResponse = {
    id: number,
    name: string,
    value: number,
    status: ProjectStatus
}