const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//create factory function and add properties

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
//create a method for sleep
        sleep: function() {
        console.log(`${this.name} needs a nap. Zzz...!`);
        this.isTired = 1;    
        },
//create a method for playtime
        play: function() {
            if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();    
        } else {
        console.log(`YAY ! ${this.name} loves to play !!`);
        this.isTired += 1;
        }
        }        
    };
    return pet;
};
//create 5 new objects
const sora = createPet ("Sora","ferret");
const clover = createPet ("Clover","rabbit");
const baxter = createPet ("Baxter","hamster");
const cleo = createPet ("Cleo","rat");
const francine = createPet ("Francine","turtle");

//verify objects and methods
//console.log(sora,clover,baxter,cleo,francine);

//call methods make sure they work
//clover.sleep();
//baxter.play();

//console.log(clover, baxter);

//PART 2..
//update properties and create array of objects

clover.isTired = 8;
francine.isTired = 9;

const allPets = [
    sora,
    clover,
    baxter,
    cleo,
    francine
];

//console.log(allPets);

//display pets in browser
const showPets = function (petArray) {
//empty list
pets.innerHTML = "";

//for...of loop time
for (let pet of petArray) {
    let status = "Ready to play !!";
    if (pet.isTired >= 7) {
        status = "Sleeping";
    }
//declaring variable li and innerHTML to add pet data
const li = document.createElement("li");
li.innerHTML = ` <span class = "pet-name"> ${pet.name} </span> the ${pet.species} is${status}`;
//append pets with list item
pets.append (li);    
}
};

//add click event to status button
statusButton.addEventListener (
    "click",
    function() {
        showPets(allPets);
    }
);









