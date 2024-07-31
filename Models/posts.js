// const mongoose = require("mongoose");
// const { Schema } = mongoose; // Correctly destructure Schema

// main()
//     .then(() => console.log("Connection Successful"))
//     .catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
// }

// const userSchema = new Schema({
//     username: String,
//     email: Number,
// });

// const postSchema = new Schema({
//     content : String,
//     likes: Number,
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     }
// });

// const User = mongoose.model("User", userSchema);
// const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user1 = new User({
//         username: "Priyam Kalita",
//         email: "priyamkalita2002@gmail.com",
//     });

//     let post1 = new Post({
//         content: "Hello World",
//         linkes: 30,
//     });

//     post1.user = user1;

//     await user1.save();
//     await post1.save();

//     addData();
// }

const mongoose = require("mongoose");
const { Schema } = mongoose; // Correctly destructure Schema

main()
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String, // Changed from Number to String
});

const postSchema = new Schema({
    content: String,
    likes: Number, // Fixed typo here
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    let user1 = new User({
        username: "Priyam Kalita",
        email: "priyamkalita2002@gmail.com",
    });

    let post1 = new Post({
        content: "Hello World",
        likes: 30, // Fixed typo here
    });

    post1.user = user1._id; // Assign user ID to post

    await user1.save();
    await post1.save();
};

// Call addData once to add the data
addData();
