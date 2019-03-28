'use strict';
// 1. Object initializers and methods------------------------------

const loaf = {
    flour: 300,
    water: 210,
    hydration: function () {
        return (this.water / this.flour * 100);
    }
};

console.log(loaf.hydration());


// 2. Iterating over an object's properties -----------------------

const food = {
    foo: "bar",
    bar: "foo",
    fum: "blah",
    quux: "x",
    spam: "blahblah",
};

for (const key in food) {
    console.log(`${key}: ${food[key]}`);
}

// 3. Arrays in objects -------------------------------------------

const object = {
    meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(object.meals[3]);


// 4. Arrays of objects -------------------------------------------

const people = [
    {
        name: "Ben",
        jobTitle: "Developer",
    },

    {
        name: "Josh",
        jobTitle: "Doctor",
    },

    {
        name: "Betsy",
        jobTitle: "Attorney",
    },
];

people.forEach(object => console.log(`${object.name}, ${object.jobTitle}`));


// 5. Properties that aren't there --------------------------------

const people2 = [
    {
        name: "Ben",
        jobTitle: "Owner of Company A",
    },

    {
        name: "Josh",
        jobTitle: "Doctor",
        boss: "Boss A",
    },

    {
        name: "Betsy",
        jobTitle: "Attorney",
        boss: "Boss B",
    },
];

people2.forEach(object => object.boss ? console.log(${ object.jobTitle } ${ object.name } reports to ${ object.boss }) : console.log(${ object.jobTitle } ${ object.name } doesn't report to anybody));

// 6. Cracking the code -------------------------------------------

const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

function decoder(sentence) {
    let eChars = [];
    eChars = sentence.split(' ');

    const dChars = eChars.map(function (str) {
        if (cipher[str[0]] !== undefined) {
            return str.charAt(cipher[str[0]]);
        } else {
            return " ";
        }
    });

    return dChars.join('');

}

let eCode = 'craft block argon meter bells brown croon droop';
console.log(decoder(eCode));

// 7. Factory Functions with LOTR ---------------------------------

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function () {
            console.log(
                `${this.name} is a ${this.race} from ${this.origin}`);
        },
        evaluateFight: function (character) {
            let yourAttack = character.defense > this.attack ? 0 : this.attack - character.defense;
            let yourDamage = this.defense > character.attack ? 0 : character.attack - this.defense;
            return `Your opponent takes ${yourAttack} damage and you receive ${yourDamage} damage.`;
        },
        weaponEquip: function (weapon) {
            Object.assign(this, {describe: function () {console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${weapon}`)}})
            }
        }
    };

const characters = [
    createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6),
    createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
    createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
    createCharacter("Aragorn Son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
    createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
    createCharacter("Arwen Undomiel", "arwyl", "Half-Elf", "Rivendell", 5, 6),
];

const findAragorn = characters.find(object => object.nickname === "aragorn").describe();
const filterHobbits = characters.filter(object => object.race === "Hobbit");
const filterAttack = characters.filter(object => object.attack > 5);
characters[0].weaponEquip('Machine Gun');
characters[0].describe();

// 8. BONUS: A Database Search ------------------------------------