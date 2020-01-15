const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))



router.post('/form-handler', function (req, res) {
  console.log(req.session.data['VESenvironment'])
  if (req.session.data['VESenvironment'] ==='Test'){
/*    if (req.session.data['notifications-name'] ==='email'){
      res.redirect('/v0/api/register-for-ves-email')
    } else {
*/
      res.redirect('/v0/api/test-application-complete')
    }
  } else {
    res.redirect('/v0/api/register-for-ves-api-tacs')
  }
})


module.exports = router
