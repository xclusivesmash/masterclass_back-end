const mongoose = require("mongoose");
const { Schema } = mongoose;

// connect to the database
const password = encodeURIComponent('JZ#Pi@E9KVmqr"!');
mongoose.connect(`mongodb+srv://sbumatshiane916:${password}@cluster0.cch6hrt.mongodb.net/`)
.then(() => {
    console.log("Database connected successfully");
}).catch((error) => {
    console.error(error);
});

// create a schema
const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.now}
});

// create user model.
const User = mongoose.model("User", userSchema);
async function runQueryExamples() {
    try {
        // create a new document
        /*
        const newUser = await User.create({
            name: "Ammy Smith",
            email: "asmith@gmail.com",
            age: 30,
            isActive: false,
            tags: ["product tester", "MVP Designer"]
        });
        
        // alternative for creating a new user
        const newUser = new User({
            name: "Patrick Doer",
            email: "patty@gmail.com",
            age: 28,
            isActive: true,
            tags: ["product tester", "MVP Designer"]
        });
        await newUser.save();
        */
        // console.log("Created new user", newUser);
        // const allUsers = await User.find({});
        // console.log(allUsers);

        // const getUsersOfActiveFalse = await User.find({isActive: false});
        // console.log(getUsersOfActiveFalse);

        // const getJohnDoer = await User.findOne({name: "John Doer"}); returns first occurence.
        // console.log(getJohnDoer);

        const limitedUsers = await User.find().limit(3).skip(1);
        console.log(limitedUsers);
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.connection.close();
    }
}

// execute the asynchronous function
runQueryExamples();