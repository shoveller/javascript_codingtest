function solution(str){
    // 1. 숫지만 추출한다
    return parseInt(str.replace(/[^0-9]/g, ''), 10)
}

let str="g0en2T0s8eSoft";
console.log(solution(str));
