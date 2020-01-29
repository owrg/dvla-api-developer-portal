const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))


router.get('/v0/', function (req, res) {
    res.redirect('/v0/api');    
})


router.post('/v0/form-handler', function (req, res) {

//  console.log()

////////////////////////////////////////////////////
// STEP 1  
  if (req.session.data['VESenvironment'] ==='Production'){

////////////////////////////////////////////////////
// STEP 2  
    if (req.session.data['VESTestKey'] ==='TestKey'){
////////////////////////////////////////////////////
// STEP 3
      if(req.session.data['ves-test-api-key'] === "key")
        res.redirect('/v0/api/ves-application-prod-03-key-valid')
      else if(req.session.data['ves-test-api-key'] === "invalid"){
        res.redirect('/v0/api/ves-application-prod-03-key-invalid')
      } else {
        res.redirect('/v0/api/ves-application-prod-02-key')
       }
    } else if (req.session.data['VESTestKey'] ==='NoTestKey'){
      res.redirect('/v0/api/ves-application-prod-02-nokey');    
    } else {
      res.redirect('/v0/api/ves-application-prod-01');    
    }
  } else {
    res.redirect('/v0/api/ves-application-test')
  }

})


module.exports = router
