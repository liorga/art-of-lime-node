const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:4200', // This should be the domain from which you expect to get requests
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Art Of Lime');
});

app.listen(port, ()=>{
    console.log(`Server started on Port ${port}`);
})