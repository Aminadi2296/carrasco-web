const { Router } = require('express')
const router = Router()
const controller = require('../public/js/index')

// router.get('/', controller.index)

router.post('/send-email', controller.message)


module.exports = router
