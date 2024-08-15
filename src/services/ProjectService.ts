import axios, { AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";
import { ProjectResponse } from "../models/ProjectResponse";
import { ProjectStatusRequest } from "../models/ProjectStatusRequest";

export const createProject = async (project: ProjectRequest): Promise<number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/projects", project);

        return response.data;
    } catch (e) {
        console.log(e.response.data);
        throw new Error(e.response.data);
    }
}


export const getProjectById = async (id: String): Promise<ProjectResponse> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/projects/" + id);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get project');
    }
}

export const updateProjectStatus = async (project: ProjectStatusRequest, id: string): Promise<number> => {
    try {
        const response: AxiosResponse = await axios.put("http://localhost:8080/api/projects/"+id+"/status", project);
        return response.data;
    } catch (e) {
        console.log(e.response.data);
        throw new Error(e.response.data);
    }
}