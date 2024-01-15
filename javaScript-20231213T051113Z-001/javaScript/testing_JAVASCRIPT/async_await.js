// Function that returns a promise after a delay
const delay = (milliseconds) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Delayed for ${milliseconds} milliseconds`);
        }, milliseconds);
    });
};

// Async function using await to wait for the delay function
const asyncFunction = async () => {
    console.log("Start");

    try {
        const result1 = await delay(2000);
        console.log(result1);

        const result2 = await delay(3000);
        console.log(result2);

        console.log("End");
    } catch (error) {
        console.error("Error:", error);
    }
};

// Call the async function
asyncFunction();
