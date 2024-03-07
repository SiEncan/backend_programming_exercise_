for (let number = 2; number < 1000; number++) {
    let isPrime = true;
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}