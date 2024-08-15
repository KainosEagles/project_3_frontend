import { ProjectStatus } from "./ProjectStatus"

export type ProjectRequest = {
    name: string,
    value: number,
    status: ProjectStatus,
    clientId: number,
    techleadId: number
}