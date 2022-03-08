const router = require('express').Router()
const { v4 } = require('uuid')
const { posts } = require('../db/db')
const { onlyLoggedUsers } = require('../helpers/onlyLoggedUsers')

router.get('/', (req, res) => {
    res.send(posts.sort((a, b) => b.votes - a.votes))
})

router.get('/:id', (req, res) => {
    res.send(posts.find(post => post.id == req.params.id))
})

router.post('/', onlyLoggedUsers, (req, res) => {
    const { title, img } = req.body

    if (!title || !img) {
        return res.status(400).send({ err: "missing title and/or image" })
    }

    posts.push({
        id: v4(),
        username: req.session.username,
        title,
        img,
        votes: 1,
        comments: []
    })

    res.send({ msg: "post added, now we know that " + title })
})

router.put('/vote/:type', onlyLoggedUsers, (req, res) => {

    let msg = ""
    const { id } = req.query
    const { type } = req.params
    const options = ["up", "down"]

    if (!id || !type || !options.includes(type)) {
        return res.status(400).send({ err: "missing post id and/or vote type" })
    }

    const post = posts.find(p => p.id == id)

    if (!post) {
        return res.status(404).send({ err: "post not found" })
    }

    if (type == "up") {
        post.votes++
        msg = `thanks ${req.session.username} for upvoting my meme! I'll never forget this!`
    } else {
        post.votes--
        msg = `of course Karen, (yes, I'm looking at you, ${req.session.username})`
    }

    res.send({ msg })
})


module.exports = router