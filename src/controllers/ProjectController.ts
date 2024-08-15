import express from "express";
import { ProjectStatus } from "../models/Type";
import { createProject } from "../services/ProjectService";

export const getProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    const projectStatusValues = Object.keys(ProjectStatus).filter(key => isNaN(Number(key)));
    res.render('projectForm.html', {projectStatus: projectStatusValues});
}

export const postProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        await createProject(req.body);
        res.redirect('/');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('projectForm.html', req.body);
    }
}
