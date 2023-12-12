const express = require("express");

const app = express();

const portNo =8000;

app.listen(8000, () => console.log(`server is up and running on port ${portNo}`));
