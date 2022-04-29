const express = require("express");

const router = express.Router();
const fs = require("fs");

router.get("/api/notes",(req,res)=>{
    fs.readFile("./db/db.json","utf-8",(err,data)=>{
        if(err){
            throw err
        } else {
            const notes = JSON.parse(data);
            res.json(notes)
        }
    })
})

router.post("/api/notes",(req,res)=>{
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
                    res.json(books)
                }
            })
        }
    })
})

module.exports = router;