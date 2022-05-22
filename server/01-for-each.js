const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const letter = letters[index];
    console.log('for', letter);
}

letters.forEach(letter => console.log('for each', letter))