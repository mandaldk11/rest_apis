const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const router = require('./routes/router');


// Middleware to parse JSON
app.use(express.json());

// routers-
app.use(router)


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
