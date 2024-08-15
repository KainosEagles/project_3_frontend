import express from "express";
// import { jwtDecode } from "jwt-decode";
// import { UserRole } from "../models/JwtToken";
// import "core-js/stable/atob";

export const allowRoles = () => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (!req.session.token) {
            return res.status(401).send('Not logged in');
        }

        // const decodedToken: JwtToken = jwtDecode(req.session.token);
        // if(!allowedRoles.includes(decodedToken.Role)) {
        //     return res.status(403).send('User role not authorised for this action');
        // }

        next();
    }
}