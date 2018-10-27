const router = require('express').Router();
const knex = require('../db/knex');

router.get('/',(req,res)=>{
  knex('donuts')
  .then( donuts => {
    res.send(donuts);
  })
})

router.post('/',(req,res)=>{
  console.log('POST BODY', req.body);
  knex('donuts').insert([req.body])
  .then(res.send('donutPost response!!!'))
})

router.get('/bases',(req,res)=>{
  console.log('bases server route hit');
  knex('donut_bases')
  .then( bases => {
    res.send(bases);
  })
})

router.get('/types',(req,res)=>{
  console.log('types server route hit');
  knex('donut_types')
  .then( bases => {
    res.send(bases);
  })
})

module.exports = router;