const jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = authenticateToken;
