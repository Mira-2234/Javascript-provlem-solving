// বয়স দিয়ে vote দিতে পারবে কিনা চেক করো

let age = 19;
if (age >= 18 ){
    console.log("Yes, you can vote.");
} else{
    console.log("No, you cann't vote.");
}


// একটি সংখ্যা বড় না ছোট 100 থেকে চেক করো

let num = 65;
if(num < 100){
    console.log("The number is small")
} else{
    console.log("The number is big")
}



// Student এর mark দিয়ে grade বের করো

let bangla = 20;
let english = 20;
let math = 20;
let biology = 28;

const sum = bangla + english + math + biology;
const avg = sum / 4;

 console.log(avg);

if (avg >= 80 && avg <= 100){
    console.log("A+");
} else if(avg >=70 ){
    console.log("A");
} else if(avg >= 60){
    console.log("A-");

} else if(avg >= 50){
    console.log("B");
} else if(avg >= 40){
    console.log("C");
} else if(avg >= 30){
    console.log("D");
} else if (avg >= 0){
    console.log("Fail!!")
}






// Leap year চেক করার প্রোগ্রাম লেখো

let year = 2024;
if (year % 4 === 0 ){
    console.log("This year is leap year")
} else{
    console.log("This is not a leap year")
}


// তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো

let a = 23;
let b = 22;
let c = 12;

let largest;

if(a > b && a > c){
    console.log("Largest number is A");

} else if(b > c){
    console.log("Largest number is B");

} else{
    console.log("Largest number is C");
}
