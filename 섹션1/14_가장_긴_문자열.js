function solution(s){
    const 길이목록 = s.map(item => item.length)
    const 가장긴_길이 = Math.max(...길이목록)
    const 가장긴_문자열의_인덱스 = 길이목록.indexOf(가장긴_길이)
    console.log(길이목록, 가장긴_길이, 가장긴_문자열의_인덱스);

    return s[가장긴_문자열의_인덱스]
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
