function solution(s){
    const 짝수 = s.length % 2 === 0
    const mid = Math.floor(s.length / 2)
    if (짝수) {
        return s.substring(mid -1, mid + 1)
    }

    return s.substring(mid, mid + 1)
}
console.log(solution("study"));
console.log(solution("good"));
