const express = require('express');
const app = express();
const fs = require(`fs`)
const hbs = require(`hbs`)
hbs.registerPartials(__dirname + `/views/partials`,
(err)=> {err})

app.set(`view engine`,`hbs`)
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + `/public`))
app.use(express.json())

app.get(`/`, (req, res) => {
    res.sendFile(`index.html`)
})

app.post(`/junk`, (req, res) =>{
    res.send(req.body.name)
})

app.get(`/:name`, (req, res) =>{
    res.send(req.params.name)
})

// app.get(`/:file/:id`, (req, res) =>{
//     fs.readFile(
//         `${data}/${req.params.file}.json`,
//         `utf-8`,
//         (err, data)=>{
//             if(err){
//                 throw err;
//             }
//             const id = req.params.id;
//             res.send(JSON.parse(data)[id])
//         }
//     )
// })

app.get(`/:last/:first`, (req,res)=>{
    res.render(`view.hbs`, {first:req.params.first, last:req.params.last})
})

var port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Server running on at localhost:${port}`)
})
