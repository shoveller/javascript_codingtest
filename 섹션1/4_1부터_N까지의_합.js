function solution(n){
    return Array(n).fill(undefined).reduce((sum, curr, index) => {
        const value = index + 1

        return sum + value
    }, 0)
}

console.log(solution(100));
