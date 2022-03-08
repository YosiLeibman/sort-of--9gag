const router = require('express').Router()
const { v4 } = require('uuid')
const { posts } = require('../db/db')
const { onlyLoggedUsers } = require('../helpers/onlyLoggedUsers')

router.post('/:postid', onlyLoggedUsers, (req, res) => {
    
    const { msg } = req.body
    const { postid } = req.params
    
    if (!msg) {
        return res.status(400).send({ err: "msg is requiered" })
    }

    const post = posts.find(p => p.id == postid)

    if (!post) {
        return res.status(404).send({ err: "post not found" })
    }

    post.comments.push({
        id:v4(),
        username:req.session.username,
        msg
    })

    res.send({msg:"your comment is realy imporntant to us, it's gonna change the perspective of all our visitors"})
})

router.get('/:postid', (req, res) => {
    
    const post = posts.find(p => p.id == req.params.postid)

    if (!post) {
        return res.status(400).send({ err: "post not found" })
    }

    res.send(post.comments)
})

// delete/edit single comment by the original author

module.exports = router