const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const fetchImage = async()=>{
        const response = await fetch("http://localhost:8000/images")
        const data = await response.json();

        const arr = await data.urlsl;
        return arr;
    }

    const arr = fetchImage()
   
module.exports = arr;