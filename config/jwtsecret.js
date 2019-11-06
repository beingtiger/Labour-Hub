


module.exports = {
    secret : '8be5ba28bfb1cb0975d1a6e616246a52ff38cef6',
    jwtVerify :  function ensureToken(req, res, next) {
              const bearerHeader = req.headers["authorization"];
              if (typeof bearerHeader !== 'undefined') {
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken;
                next();
              } else {
                res.sendStatus(403);
              }
         }
        
}


// var crypto = require('crypto');
// var current_date = (new Date()).valueOf().toString();
// var random = Math.random().toString();
// console.log(crypto.createHash('sha1').update(current_date + random).digest('hex'));