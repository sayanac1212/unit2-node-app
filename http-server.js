

const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const app = express();
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ books: [] }).write();
app.get("/", (req, res) => {
res.send("Express Server is Running Successfully!");
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});



