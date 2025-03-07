import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
    createSub,
    getUserSub,
} from "../controllers/sub.controller.js";

const subRouter = Router();

subRouter.get("/", (req, res) => {
    res.send({ title: "Get all subs" });
});

subRouter.get("/:id", (req, res) => {
    res.send({ title: "Get sub details" });
});

subRouter.post("/", authorize, createSub);

subRouter.put("/:id", (req, res) => {
    res.send({ title: "Update sub" });
});

subRouter.delete("/:id", (req, res) => {
    res.send({ title: "Delete sub" });
});

subRouter.get("/user/:id", authorize, getUserSub);

subRouter.put("/:id/cancel", (req, res) => {
    res.send({ title: "Cancel sub" });
});

subRouter.get("/upcoming-renewals", (req, res) => {
    res.send({ title: "Get upcoming renewals" });
});

export default subRouter;