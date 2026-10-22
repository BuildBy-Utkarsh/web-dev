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


const now = new Date();

console.log(now);

console.log(now.toString());

console.log(now.toLocaleDateString());

console.log(now.toLocaleString());


console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMilliseconds());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getUTCDate());
console.log(now.getUTCFullYear());


// days : mon - sunday(1-7 index  based)
// months  : january (0 index based)

// year month date hour min sec milisec

const how = new Date(2026,9,22,22,16,56,125);
console.log(how);


const dates = Date.now();
console.log(dates);
