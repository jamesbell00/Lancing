import express from "express";
import cors from "cors";
import morgan from "morgan";

<<<<<<< HEAD
import userRoutes from "./routes/freelancers.js";
=======
import userRoutes from "./routes/freelancers.js";
import companyRoutes from "./routes/company.js";
import jobRoutes from "./routes/jobs.js";
<<<<<<< HEAD
>>>>>>> f5cc4d03aceac12fb46896bea5e2ec4da20f3da3
=======
import homeRoutes from './routes/home.js';
>>>>>>> d4af08d030a43947f11e64e1b391726c577cd9e0

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions.js";

const app = express();
const specs = swaggerJSDoc(options);

app.set("port", 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(companyRoutes);
app.use(jobRoutes);
app.use(homeRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
