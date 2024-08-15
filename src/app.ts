import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";
import { getClientsWithDetails, getClientWithHighestValueOfProjects, allClients } from "./controllers/ClientController";
import { getProjectForm, postProjectForm } from "./controllers/ProjectController";
import { deliveryEmployees, getDeliveryEmployeeForm, getSalesEmployeeForm, postDeliveryEmployeeForm, postSalesEmployeeForm, salesEmployees } from "./controllers/EmployeeController";

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

app.get('/clientTop', getClientWithHighestValueOfProjects);
app.get('/clientsWithDetails', getClientsWithDetails);

app.get('/projectForm', getProjectForm);
app.post('/projectForm', postProjectForm);
app.get('/deliveryEmployees', deliveryEmployees);
app.get('/salesEmployees', salesEmployees);
app.get('/deliveryEmployeeForm', getDeliveryEmployeeForm);
app.post('/deliveryEmployeeForm', postDeliveryEmployeeForm);
app.get('/salesEmployeeForm', getSalesEmployeeForm);
app.post('/salesEmployeeForm', postSalesEmployeeForm);
app.get('/clients', allClients);