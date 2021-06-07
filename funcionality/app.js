import { getAllContacts, insertContact } from './service.js';

const contactList = document.getElementById('list-contact');
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const inputTelefono = document.getElementById('input-telefono');
const buttonSaveContact = document.getElementById('button-save-contact');


// events

window.addEventListener('load', async () => {
     await refreshContactList();
})

buttonSaveContact.addEventListener('click', async () => {
     const nombre = inputNombre.value;
     const apellido = inputApellido.value;
     const telefono = inputTelefono.value;
     await insertContact({ nombre, apellido, telefono });
     refreshContactList();
})


// functions

async function refreshContactList() {
     const contacts = await getAllContacts();
     contactList.innerHTML = "";
     contacts.forEach(contact => {
          const divContactCard = document.createElement('div');
          divContactCard.id = 'contact-card';

          const labelName = document.createElement('label');
          labelName.style = "font-weight: bold;";
          labelName.innerText = `${contact.nombre} ${contact.apellido}`;

          const labelPhoneNumber = document.createElement('label');
          labelPhoneNumber.innerText = contact.telefono;

          divContactCard.appendChild(labelName);
          divContactCard.appendChild(labelPhoneNumber);
          contactList.appendChild(divContactCard);
     });
}