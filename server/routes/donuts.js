const router = require('express').Router();
const knex = require('../db/knex');

router.get('/',(req,res)=>{
  knex('donuts')
  .then( donuts => {
    res.send(donuts);
  })
})

router.post('/',(req,res)=>{
  console.log('UNICORN --------------',req);

  console.log('KEYS', Object.keys(req));
  console.log('PARAMS', req.params)
  console.log('BODY', req.body);
  console.log('QUERY', req.query);
  console.log('DUMPED', req.dumped);

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

module.exports = router;