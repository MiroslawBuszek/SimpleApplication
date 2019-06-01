const express = require('express')
const app = express()

app.get('/', function (req, res, next){
    res.json({
        'status': 'Success'
    })
})

app.listen(5000, function (){
    console.log('Listening');
})