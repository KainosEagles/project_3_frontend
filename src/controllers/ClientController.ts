import express from "express";
import { getAllClients, getClientTop } from "../services/ClientService";

export const getClientWithHighestValueOfProjects = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientTop.html', { client: await getClientTop() });
}

export const allClients = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientList.html', {clients: await getAllClients()});
}