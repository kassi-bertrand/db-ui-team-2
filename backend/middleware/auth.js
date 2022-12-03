const jwt = require("jsonwebtoken");
const accessTokenSecret = 'mysupercoolsecret';
var token = jwt.sign({foo: 'bar'}, accessTokenSecret);

/**
 * If the request has a valid JWT, the request will be allowed to continue to the next middleware function. Otherwise, the
 * request will be rejected
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The user's id and username.
 */
const authenticateJWT = (req, res, next) => {
 const authHeader = req.headers.authorization;
 if (!authHeader) {
   return res.sendStatus(401);
 }
 jwt.verify(token, accessTokenSecret, (err, user) => {
   if (err) {
     return res.sendStatus(403);
   }
   req.user = user;
   next();
 });
};

/**
 * It takes an array of claims and returns a function that takes a request, response, and next function. It then checks if
 * the request has an authorization header, and if it does, it verifies the token and checks if the user has the claims. If
 * the user has the claims, it sets the user on the request and calls next. If the user doesn't have the claims, it returns
 * a 403
 * @param claims - An array of claims that the user must have to be authorized.
 * @returns A function that takes in a claims array and returns a function that takes in a request, response, and next
 * function.
 */
const authenticateWithClaims = (claims) => (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.sendStatus(401);
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      for (let claim of claims) {
        if (user.claims.includes(claim)) {
          req.user = user;
          return next();
        }
      }
      return res.sendStatus(403);
    });
   }
   /* Exporting the functions authenticateJWT and authenticateWithClaims so that they can be used in other files. */
   module.exports = { authenticateJWT, authenticateWithClaims };