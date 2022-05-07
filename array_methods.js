const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Characters = characters.filter( character => {
    return character.mass > 100});
    console.log(greater100Characters);
//2. Get characters with height less than 200
const shorterCharacters = characters.filter(
    (character) => character.height < 200
);
console.log(shorterCharacters);
//3. Get all male characters
const maleCharacters = characters.filter(
    (character) => character.gender = 'male'
);
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(
    (character) => character.gender = 'female'
);
console.log(femaleCharacters);

//=========================
//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

