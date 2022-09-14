const express = require('express')
const app = express()
const port =process.env.PORT || 3000
const path= require('path')
const hbs =require('hbs')


const staticPath =path.join(__dirname,"../public")
const templetePath =path.join(__dirname,"../templetes/views")
const partials_path =path.join(__dirname,"../templetes/partials")

app.set('view engine', 'hbs');
// app.set("views", "../views")
app.set("views",templetePath )
hbs.registerPartials(partials_path)


app.use(express.static(staticPath))

app.get("/", (req,res)=>{
    res.render("index") 
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/wheather',(req,res)=>{
    res.render("wheather")
})
app.get('*',(req,res)=>{
    res.render("for",{
        errmsg:"OOPS! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log("server is listinig on localhost 3000")
})
