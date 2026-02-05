// একটি ভ্যারিয়েবলের type চেক করো (typeof)


let str = "pizza";
let numeric = 15;
let boolean = true;


console.log(typeof str);
console.log(typeof numeric);
console.log(typeof boolean);

// string কে number এ convert করো

let string = "123";
let num = Number(string);

console.log(num);
console.log(typeof num);


// number কে string এ convert করো

let num = 123;
let str = String(num);

console.log(typeof str);



// NaN কিভাবে তৈরি হয় তার উদাহরণ দেখাও

let num = Number("abc");
console.log(num);
console.log(typeof num);