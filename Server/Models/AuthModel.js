const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    fullName: {
        type: String,
        required: [true, "Name is Required"],
    },
    password: {
        type: String,
    }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (this.password) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Static method to login with email and password
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        if (user.password) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
                return user;
            }
            throw Error("Incorrect Password");
        } else {
            throw Error("This account was created with Google. Please use Google login.");
        }
    }
    throw Error("Incorrect Email");
};

module.exports = mongoose.model("Users", userSchema);
