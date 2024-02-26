class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }

    sameOwnerAs(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }

  function addPet() {
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);
    displayPet(newPet);
  }

  function displayPet(pet) {
    const petList = document.getElementById("petList");
    const listItem = document.createElement("li");
    listItem.textContent = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;

    const pets = Array.from(petList.children);
    const sameOwnerPets = pets.filter(otherPet => pet.sameOwnerAs(JSON.parse(otherPet.dataset.pet)));

    if (sameOwnerPets.length > 0) {
      listItem.style.color = "red";
    }

    listItem.dataset.pet = JSON.stringify(pet);
    petList.appendChild(listItem);
  }

