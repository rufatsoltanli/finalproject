import jwt from "jsonwebtoken"

export const authMiddleware = function (roles) {
    return function (req, res, next) {
        try {
            const token = req.headers.authorization
            if (!token) {
                res.status(403).send("Token doesn't exist")
                return
            }
            const decoded = jwt.verify(token, process.env.JWT_KET)
            if (!roles.includes(decoded.role)) {
                res.status(403).send("You don't have access")
                return
            }
            next()
        } catch (error) {
            res.send(error.message)
        }
    }
}