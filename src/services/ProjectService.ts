import axios, { AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";
import { ProjectResponse } from "../models/ProjectResponse";
import { EmployeeRequest } from "../models/EmployeeRequest";
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

export const getAllProjects = async (): Promise<ProjectResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/projects");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get projects');
    }
}

export const getProjectById = async (id: string): Promise<ProjectResponse> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/projects/" + id);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get project');
    }
}

export const addEmployeeToProject = async (employees: EmployeeRequest, id: string): Promise<ProjectResponse> => {
    const emp = {
        "id": employees,
        "name": "string",
        "salary": 0,
        "bankAccount": "string",
        "insuranceNumber": "string"
      }
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/projects/" + id + "/employees", emp);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error("addEmployeeToProject failure.");
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