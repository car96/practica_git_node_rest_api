"use strict";
const chalk = require('chalk');
const buildOutput = (args) => {
    let output = [];
    for (let property in args) {
        if (typeof args[property] === 'object')
            output.push(JSON.stringify(args[property]));
        else
            output.push(args[property]);
    }
    return output.join('\r\n');
};
module.exports = {
    info: (...args) => console.log(chalk.cyan(buildOutput(args))),
    warning: (...args) => console.log(chalk.yellow(buildOutput(args))),
    error: (...args) => console.log(chalk.bold.red(buildOutput(args))),
    success: (...args) => console.log(chalk.bold.green(buildOutput(args)))
};
