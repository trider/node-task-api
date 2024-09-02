const express = require('express');
const router = express.Router();
const users = require('../data/user.json');



router.get('/users', function(req, res){
   res.json(users);
   
});



//export this router to use in our index.js
module.exports = router;