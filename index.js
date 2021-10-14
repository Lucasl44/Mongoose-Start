const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { findOne, findAll, findMany, add } = require("./utils/utils");


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
        }
    } catch (error) {
        console.log(error)
    }
};

main(argv);