import { Router } from "express";

const workflowRouter = Router();

workflowRouter.get("/", (req, res) => {
    res.send("Workflow route");
});

export default workflowRouter;