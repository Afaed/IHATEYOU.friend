const { Schema, model} = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    //If email does not match the match word, then it will reject the email
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please input a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
        }
    ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
    },
    { 
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      },
    );
    const User = model('User', UserSchema);
    UserSchema.virtual('friends').get(function(){
        return this.friends.length
    })
    module.exports = User;