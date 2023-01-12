const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

const operations = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    //TODO: Get all contacts - operations.listContacts();
    case "list":
      const list = await operations.listContacts();
      console.table(list);
      break;

    //TODO: Get contact by id - operations.getContactById(id);
    case "get":
      const contact = await operations.getContactById(id);
      console.log(contact);
      break;

    //TODO: Add new contact - operations.addContact(name, email, phone);
    case "add":
      await operations.addContact(name, email, phone);
      break;

    //TODO: Delete contact by id - operations.removeContact(id);
    case "remove":
      const deletedContact = await operations.removeContact(id);
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
