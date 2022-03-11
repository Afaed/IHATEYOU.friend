const { Schema, model} = require('mongoose')
const moment = require('moment')
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,

        },
        createdAt: {
            type: Date,
            defualt: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reaction: [
            reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reaction.length
})

const thoughts = model('thoughts', thoughtSchema)

module.exports = thoughts;
