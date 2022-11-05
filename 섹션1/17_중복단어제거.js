function solution(s){
    let result = []
    for (const index in s) {
        if (index == s.indexOf(s[index])) {
            result.push(s[index])
        }
    }

    return result
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
