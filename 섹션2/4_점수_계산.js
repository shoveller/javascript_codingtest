function solution(arr){
    let 보고서 = []
    for (const idx in arr) {
        const 보고서에_누적된_이전값 = 보고서[idx - 1]
        const curr = arr[idx]

        if(보고서에_누적된_이전값 >= 1 && curr === 1) {
            보고서.push(보고서에_누적된_이전값 + 1)
        } else {
            보고서.push(curr)
        }
    }

    return 보고서.reduce((sum, curr) => sum + curr)
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
