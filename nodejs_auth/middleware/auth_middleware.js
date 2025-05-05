const jwt = require("jsonwebtoken");

// middleware section
const authMiddleware = (req, res, next) => {
    // check if token is valid
    const userToken = req.headers["authorization"];
    const token = userToken && userToken.split(" ")[1];

    // validate token using jwt
    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!isTokenValid) {
        return res.status(400).json({
            success : false,
            message : "Invalid token!"
        });
    }
    // decode token
    const decodedToken = jwt.decode(token);
    const userInformation = {
        _id : decodedToken.userId,
        username : decodedToken.username,
        role : decodedToken.role,
        userToken : token
    };
    req.userInfo = userInformation;
    next();
};

module.exports = authMiddleware;