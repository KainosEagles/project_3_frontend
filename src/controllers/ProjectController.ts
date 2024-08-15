import express from "express";
import { ProjectStatus } from "../models/Type";
import { addEmployeeToProject, createProject, getAllProjects, updateProjectStatus, getProjectById } from "../services/ProjectService";
import { getProjectStatusVal } from "../services/ProjectUtil";

import { getAllDeliveryEmployees } from "../services/EmployeeService";

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
        await updateProjectStatus(req.body, req.params.id);
        res.redirect('/');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('projectStatusForm.html', req.body);
    }
}

export const allProjects = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('projectList.html', { projects: await getAllProjects()});
}

export const getAddEmployeeToProject = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('addEmployeeToProject.html', { employees: await getAllDeliveryEmployees(), id: req.params.id });
}

export const postAddEmployeeToProject = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        await addEmployeeToProject(req.body.employees, req.params.id);
        res.redirect('/projects');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('/projects', req.body);
    }
}