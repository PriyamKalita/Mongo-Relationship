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
    address: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "Hello",
        address: [{
            location: "222B",
            city: "London" // Make sure it's a string
        }]
    });

    user1.address.push({
        location: "99e",
        city: "Delhi",
    });
    
    let result = await user1.save();
    console.log(result);
};

addUsers();
