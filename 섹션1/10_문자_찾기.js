function solution(s, t){

    return s.split('').filter(item => item === t).length
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
