const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const app = express();

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ accounts: [] }).write();

app.use(express.json());

// Home
app.get("/", (req, res) => {
    res.send("Express Server is Running Successfully!");
});

// GET /accounts
app.get("/accounts", (req, res) => {
    res.json(db.get("accounts").value());
});

// POST /accounts
app.post("/accounts", (req, res) => {
    const account = req.body;

    db.get("accounts")
        .push(account)
        .write();

    res.status(201).json(account);
});

// Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});