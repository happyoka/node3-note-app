const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
} 

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
};

// Challenge : Use chalk to provide useful log for remove
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is remove, print "No note found!" with a red background
const removeNote = (title) => {
    const notes = loadNotes();
    const noteKeep = notes.filter((note) => note.title !== title);

    if (notes.length === noteKeep.length) {
        console.log(chalk.bgRed('No note found'));
    } else {
        saveNotes(noteKeep);
        console.log(chalk.bgGreen('Note removed!'));
    }
};

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.blue.underline.bold("Your notes"));
    notes.forEach((note) => console.log(chalk.green(note.title)));
};

const readNote = (title) => {
    const notes = loadNotes();
    const retrieveNote = notes.find((note) => note.title === title);
    if (retrieveNote) {
        console.log(chalk.blue.underline.bold.italic(retrieveNote.title));
        console.log(retrieveNote.body);
    } else {
        console.log(chalk.red.bold('No note found!!!'));
    }
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json', dataJSON);
}

// module.exports = getNotes
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}