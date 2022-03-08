const router = require('express').Router()
const { users } = require('../db/db')
const { onlyLoggedUsers } = require('../helpers/onlyLoggedUsers')

router.post('/register', (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).send({ err: "missing username and/or password" })
    }

    if (users.some(user => user.username == username)) {
        return res.status(400).send({ err: "username already taken" })
    }

    users.push({
        username,
        password,
        created: new Date(),
        img: ""
    })

    res.send({ msg: "new user created, welcome " + username })
})

router.post('/login', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).send({ err: "missing username and/or password" })
    }

    const user = users.find(u => u.username == username && u.password == password)

    if (!user) {
        return res.status(400).send({ err: "wrong username and/or password" })
    }

    req.session.username = username

    res.send({msg:"user looged in, welcome "+ username, username})
})

router.delete('/logout', onlyLoggedUsers, (req, res) => {
    req.session.destroy()
    res.send({msg:"bye bye! it was nice to see you again"})
})

module.exports = router