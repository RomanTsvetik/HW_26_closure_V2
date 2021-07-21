
//generation of random numbers
function getRandomInt(max = 100) {
    return Math.floor(Math.random() * max + 1);
}

function closure() {

    let arrayNumbers = [];
    let counter = 0;

    function innerFunc() {
        //basic case
        if (arrayNumbers.length === 100) return { arrayNumbers, counter };

        ++counter;

        const randomInt = getRandomInt();

        //checking if we have similar numbers in our array and if we have it - calling innerFunc again
        if (arrayNumbers.includes(randomInt)) {
            return innerFunc();
        }

        arrayNumbers.push(randomInt);

        return {
            arrayNumbers,
            counter,
        };
    }

    return innerFunc;
}

let result = closure();

for (let i = 0; i < + 100; i++) {
    console.log(result());
}

