import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// NumbersCollection
// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// CharactersCollection
const charactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
