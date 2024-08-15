import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";
import { allProjects, getAddEmployeeToProject, getProjectForm, getProjectStatusForm, postProjectStatusForm, postAddEmployeeToProject, postProjectForm } from "./controllers/ProjectController";
import { getClientsWithDetails, getClientWithHighestValueOfProjects, allClients } from "./controllers/ClientController";
import { deliveryEmployees, getDeliveryEmployeeForm, getSalesEmployeeForm, postDeliveryEmployeeForm, postSalesEmployeeForm, salesEmployees } from "./controllers/EmployeeController";
import { getLoginForm, postLoginForm } from "./controllers/AuthController";
import { allowRoles } from "./middleware/AuthMiddleware";

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/projects/:id/employees', getAddEmployeeToProject);
app.post('/projects/:id/employees', postAddEmployeeToProject);
app.get('/clientTop', allowRoles(), getClientWithHighestValueOfProjects);
app.get('/clientsWithDetails', allowRoles(), getClientsWithDetails);
app.get('/projectForm', allowRoles(), getProjectForm);
app.post('/projectForm', allowRoles(), postProjectForm);
app.get('/projectStatusForm/:id', allowRoles(), getProjectStatusForm);
app.post('/projectStatusForm/:id', allowRoles(), postProjectStatusForm);
app.get('/deliveryEmployees', allowRoles(), deliveryEmployees);
app.get('/salesEmployees', allowRoles(), salesEmployees);
app.get('/deliveryEmployeeForm', allowRoles(), getDeliveryEmployeeForm);
app.post('/deliveryEmployeeForm', allowRoles(), postDeliveryEmployeeForm);
app.get('/salesEmployeeForm', allowRoles(), getSalesEmployeeForm);
app.post('/salesEmployeeForm', allowRoles(), postSalesEmployeeForm);
app.get('/clients', allowRoles(), allClients);
app.get('/projects', allowRoles(), allProjects);
app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);
