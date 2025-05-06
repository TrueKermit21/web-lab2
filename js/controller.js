// Функція для переходу між сторінками
function navigateTo(page) {
  const pages = ['index', 'register', 'login', 'profile', 'app'];
  const currentPage = document.querySelector('body').getAttribute('data-page');
  
  if (currentPage !== page) {
    window.location.href = `${page}.html`;
  }
}

// Функція для додавання контакту в телефонний довідник
function addContact() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (name && phone) {
    // Створюємо новий елемент списку
    const contactList = document.getElementById('contact-list');
    const newContact = document.createElement('li');
    newContact.classList.add('list-group-item');
    newContact.textContent = `${name} - ${phone}`;
    
    // Додаємо новий контакт в список
    contactList.appendChild(newContact);

    // Очищаємо поля введення
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  } else {
    alert('Будь ласка, заповніть усі поля!');
  }
}

// Функція для видалення контакту з телефонного довідника
function deleteContact(contactElement) {
  const contactList = document.getElementById('contact-list');
  contactList.removeChild(contactElement);
}

// Функція для сортування контактів в алфавітному порядку
function sortContacts() {
  const contactList = document.getElementById('contact-list');
  const contacts = Array.from(contactList.getElementsByTagName('li'));

  contacts.sort((a, b) => {
    const nameA = a.textContent.split(' - ')[0].toLowerCase();
    const nameB = b.textContent.split(' - ')[0].toLowerCase();
    return nameA.localeCompare(nameB);
  });

  contacts.forEach(contact => contactList.appendChild(contact));
}

// Функція для фільтрації контактів за першою літерою
function filterContactsByLetter(letter) {
  const contactList = document.getElementById('contact-list');
  const contacts = Array.from(contactList.getElementsByTagName('li'));

  contacts.forEach(contact => {
    const name = contact.textContent.split(' - ')[0].toLowerCase();
    if (name.startsWith(letter.toLowerCase())) {
      contact.style.display = '';
    } else {
      contact.style.display = 'none';
    }
  });
}

// Додати обробник подій для фільтрації по літері
document.getElementById('letter-filter').addEventListener('input', function(event) {
  filterContactsByLetter(event.target.value);
});

// Ініціалізація навігації
window.addEventListener('load', function () {
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  document.querySelector('body').setAttribute('data-page', currentPage);
});
