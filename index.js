const yargs = require("yargs");
const pgk = require("./package.json");
const { addNote, removeNote, printNotes } = require("./notes.controller");

yargs.version(pgk.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  async handler({ id }) {
    removeNote(id);
    printNotes();
  },
});

yargs.parse();
