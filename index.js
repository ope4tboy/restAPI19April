const express = require ('express')
const app = express();
const port = 2245
const fs = require("fs")
const ProductRoute = require("./route/ProductRoute")
const UserRouter = require("./route/UserRouter")
const ServiceRoute = require ("./route/ServiceRoute")


const homepage = fs.readFileSync("./pages/home.html", "utf-8")
const about = fs.readFileSync("./pages/about.html", "utf-8")
const contact = fs.readFileSync("./pages/contact.html", "utf-8")
const product = fs.readFileSync("./pages/product.html", "utf-8")



app.get('/',(req, res) =>{
    res.send(homepage)
})


app.get('/about',(req, res) =>{
    res.send(about)
})


app.get('/contact',(req, res) =>{
    res.send(contact)
})


app.get('/product',(req, res) =>{
    res.send(product)
})


app.use(express.json())
app.use(UserRouter)
app.use(ProductRoute)
app.use(ServiceRoute)



app.listen(port,() =>{
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})