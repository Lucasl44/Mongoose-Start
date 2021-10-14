const { Friend } = require("../models/models")

const add = async (name) => {
    const friend = new Friend({name: name});
    await friend.save();
    process.exit();
};

const findOne = async (name) => {
    const friend = await Friend.findOne({name});
    console.log(friend);
    process.exit();
};

const findAll = async () => {
    const friend = await Friend.find({});
    console.log(friend);
    process.exit();
};

const findMany = async (name) => {
    const friend = await Friend.find({name});
    console.log(friend);
    process.exit();
};

module.exports = {findAll, findMany, findOne, add}