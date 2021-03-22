// const imran = require('express')
// const app = imran()


// app.get('/', (req, res) => {
//   res.send('Hello World! welcome me: imran')
// })

// app.listen(3000, () => {
//   console.log(`Example app listening at http://localhost:`)
// })



// const nodeTest=require("express")


// const app=nodeTest();

// app.get('/', (req,res) => {
//     res.send("i just test node js");
// })

// app.listen("3200" , ()=> {
//     console.log("Hello this is LOCALHOST")



const express=require("express");


const app=express();


app.get("/", (req,res) => {
res.send("imran the node boss");
});

app.listen("3000", () => {
    console.log("localhost")
})