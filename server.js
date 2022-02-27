const express = require('express');
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});