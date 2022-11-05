function solution(day, arr){
    const 위반한차량 = []
    for (const car of arr) {
        const [,last] = `${car}`.split('')
        if (last === `${day}`) {
            위반한차량.push(car)
        }
    }
    console.log(위반한차량);

    return 위반한차량.length
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
