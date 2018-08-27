const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = new Schema ({
    title: {
        type: String
    },
    description: {
        type: String
    },
    UserId: { 
        type:Schema.Types.ObjectId, 
        ref: 'User' 
    },
    image: {
        type: String
    },
    comments: [{
        UserId: { type: Schema.Types.ObjectId, ref: 'User' },
        name: String,
        comment: String,
        date: Date
    }]
},
{
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article

