function solution(arr){
    const 홀수목록 = arr.filter(item => item % 2 !== 0)

    return [홀수목록.reduce((sum, item) => sum + item, 0), Math.min(...홀수목록)]
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
