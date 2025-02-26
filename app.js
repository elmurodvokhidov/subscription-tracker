import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Subscription Tracker API!");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;