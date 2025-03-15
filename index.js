import Hello from "./Hello.js";
import session from "express-session";
import Lab5 from "./Lab5/index.js";
import express from 'express';
import WorkingWithObjects from "./Lab5/WorkingWithObjects.js";
import WorkingWithArrays from "./Lab5/WorkingWithArrays.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));

app.use(
    session(sessionOptions)
);
app.use(express.json());
Lab5(app);
Hello(app);
WorkingWithArrays(app);
WorkingWithObjects(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);