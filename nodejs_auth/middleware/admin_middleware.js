// admin middleware

const adminMiddleware = (req, res, next) => {
    const userRole = req.userInfo.role;
    // check if role is admin
    if (userRole !== "admin") {
        return res.status(403).json({
            success : false,
            message : "Admin priviledges required!"
        });
    }
    next();
};

module.exports = adminMiddleware;