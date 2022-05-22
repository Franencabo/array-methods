const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = "--";
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log('for', rtaFinal);


const rta2 = elements.join('--');
console.log('join', rta2);


const title = 'Curso de manipulación de arrays';

console.log(title.split(' '));

const urlFinal = title.split(' ').join('-').toLocaleLowerCase();

console.log(urlFinal);