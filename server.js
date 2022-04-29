const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3000;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get("/api/notes",(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            const notes = JSON.parse(data);
            res.json(notes)
        }
    })
})

app.post("/api/notes",(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            
            const notes = JSON.parse(data);
            console.log(req.body)
            notes.push(req.body)
            fs.writeFile("./db/db.json",JSON.stringify(notes,null,2),(err,data)=>{
                if(err){
                    throw err
                }
                else {
                    res.json(notes)
                }
            })
        }
    })
})


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


