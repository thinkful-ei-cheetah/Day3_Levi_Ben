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



// 6. Cracking the code -------------------------------------------

// 7. Factory Functions with LOTR ---------------------------------

// 8. BONUS: A Database Search ------------------------------------
