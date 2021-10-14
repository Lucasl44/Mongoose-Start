const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { findOne, findAll, findMany, add, updateOne, updateMany, deleteOne, deleteMany, deleteAll } = require("./utils/utils");


const main = async (argv) => {
    try {
        if (argv.add) {
            await add(argv.name);
        } else if (argv.findOne) {
            await findOne(argv.name);
        } else if (argv.findAll) {
            await findAll();
        } else if (argv.findMany) {
            await findMany(argv.name)
        } else if (argv.updateOne) {
            await updateOne(argv.name, argv.newName);
        } else if (argv.updateMany) {
            await updateMany(argv.name, argv.newName);
        } else if (argv.deleteOne) {
            await deleteOne(argv.name);
        } else if (argv.deleteMany) {
            await deleteMany(argv.name);
        } else if (argv.deleteAll) {
            await deleteAll();
        }
    } catch (error) {
        console.log(error)
    }
};

main(argv);