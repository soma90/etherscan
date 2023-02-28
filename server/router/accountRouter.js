const { getAccounts, getBalance } = require('../controller/accountController');
const express = require('express');
const router = express.Router();

router.get('/', getAccounts);
router.get('/balance/:address', getBalance);

module.exports = router;