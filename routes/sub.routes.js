import { Router } from "express";

const subRouter = Router();

subRouter.get("/", (req, res) => {
    res.send({ title: "Get all subs" });
});

subRouter.get("/:id", (req, res) => {
    res.send({ title: "Get sub details" });
});

subRouter.post("/", (req, res) => {
    res.send({ title: "Create new sub" });
});

subRouter.put("/:id", (req, res) => {
    res.send({ title: "Update sub" });
});

subRouter.delete("/:id", (req, res) => {
    res.send({ title: "Delete sub" });
});

subRouter.get("/user/:id", (req, res) => {
    res.send({ title: "Get all user subs" });
});

subRouter.put("/:id/cancel", (req, res) => {
    res.send({ title: "Cancel sub" });
});

subRouter.get("/upcoming-renewals", (req, res) => {
    res.send({ title: "Get upcoming renewals" });
});

export default subRouter;