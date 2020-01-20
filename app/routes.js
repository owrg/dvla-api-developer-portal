const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))



router.post('/form-handler', function (req, res) {
  res.redirect('/v0/api/ves-application-complete-test');    
/*
  console.log(req.session.data['VESenvironment'])
  if (req.session.data['VESenvironment'] ==='Test'){
      res.redirect('/v0/api/ves-application-complete-test');    
  } else {
    res.redirect('/v0/api/ves-application-02')
  }
*/
})


module.exports = router
