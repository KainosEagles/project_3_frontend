import express from "express";
import { ProjectStatus } from "../models/Type";
import { createProject, getProjectById, updateProjectStatus } from "../services/ProjectService";
import { getProjectStatusVal } from "../services/ProjectUtil";

const projectStatus = getProjectStatusVal();

export const getProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('projectForm.html', {projectStatus});
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

export const getProjectStatusForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('projectStatusForm.html', {projectStatus, project: await getProjectById(req.params.id)});
}

export const postProjectStatusForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        console.log(11);
        await updateProjectStatus(req.body, req.params.id);
        res.redirect('/');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('projectStatusForm.html', req.body);
    }
}
