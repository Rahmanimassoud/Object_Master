// GET DATA FROM AN IMMUTABLE OBJECT

const pokemon = Object.freeze([
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// ==========================TASKS============================= 

//1. find pokemon objects where the id is evenly divisible by 3.
const idIsEvenlyDivisable = pokemon.filter((i)=>{
    if(i.id % 3 === 0){
        // console.log(i.id, i.name)
    }
});

// 2. find the pokemon objects that are "fire" type.
const typeFinder = pokemon.filter((t)=>{
    if(t.types.includes("fire")){
        // console.log(t.name, t.types);
    }
});

//3. an array with just the names of the pokemon whose only type is poison
const findTypeOfPoison = pokemon.filter((type)=> {
    if(type.types.includes("poison")){
        // console.log(type.name, type.types);
    }
});
// USING THE MAP FUNCTION
// const findTypeOfPoison = pokemon.map((type)=>{
//     if(type.types.includes("poison"))
//     console.log(type.name, type.types)
// });


//4. an array of pokemon objects that have more than one type
const findMoreTypes = pokemon.filter((type)=>{
    if(type.types.length > 1){
        // console.log(type.name, type.types, "has more than one type");
    }
});

//5. an array with just the names of pokemon with an id greater than 99
const namesGreatherThan = pokemon.filter((greatherNames)=>{
    if(greatherNames.id > 99){
        // console.log(greatherNames.name + " has an id of " + greatherNames.id + " and is greater than 99");
    }
});

//6. an array with just the names of the pokemon
const justNames = pokemon.filter((names)=>{
    // console.log(names.name);
});

//7. an array containing just the first type of all the pokemon whose second type is "flying"
const containingType = pokemon.filter((firsType)=>{
    if(firsType.types.length > 1){
        // console.log(firsType.types[0]);
    }
});

//8. a count of the number of pokemon that are "normal" type
let count = 0;
pokemon.forEach((typeNumber)=>{
    if(typeNumber.types.includes("normal")){
        count++;
    };
});
// console.log(`Number of Pokémon with type "normal": ${count}`);
