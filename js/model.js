// Модуль, що відповідає за дані користувачів і контакти
let users = [];
let contacts = [];

function addUser(user) {
  users.push(user);
}

function getUserByEmail(email) {
  return users.find(user => user.email === email);
}

function addContact(contact) {
  contacts.push(contact);
}

function removeContact(contactName) {
  contacts = contacts.filter(contact => contact.name !== contactName);
}

function updateContact(oldName, newContact) {
  const index = contacts.findIndex(contact => contact.name === oldName);
  if (index !== -1) {
    contacts[index] = newContact;
  }
}

function getSortedContacts() {
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
}

function getContactsGroupedByLetter() {
  return contacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {});
}

// Експортуємо функції
export { addUser, getUserByEmail, addContact, removeContact, updateContact, getSortedContacts, getContactsGroupedByLetter };
