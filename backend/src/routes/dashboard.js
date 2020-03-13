const { Router } = require('express');
const router = Router();
const {getLeads} = require('../controllers/dashboard.controller');

router.route('/')
.get(getLeads);

module.exports = router;