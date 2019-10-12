const express=require('express')
const lodash = require('lodash')
const port=4000
var app=express()

app.get('/',(req,res)=>{
res.send("<h1>hello world</h1>")

})
app.listen(port,()=>{
console.log(`server is running at port ${port}`)
})
