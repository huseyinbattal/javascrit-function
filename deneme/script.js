function sayHello(ad=" guest"){

    const greeting="Hello"+ad;
    return greeting;
}

console.log(sayHello(" john wayne"));
console.log(sayHello());

const sayHello = function (name) {
    const greeting = "Hello" + name;
    return greeting;

}

console.log(sayHello(" Huseyin"));

(
    function () {
        console.log("Welcome Hüseyin");

    }

        ()
);

(function(userName){
    console.log("welcome",userName);

}("Hüseyin"));

function a(b){
    document.write(`merhaba ${b}`);
}

a("Hüseyin");

let myAge=prompt("Yaşınızı giriniz.")
console.log(myAge);

function writeMyAge(params){

    document.write(`Senin yaşın ${myAge}`)
}

writeMyAge(myAge);

let firstName = prompt("İsminizi giriniz.");
let firstAge = prompt("Yaşınızı giriniz.");

function example(value1, value2) {
    let firstYears = 2 * 10.5;
    let lastYears = (value2 - 2) * 4;
    let totalYears = firstYears + lastYears;

    document.write(`<h1>${value1} köpek yaşın ${totalYears}</h1>`);
}

example(firstName,firstAge);

