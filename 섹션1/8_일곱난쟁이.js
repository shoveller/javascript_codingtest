function solution(arr){
    const 총합 = arr.reduce((sum, curr) => {
        return sum + curr
    }, 0)

    const 넘치는수 = 총합 - 100
    let 범인 = []
    arr.forEach((처음수, 처음수_인덱스) => {
        const 나머지_배열 = arr.slice(처음수_인덱스 + 1)
        나머지_배열.forEach((다음수) => {
            const 타깃 = 처음수 + 다음수
            if (타깃 === 넘치는수) {
                범인 = [처음수, 다음수]
            }
        })
    })

    return arr.filter(용의자 => {
        return !범인.includes(용의자)
    })
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
