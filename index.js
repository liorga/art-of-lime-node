const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Art Of Lime');
});

app.listen(port, ()=>{
    console.log(`Server started on Port ${port}`);
})