import axios, { AxiosResponse } from "axios";
import { TopClientResponse } from "../models/TopClientResponse";

export const getClientTop = async (): Promise<TopClientResponse> => {
    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients/top/");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get client with highest value of projects');
    }
}


