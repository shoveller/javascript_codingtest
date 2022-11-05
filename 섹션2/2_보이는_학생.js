function solution(arr){
    let count = 0
    for (const arrKey in arr.reverse()) {
        const prev = arr[parseInt(arrKey, 10) + 1]
        const curr = arr[arrKey]

        if (curr > prev) {
            count++
        }
    }
    return count
}

let arr=[1,1,1,130, 135, 148, 140, 145, 150, 150,1,1,1,1,1, 153];

console.log(solution(arr));
