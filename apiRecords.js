const fs = require('fs');

function generateRandomId(){
  return Math.floor(Math.random() * 10000);
}

function save(data){
  return new Promise((resolve, reject) => {
    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
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
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
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
  return contacts.records.find(record => record.id == id);
}
/**
 * Gets a random contact 
 * @param None
 */
async function getRandomContact(){
  const Contacts = await getContacts();
  const randNum = Math.floor(Math.random() * contacts.records.length);
  return contacts.records[randNum];
}

/**
 * Creates a new contact record 
 * @param {Object} newContact - Object containing info for new contact: the contact text, author and year 
 */
async function createContact(newContact) {
  const contacts = await getContacts(); 
  
  newContact.id = generateRandomId(); 
  contacts.records.push(newContact);
  await save(contacts); 
  return newContact; 
}

/**
 * Updates a single record 
 * @param {Object} newContact - An object containing the changes to contact: contact, author, year (all optional)
 */
async function updateContact(newContact){
  const contacts = await getcontacts();
  let contact = contacts.records.find(item => item.id == newContact.id);
  
  contact.contact = newContact.contact;
  contact.author = newContact.author;
  contact.year = newContact.year;
 
  await save(contacts);
}

/**
 * Deletes a single record
 * @param {Object} contact - Accepts record to be deleted. 
 */
async function deleteContact(record){
  const contacts = await getcontacts();
  contacts.records = contacts.records.filter(item => item.id != record.id);
  await save(contacts);
}

module.exports = {
  getContacts,
  getContact, 
  createContact, 
  updateContact, 
  deleteContact,
}
