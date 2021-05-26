const express = require('express');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();
const { requireSignin, userMiddleware } = require('../common-middelware');

router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);


module.exports = router;

