import * as model from './model.js';

function displayUserProfile(user) {
  document.getElementById('profile-name').textContent = user.name;
  document.getElementById('profile-email').textContent = user.email;
  document.getElementById('profile-gender').textContent = user.gender;
  document.getElementById('profile-dob').textContent = user.dob;
}

function displayContacts() {
  const contacts = model.getSortedContacts();
  const contactList = document.getElementById('contacts-list');
  contactList.innerHTML = '';

  const groupedContacts = model.getContactsGroupedByLetter();
  for (const letter in groupedContacts) {
    const section = document.createElement('section');
    section.innerHTML = `<h3>${letter}</h3>`;

    groupedContacts[letter].forEach(contact => {
      const contactItem = document.createElement('div');
      contactItem.classList.add('contact-item');
      contactItem.innerHTML = `
        <span>${contact.name}: ${contact.phoneNumber}</span>
        <button onclick="handleEditContact('${contact.name}')">Редагувати</button>
        <button onclick="handleRemoveContact('${contact.name}')">Видалити</button>
      `;
      section.appendChild(contactItem);
    });
    contactList.appendChild(section);
  }
}

export { displayUserProfile, displayContacts };
