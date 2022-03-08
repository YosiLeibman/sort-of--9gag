const { v4 } = require("uuid")

module.exports.users = [
    {
        username:"jo",
        password:"123",
        img:"https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146",
        created: new Date()
    },
    {
        username:"mo",
        password:"123",
        img:"https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg",
        created: new Date()
    },
]

module.exports.posts = [
    {
        id: v4(),
        username:"mo",
        title:"Blah blah blah",
        img:"https://memeuniversity.lol/assets/images/image14.jpg?v=b2783557",
        votes:1,
        comments:[]
    },
    {
        id: v4(),
        username:"jo",
        title:"Thast's what my lzay theacer said too",
        img:"https://i.pinimg.com/originals/d2/d9/ef/d2d9ef0f36325ccf40f0463a87330dec.jpg",
        votes:13,
        comments:[
            {
                id: v4(),
                username:"mo",
                msg:"lol"
            },
            {
                id: v4(),
                username:"mo",
                msg:"XD"
            },
        ]
    },
    {
        id: v4(),
        username:"mo",
        title:"When you didn't listen to the first day",
        img:"https://i.chzbgr.com/full/9594992128/h0C4DF28C/dont-think-thats-valid-do-mean-works-its-localhost-reason-did-see-yet-def-no-probably-have-virus",
        votes:7,
        comments:[
            {
                id: v4(),
                username:"jo",
                msg:"i don't get it, what's wrong?"
            },
        ]
    },
]