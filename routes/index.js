var express = require('express');
var router = express.Router();
var axios = require ('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UPI Validator' });
});
router.post('/',(req,res)=>{
  axios.get('https://paydigi.airtel.in/web/pg-service/v1/validate/vpa/'+req.body.upiId)
  .then(response=>{
    res.send(response.data)
  })
  .catch(err=>{
    console.log(err.response.data.errorMessage)
    res.status(400).send(err.response.data)
  })
})

module.exports = router;
