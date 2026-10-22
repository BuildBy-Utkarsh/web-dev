const day = 16;

const str = `Utkarsh ${day}`;

console.log(str);

const str1 = `hello world`;

console.log(str1.length)
console.log(str1[0]);

str1[4] = `b`;

console.log(str1);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(str1.indexOf(`wall`));

console.log(str1.lastIndexOf(`w`));

console.log(str1.includes(`hell`));

console.log(str1.slice(2,7)); // last wala included nhi hoga ie : 7

console.log(str1.slice(6));

console.log(str1.substring(2,6));

const a = `Utkarsh`;
const b = `Thakur`;

console.log(a+" "+b);

console.log(str1.replace(`hell` , `bell`));

const mini = `             bello             `;

console.log(mini.trim());

console.log(mini);

const names = `rohit,mohit,gohiit,pohit,jai,shree,ram`

console.log(names.split(","));
