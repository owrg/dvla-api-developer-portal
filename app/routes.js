const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))


router.get('/v0/', function (req, res) {
    res.redirect('/v0/api');    
})


router.post('/v0/form-handler', function (req, res) {

  console.log(req.session.data['VESenvironment'])
  if (req.session.data['VESenvironment'] ==='Test'){
      res.redirect('/v0/api/ves-application-test');    
  } else {
    res.redirect('/v0/api/ves-application-prod-01')
  }

})


module.exports = router
