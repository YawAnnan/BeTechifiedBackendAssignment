require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/*
==================================
CUSTOM MIDDLEWARE (BONUS)
==================================
*/
app.use((req, res, next) => {
    console.log(
        `${new Date().toISOString()} - ${req.method} ${req.url}`
    );
    next();
});

/*
==================================
JSON PARSER
==================================
*/
app.use(express.json());

/*
==================================
STATIC HTML PAGE
==================================
*/
app.use(express.static(path.join(__dirname, "public")));

/*
==================================
GET /
==================================
*/
app.get("/api", (req, res) => {
    res.send("My Week 2 API!");
});

/*
==================================
POST /user
==================================
*/
app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    res.json({
        message: `Hello, ${name}`
    });
});

/*
==================================
GET /user/:id
==================================
*/
app.get("/user/:id", (req, res) => {
    const { id } = req.params;

    res.send(`User ${id} profile`);
});

/*
==================================
404 HANDLER
==================================
*/
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

/*
==================================
SERVER
==================================
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});