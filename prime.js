const x = 23;
let count = 0;
for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log(x + " is prime");
    let diffrence = nextPrime(x) - x;
    console.log(`Diffrence between first prime and nextprime: ${diffrence}`);
} else {
    console.log(x + " is not prime");
}
function nextPrime(x) {
    let number = x + 1;
    let nextPrime = 0;
    for (let k = number; k >= number; k++) {
        let count = 0;
        for (let i = 1; i <= k; i++) {
            if (k % i == 0) {
                count++;
            }
        }
        if (count == 2) {
            nextPrime = k;
            break;
        }
    }
    return nextPrime;
}
