// concat es inmutable, no modifica el array original sino que origina uno ///// nuevo

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];


// utilizamos el spread operator para que la clonación para que no llame a 
// la referencia en memoria

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);

}

console.log('for', newArray);

const rta = elements.concat(otherElements);
console.log('concat', rta);

// otra forma válida es utilizar spread operators
// pero solo sirve para arrays, cuidado con los strings
const rta2 = [...elements, ...otherElements];
console.log('spread', rta2);