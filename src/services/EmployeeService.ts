import axios, { AxiosResponse } from "axios";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { SalesEmployeeResponse } from "../models/SalesEmployeeResponse";
import { EmployeeRequest } from "../models/EmployeeRequest";

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

export const createDeliveryEmployee = async (employee: EmployeeRequest): Promise<number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/employees/delivery", employee);
        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to create employee. ');
    }
}