const space1 = "x";
const space2 = "o";
const space3 = "";
const space4 = "x";
const space5 = "x";
const space6 = " ";
const space7 = "o";
const space8 = " ";
const space9 = " ";

console.log(`   |   |   `);
console.log(` ${space1} | ${space2} | ${space3}  `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);

/* 

Will not work due to the first part of line 24 - space1 && space2 will evaluate to true regardless of what is entered. 

if (space1 && space2 && space3 === "x") {
    console.log("Winner");
} else if (space1 && space2 && space3 === "o") {
    console.log("Also a winner");
} else{
    console.log("No win");
}
*/
if (space1 === "x" && space2 === "x" && space3 === "x") {
    console.log('Winner');
} else if (space1 === "o" && space2 === "o" && space3 === "o") {
    console.log('Winner');
} else {
    console.log('Try again');
}

// Version 2 - shorter and cleaner - not important what the values for space1, 2 and 3 are as long as they are identical.

if (space1 === space2 && space2 === space3) {
    console.log('You win');
} else {
    console.log('You lose');
}
