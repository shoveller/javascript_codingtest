function solution(a, b, c){
    let max = Number.MIN_SAFE_INTEGER
    for (const item of arguments) {
        if (item > max) {
            max = item
        }
    }

    const sum = Array.from(arguments).reduce((sum, curr) => sum + curr)
    if (sum - max > max) {
        return 'YES'
    }

    return 'NO'
}

console.log(solution(6,7,11));
console.log(solution(13,33,17));
