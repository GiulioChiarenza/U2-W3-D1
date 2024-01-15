class user {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    confrontoEtà(userX){
        if (this.age === userX.age) {
            return `${this.firstName} ha la stessa età di ${userX.firstName}`
        } else if (this.age > userX.age) {
            return `${this.firstName} è più vecchio di ${userX.firstName}`
        } else {
            return `${this.firstName} è più giovane di ${userX.firstName}`
        }
    }
}
const firstUser = new user('giulio', 'chiarenza', 26, 'siracusa')
console.log(firstUser)
const secondUser = new user('cristian', 'laudicino', 27, 'melilli')
console.log(secondUser)
const result = firstUser.confrontoEtà(secondUser)
console.log(result)






class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }

  }

  const petList = [];

  function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    petList.push(newPet);

    
    addPetList();
  }

  function addPetList() {
    const listContainer = document.getElementById('petList');
    listContainer.innerHTML = '';

    petList.forEach(pet => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
      listContainer.appendChild(listItem);
    });
  }

  