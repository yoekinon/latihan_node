const myMap = new Map([
    ['1', 'A string key'],
    [1, 'A number key'],
    [true, true]
]);

console.log(myMap)

const capital = new Map([
    ['Jakarta', 'London'],
    ['London', 'United Kingdom'],
    ['Tokyo', 'Japan']
]);

console.log(capital.get('Jakarta'));
console.log(capital.get('Tokyo'));
console.log(capital.set('New Delhi', 'India'));
console.log(capital.has("Jakarta"))
console.log(capital.delete("New Delhi"));
console.log(capital)
