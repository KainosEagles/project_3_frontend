import axios, { AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";

export const createProject = async (project: ProjectRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/projects", project);

        return response.data;
    } catch (e) {
        console.log(e.response.data);
        throw new Error(e.response.data);
    }
}