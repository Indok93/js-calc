// I denne opgave skal du skrive 4 funktioner:

// multiplication: en funktion der tager 2 parametre og returner produktet af dem.
function multiplication(a,b) {
    return a * b;
}
console.log(multiplication(6,6));



// addition: en funktion der tager 2 parametre og returner summen af dem
function addition(a,b) {
    return a + b;
}
console.log(addition(50,100));



// substraction: en funktion der tager 2 parametre og returner differensen af dem
function substraction(a,b) {
    return a - b;
}
console.log(substraction(8,1));



// division: en funktion der tager 2 parametre og returner kvotienten af dem
function division(a,b) {
    if (b === 0) {
        return "division med 0 er ikke muligt"
    } else {
        return a / b;
    }
}
console.log(division(10,2));


// skriv derefter en hoved funktion der kan kalde de 4 funktioner 
// og udskrive resultatet i konsollen for de 4 funktioner.
function main() {
    
}


// prøv at kombinere funktionskald så du kan lave forskellige udregninger.




// hvis du har mod på det, må du gerne skrive en frontend, hvor du kan 
// sende 2 værdier til dine funktioner ud fra en valgt matematisk operator.