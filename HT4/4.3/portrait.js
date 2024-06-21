const birthYear = prompt("Enter your year of birth: ");
const town = prompt("Enter your town: ");
let country;
let captital = false;
let inCaptital;
const favSport = prompt("Enter your favorite kind of sport: ");
let champion;
const year = 2024;
let age = year - birthYear;
//------------------------------------------------------------------
if (town === "Kyiv") {
    country = "Ukraine";
    captital = true;
} else if (town === "Washington") {
    country = "USA";
    captital = true;
} else if (town === "London") {
    country = "Great Britain";
    captital = true;
}

if (captital) {
    inCaptital = `You live in the capital of ${country}`;
} else {
    inCaptital = `You live in ${town}`;
}
//------------------------------------------------------------------
let rSport;
let tSport;

if (favSport == "Football") {
    champion = "Ronaldo";
    rSport = true;
}
else if (favSport == "climbing") {
    champion = "Alex Megos";
    rSport = true;
}
else if (favSport == "f1") {
    champion = "Max Verstappen";
    rSport = true;
}
else {
    rSport = false;
}

if (rSport) {
    tSport = `Cool! Do you want to become a ${champion}?`;
}
else {
    tSport = "You are doing a very interesting sport";
}
//------------------------------------------------------------------
let result = confirm();

if (result){
    console.log("ok");
}
else{
    console.log("cancel");
}

let message = `You're about ${age} years old\n${inCaptital}\n${tSport}`;
alert(message);

