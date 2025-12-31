import express from "express"
import { withAsync } from "../lib/withAsync";

const authRouter = express.Router();

authRouter.post('/',withAsync());