// Write a function findMax that takes three arguments and returns their maximum.



function findMax(x, y, z) {

    let maxNumber = Math.max(x, y, z);
    return maxNumber;
}

console.log(findMax(23, 45, 12));

//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

let number = prompt("write a positive integer")
let mod = number % 2;

function evensAndOdds() {

    if (mod === 0) {
        return ("Cift Sayi")
    }

    else{
        return("Tek Sayi")
    }



}

console.log(evensAndOdds());





//Write a function which generates a randomUserIp. Ex: 168.127.25.2

let x = Math.floor(Math.random() * 1000);
let y = Math.floor(Math.random() * 1000);
let z = Math.floor(Math.random() * 100);
let t = Math.floor(Math.random()*10);

function randomUserIp(x,y,z,t) {

    alert(`IP address is ${x}.${y}.${z}.${t}`);

}

randomUserIp(x,y,z,t);

//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let firsName=prompt("Isminizi giriniz.");
let lastName=prompt("Soy isminizi giriniz.");


function fullName(ad,soyad){
    let uzunluk=(firsName+" "+lastName).length;
    console.log(`${firsName} ${lastName}-${uzunluk} karakter`)
    console.log(`${firsName} den sevgilerle`)
}

fullName(firsName,lastName)