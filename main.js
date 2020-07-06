const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();
const staticPath = path.join(__dirname, './client/build')

app.use(express.static(staticPath));

app.listen(3000, () => {
    console.log(`Hosting: ${staticPath} on port ${port}`);
});