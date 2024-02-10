const PORT = 8000;
const axios = require('axios')
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

//Url of the website to scrap the images from 
const url = "https://projects.100xdevs.com/tracks/eooSv7lnuwBO6wl9YA5w/serverless-8";

app.get("/images",(req,res)=>{
    axios(url)
    .then((response)=>{
        const html = response.data;
        const $ = cheerio.load(html);
        const  imgArr = []
        $("img", html).each(function () {
            const url = $(this).attr("src");
            imgArr.push({url})
        })
        let imgsrc = $("img").attr("src");

        res.json({
            urlsl:imgArr,
            img:imgsrc
        });
    })
    .catch((e)=> console.log(e));
});

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`)
})


