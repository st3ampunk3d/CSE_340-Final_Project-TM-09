module.exports = {
    ensureAuth: (req, res, next) => {
        if (req.isAuth()) {
            return next()
        } else {
            res.redirect('/')
        }
    },
}