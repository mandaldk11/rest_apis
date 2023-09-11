const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const jwt = require('jsonwebtoken')
const router = require('./routes/router');


// Middleware to parse JSON
app.use(express.json());

// routers-
app.use(router)

// jwt tokens --
const creatTokens =async()=>{
  const token = await jwt.sign({_id:"64feac14eee0b1745d6bc0ac"},'helloworldmynameisdharmendramandalfromrakseha',{expiresIn:"2 minutes"})
  console.log(token)

  const verifiedUser = await jwt.verify(token,'helloworldmynameisdharmendramandalfromrakseha')
  console.log(verifiedUser)

}
creatTokens()


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
