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

const updateOne = async (name, newName) => {
    const friend = await Friend.updateOne({name: name}, {name: newName});
    console.log(friend);
    process.exit();
};

const updateMany = async (name, newName) => {
    const friend = await Friend.updateMany({name: name}, {name: newName});
    console.log(friend);
    process.exit();
};

const deleteOne = async (name) => {
    const friend = await Friend.deleteOne({name: name});
    process.exit();
}

const deleteMany = async (name) => {
    const friend = await Friend.deleteMany({name: name});
    process.exit();
} 
const deleteAll = async () => {
    const friend = await Friend.deleteMany({});
    process.exit();
}

module.exports = {findAll, findMany, findOne, add, updateOne, updateMany, deleteOne, deleteMany, deleteAll}