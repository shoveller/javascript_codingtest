function solution(s){
    return s.split('').map(item => item === 'A' ? '#' : item).join('')
}

let str="BANANA";
console.log(solution(str));
