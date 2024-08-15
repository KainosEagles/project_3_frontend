import express from "express";
import { getAllDeliveryEmployees, getAllSalesEmployees } from "../services/EmployeeService";

export const deliveryEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeList.html', { employees: await getAllDeliveryEmployees()})
}

export const salesEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeList.html', { employees: await getAllSalesEmployees()})
}