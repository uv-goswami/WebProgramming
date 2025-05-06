
let number = prompt("Enter a number to see its multiplication table:");


number = parseInt(number);


if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
