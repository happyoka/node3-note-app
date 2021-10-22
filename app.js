
// Example
// const add = require('./utils.js')
// const sum = add(4,-2)
// console.log(sum)

// Challenge : Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that return "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console
const note = require('./notes.js')
const message = note.getNotes();
// console.log(message)

// const validator = require('validator')
// console.log(validator.isEmail('hotmail.sg'))
// console.log(validator.isURL('https/www.yahoo.com'))

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. use it to print the string "Success!" to the console in green
// 4. Test your work

// Bonus : Us docs to mess around with other styles. Make text bold and inversed
const chalk = require('chalk');
const log = console.log;
const redMsg = chalk.bold.bgYellow.green("Failed");
const successMsg = chalk.green.bold.underline.inverse('Success');

// const commandMsg = process.argv[2];
// if (commandMsg === 'add') {
//     log("Add Command is found.");
// } else if (commandMsg === 'remove') {
//     log("Remove Command is found.");
// }

// arguments
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
// Challenge
// 1. Setup a body option for the add command
// 2. Configure a description. make it required
// 3. Log the body value in the handler function
// 4. Test the function
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body);
        // console.log('Adding a new note!', argv);
        // console.log('Title : ' + argv.title);
        // console.log('Body : ' + argv.body);
    }
});

// Challenge : Setup command option and function
// 1. Setup and remove command to take a required "title" option
// 2. Create and export a removeNote function from note.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: notde app.js remove --title="some title"
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title);
    }
});

// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder)
// 1. Setup command to support "read" command (print placeholder)

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        note.listNote();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the note.',
    builder :{
        title : {
            describe : 'title',
            demandOption : true,
            type : 'string'      
        }
    },
    handler(argv) {
        note.readNote(argv.title);
    }
});

yargs.parse();

// console.log(process.argv);
 //console.log(yargs.argv)





