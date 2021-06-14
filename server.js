const FAVORITE_FOOD = process.env.FAVORITE_FOOD;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (true) {
        console.log(`${FAVORITE_FOOD} is the best!`);
        await sleep(5000);
    }
}

main();