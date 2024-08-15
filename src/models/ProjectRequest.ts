import { ProjectStatus } from "./ProjectStatus"

export type ProjectRequest = {
    name: String,
    value: Number,
    status: ProjectStatus,
    clientId: Number,
    techleadId: Number
}