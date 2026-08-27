const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            msg: "Not authorized"
        });
    }

    try {
        const token = authHeader.split(" ")[1];

        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decode;

        next();

    } catch (error) {
        return res.status(401).json({
            msg: "Invalid token"
        });
    }
};