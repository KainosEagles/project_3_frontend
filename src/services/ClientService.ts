import axios, { AxiosResponse } from "axios";
import { TopClientResponse } from "../models/TopClientResponse";
import { ClientsWithDetailsResponse } from "../models/ClientsWithDetailsResponse";
import { ClientRequest } from "http";

export const getClientTop = async (): Promise<TopClientResponse> => {
    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients/top/");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get client with highest value of projects');
    }
}

export const getAllClients = async (): Promise<ClientRequest[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error("Failed to load clients");
    }
}


export const getAllClientsWithDetails = async (): Promise<ClientsWithDetailsResponse> => {
    try{
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/clients/withDetails/");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get clients with details');
    }
}


