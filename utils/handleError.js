const handleHttpError = (res, message = 'ALGO SUCEDIO', code = 403) => {
    res.status(403)
    res.send({ error: message })
}


module.exports = { handleHttpError }