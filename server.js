const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send('Hello from Express!')
})

app.get("/about", (req,res) => {
    res.send('This is the About Page')
})

app.get("/contact", (req,res) => {
    res.send('This is the Contact Page')
})

app.get("/products", (req,res) => {
    res.send([
        {id:1, name:"Laptop", price:200000},
        {id:2, name:"Mouse", price: 7000}
    ])
})

app.listen(3000, () => {
    console.log("The server is running!")
})