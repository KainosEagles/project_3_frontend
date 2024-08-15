import axios, { AxiosResponse } from "axios";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { SalesEmployeeResponse } from "../models/SalesEmployeeResponse";

export const getAllDeliveryEmployees = async (): Promise<EmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/delivery");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get employees');
    }
} 

export const getAllSalesEmployees = async (): Promise<SalesEmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/sales");
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get employees');
    }
} 