import express from "express";
import { createDeliveryEmployee, getAllDeliveryEmployees, getAllSalesEmployees } from "../services/EmployeeService";

export const deliveryEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeList.html', { employees: await getAllDeliveryEmployees()})
}

export const salesEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeList.html', { employees: await getAllSalesEmployees()})
}

export const getDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeForm.html');
}

export const postDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        await createDeliveryEmployee(req.body);
        res.redirect('/deliveryEmployees');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('deliveryEmployeeForm.html');
        
    }
}