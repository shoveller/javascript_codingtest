function solution(arr){

    return [Math.max(...arr), Math.min(...arr)];

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
