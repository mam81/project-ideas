const people = [
    {name: "Ana", street: "Rua das chaves, 210", city: "Recife", state: "PE", country: "BR", telephone: "9999-9999", birthday: "08/04/86"},
];

const addButton = document.querySelector('.addBtn');
const removeButton = document.querySelector('.removeBtn');
const personName = document.querySelector('.name');

const lista = document.querySelector('.name');
lista.innerHTML = people[0].name;

const listaOthers = document.querySelector('.others');


function addName() {
    persons = []
    persons.push(people[0]);
    listaOthers.style.opacity = 1;

    for (const value of Object.values(persons)) {
        listaOthers.innerHTML += `<p>Name: ${value.name}  Gonzalez da Silva</p>`;
        listaOthers.innerHTML += `<p>Street: ${value.street}</p>`;
        listaOthers.innerHTML += `<p>City: ${value.city}</p>`;
        listaOthers.innerHTML += `<p>State: ${value.state}</p>`;
        listaOthers.innerHTML += `<p>Country: ${value.country}</p>`;
        listaOthers.innerHTML += `<p>Telephone: ${value.telephone}</p>`;
        listaOthers.innerHTML += `<p>Birthday: ${value.birthday}</l>`;
      }

      addButton.disabled = true;
      removeButton.disabled = false;

      personName.style.fontWeight = 500;
      personName.style.color = 'blue';
}

function removeName() {
    listaOthers.innerHTML = '';
    listaOthers.style.opacity = 0;

    addButton.disabled = false;
    removeButton.disabled = true;

    personName.style.fontWeight = 600;
    personName.style.color = 'black';
}



