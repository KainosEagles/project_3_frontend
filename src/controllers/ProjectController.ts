import express from "express";
import { ProjectStatus } from "../models/Type";
import { addEmployeeToProject, createProject, getAllProjects } from "../services/ProjectService";
import { getAllDeliveryEmployees } from "../services/EmployeeService";

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