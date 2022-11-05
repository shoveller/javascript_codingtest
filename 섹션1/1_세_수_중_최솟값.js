function solution(a, b, c){
    let min = Number.MAX_SAFE_INTEGER
    for (const item of arguments) {
        if (min > item) {
            min = item
        }
    }

    return min
}

console.log(solution(2, 5, 11));
