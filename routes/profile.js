const router = require('express').Router()
const { users } = require('../db/db')
const { onlyLoggedUsers } = require('../helpers/onlyLoggedUsers')

router.get('/', onlyLoggedUsers, (req, res) => {
    const user = users.find(u => u.username == req.session.username)
    res.send(user)
})

router.put('/', onlyLoggedUsers, (req, res) => {
    
    const user = users.find(u => u.username == req.session.username)
    const { img } = req.body

    if (!img) {
        return res.status(400).send({err:"img is required"})
    }

    user.img = img

    res.send({msg:"cool pic!"})

})
 
module.exports = router