function solution(자연수_목록 = []){
    // 1. 자연수 목록을 순회한다
    // 2. 자연수의 각 자릿수를 하나씩 더해 결과 배열에 넣는다
    // 3. 결괏값 중에서 최댓값을 반환한다

    let 최대자연수= Number.MIN_SAFE_INTEGER
    let 최댓값 = Number.MIN_SAFE_INTEGER
    자연수_목록.forEach((자연수) => {
        const 자릿수_배열 = `${자연수}`.split('').map(Number)
        const 합 = 자릿수_배열.reduce((sum, curr) => sum + curr)

        if (합 >= 최댓값 && 자연수 > 최대자연수) {
            최댓값 = 합
            최대자연수 = 자연수
        }
    })

    return 최대자연수
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
