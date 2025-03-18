//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// break and continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        // break;
        continue; //skips that value without terminating the loop
    }
    console.log(i);
}