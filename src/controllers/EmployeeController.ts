import express from "express";
import { getAllDeliveryEmployees } from "../services/EmployeeService";

export const deliveryEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeList.html', { employees: await getAllDeliveryEmployees()})
}