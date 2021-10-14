const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my-friends");

const Friend = mongoose.model("Friend",
    {
        name: String
    }
);

module.exports = {Friend}