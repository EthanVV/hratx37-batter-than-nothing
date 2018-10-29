const router = require('express').Router();
const knex = require('../db/knex');

router.get('/',(req,res)=>{
  knex('donut_bases')
  .then( donutBases => {
    res.send(donutBases);
  })
})

module.exports = router;