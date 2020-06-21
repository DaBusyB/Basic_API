const fs = require('fs');

function generateRandomId(){
  return Math.floor(Math.random() * 10000);
}

function save(db){
  return new Promise((resolve, reject) => {
    fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Gets all contacts
 * @param None
 */
function getContacts(){
  return new Promise((resolve, reject) => {
    fs.readFile('db.json', 'utf8', (err, db) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(db);
        resolve(json);
      }
    });
  });
}

/**
 * Gets a specific contact by ID
 * @param {number} id - Accepts the ID of the specified contact.
 */
async function getContact(id){
  const contacts = await getContacts();
  return contacts.contacts.find(contact => contact.id == id); //here
}

/**
 * Creates a new contact record 
 * @param {Object} newContact - Object containing info for new contact: the contact text, position and year 
 */
async function createContact(newContact) {
  const contacts = await getContacts(); 

  newContact.id = generateRandomId(); 
  contacts.contacts.push(newContact);
  await save(contacts); 
  return newContact; 
}

/**
 * Updates a single record 
 * @param {Object} newContact - An object containing the changes to contact: contact, position, year (all optional)
 */
async function updateContact(newContact){
  const contacts = await getContacts();
  let contact = contacts.contacts.find(contact => contact.id == newContact.id);
  
  contact.contact = newContact.contact;
  contact.position = newContact.position;
  contact.year = newContact.year;
 
  await save(contacts);
}

/**
 * Deletes a single record
 * @param {Object} contact - Accepts record to be deleted. 
 */
async function deleteContact(contact){
  const contacts = await getContacts();
  contacts.contacts = contacts.contacts.filter(contact => contact.id != contact.id);
  await save(contacts);
}

module.exports = {
  getContacts,
  getContact, 
  createContact, 
  updateContact, 
  deleteContact,
}
