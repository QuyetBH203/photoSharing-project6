const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    const key = process.env.jwt_signature;
    let decoded = null;

    try {
        decoded = jwt.verify(token, key);
    } catch (err) {
        console.log(err);
    }
    
    return decoded;
}

const checkUserJwt = (req, res, next) => {
    const cookies = req.cookies;
    // console.log(1);

    if (cookies && cookies.token) {
        const token = cookies.token;
        const decoded = verifyToken(token);
        if (decoded) {
            req.decodedJWT = decoded;
            // console.log(decoded);
            next();
        } else {
            return res.status(401).json({ "error": "Token verification failed" });
        }
    } else {
        if (req.path !== '/api/user/jwt') {
            return res.status(401).json({ "error": "No token provided" });
        } else {
            // console.log("xyz", req.path);
            // return res.status(200).json({ message: "No token but no error" })
            next();
        }
    }
}

module.exports = checkUserJwt;