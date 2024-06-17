const express = require('express');
const app = express();
const port = '3000';
const router = require('./app/routes');

// Middleware for the pointCategoryRouter
app.use('/api/map', router);

// Route for testing purposes
app.get('/', (req, res) => {
    res.send("<h2>It's Working!</h2>");
});

app.listen(port, () => {
    console.log(`API is listening on port ${port}`);
});
