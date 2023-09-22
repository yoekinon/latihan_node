const profile = {
    firstName : "John",
    lastName : "Doe",
    age : 18
};

let firstName = "Nathanael";
let age = 20;

({firstName, age} = profile);

let {firstName:namaPertama, lastName:namaTerakhir, age:umur} = profile;
console.log(namaPertama)
console.log(namaTerakhir)
console.log(umur)

const animal = ['dog', 'cat', 'cow'];
let [satu, dua] = animal;

console.log(satu)
console.log(dua)

let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a,b)

