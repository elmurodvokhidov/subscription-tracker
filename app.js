import express from "express";
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subRouter from "./routes/sub.routes.js";
import conntectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subs", subRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, async () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
    await conntectToDatabase();
});

export default app;