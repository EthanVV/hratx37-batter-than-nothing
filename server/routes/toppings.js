const router = require('express').Router();
const knex = require('../db/knex');

router.get('/',(req,res)=>{
  knex('donuts')
  .then( donuts => {
    res.send(donuts);
  })
})

router.post('/',(req,res)=>{
  
})