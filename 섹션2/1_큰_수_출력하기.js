function solution(arr){
    let result = []
    for (const key in arr) {
        const prev = arr[key - 1]
        const current = arr[key]

        if (!prev) {
            result.push(current)
        }

        if (current > prev) {
            result.push(current)
        }
    }
    return result
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));
