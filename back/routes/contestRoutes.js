const express = require('express');
const router = express.Router();
const {verifyToken} = require('../libraries/jwt')
router.get('/',verifyToken,(req,res)=>{
  res.json({token:req.decodedToken})
});



module.exports = router;
