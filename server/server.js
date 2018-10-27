//const { donutText, art} = require('../donuts') // very important

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;

const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use((req,res,next)=>{
    const messages = [
        `--New Request:--\n`,
        `${req.method} ${req.url}\n`,
        `params: ${JSON.stringify(req.params)}\n`,
        `body: ${req.body}\n`
    ].join('')
    next()
})

app.use( (_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// set api routes
const { donuts } = require('./routes');
app.use('/api/donuts', donuts)


app.listen(PORT, ()=>{
    console.log('booyah','donut art -> ooo', 'dOnUt', `\t listening on port ${PORT}`);
})
