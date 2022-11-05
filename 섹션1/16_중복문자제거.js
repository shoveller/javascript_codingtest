function solution(s){
    let result = ''
    for (const index in s) {
        if (index == s.indexOf(s[index])) {
            result += s[index]
        }
        // console.log(s[index],  index, s.indexOf(s[index]));
    }
    return result
}
console.log(solution("ksekkset"));
