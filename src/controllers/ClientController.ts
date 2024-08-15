import express from "express";
import { getAllClientsWithDetails, getClientTop, getAllClients } from "../services/ClientService";
export const getClientWithHighestValueOfProjects = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientTop.html', { client: await getClientTop() });
}

export const getClientsWithDetails = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientWithDetils.html', { clients: await getAllClientsWithDetails() });
}
  
export const allClients = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientList.html', {clients: await getAllClients()});
}