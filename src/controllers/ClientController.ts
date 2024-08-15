import express from "express";
import { getClientTop } from "../services/ClientService";

export const getClientWithHighestValueOfProjects = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('clientTop.html', { client: await getClientTop() });
}