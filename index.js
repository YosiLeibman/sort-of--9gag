// Imports
const express = require('express')
const cors = require('cors')
const session = require('express-session')

// Initializations
const app = express()
const corsOptios = {
    origin: "http://localhost:3000",
    credentials: true
}
const seesionOptions = {
    secret: "theOneAndHolyWord(Blah)",
    name: "session",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}

// Middlewares
app.use(cors(corsOptios))
app.use(express.json())
app.use(session(seesionOptions))
app.use(express.static("build"))
app.use('/users', require('./routes/users'))
app.use('/feed', require('./routes/feed'))
app.use('/comments', require('./routes/comments'))
app.use('/profile', require('./routes/profile'))

app.get('/',(req,res)=>res.sendFile(__dirname+'/build/index.html'))

// Run
app.listen(80, () => console.log("rockin'1000"))




    // app.get('/', (req,res)=>{
    //     if (req.session.visits) {
    //         req.session.visits++
    //     } else {
    //         req.session.visits=1
    //     }
    //     res.send({visits: req.session.visits})
    // })

    // fetch('http://localhost:1000/feed',{
    //     method:"get",
    //     credentials:"include"
    // })

    // (async () => {
    //     const res = await fetch('http://localhost:1000/feed', {
    //         method: "post",
    //         credentials: "include",
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({
    //             title: "blah",
    //             img: "dfsfdsfdsfds.jpg"
    //         })
    //     })
    //     const data = await res.json()
    //     console.log(data)
    // })()

