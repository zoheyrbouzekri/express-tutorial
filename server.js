const cors = require("cors")
const express = require("express");
const app = express();
const productsRouter = require('./products');

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
};
app.use(loggerMiddleware);

app.use(express.json())

app.use('/products', productsRouter);



app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});

app.get("/message", (req,res)=>{
    res.json({message:"Hello world from Express Server!"})
})

app.post('/message', (req, res) => {
    const { name, message } = req.body;
    console.log(`Received message from ${name}: ${message}`);
    res.json({ message: 'Thank you for your message' });
});

app.listen(3000, () => {
    console.log("The server is running!");
});