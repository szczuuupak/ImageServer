const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const port = 3000;

const app = express();

app.use(serveStatic(path.join(__dirname, 'files')))
app.listen(port, () => console.log(`Image server is run at http://localhost:${port}\nTo close use CTRL + C`));