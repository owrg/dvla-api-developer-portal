const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/v1/obf/security', function (req, res) {
  let security_answer = req.session.data['security_channel']
  if (security_answer === 'Public') { res.redirect('/v1/obf_03')
  } else                            { res.redirect('/v1/obf_02a')
  }
})

router.post('/v1/obf/fulfillment', function (req, res) {
  let fulfillment_answer = req.session.data['fulfilment_type']
  if (fulfillment_answer === 'Serverless') { res.redirect('/v1/obf_03a')
  } else                                   { res.redirect('/v1/obf_03b')
  }
})

module.exports = router
