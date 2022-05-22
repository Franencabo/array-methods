const letters = ['a', 'b', 'c'];


// Puedes hacerlo construyendo un array vacio y pusheandole los elementos 
// de otro array
// Recuerda que push es un método mutable y que hace que cambie el array al
// que estás pusheando elementos

const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}


console.log('original', letters);
console.log('new', newArray);

// Puedes utilzar map, lo que hace que no haya ninguna transformacion 
// del array original

const newArrary2 = letters.map(item => item + '++');
console.log('map', newArray2);
