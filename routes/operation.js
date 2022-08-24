const express = require('express')
const router =express.Router();
const cpntrollerrouter = require('../controller/curd')

router.get('/get',cpntrollerrouter.getalldata)
router.post('/post',cpntrollerrouter.postdata)
router.put('/put/:id',cpntrollerrouter.updatedata)
router.delete('/delete/:id',cpntrollerrouter.deletedata)

module.exports = router