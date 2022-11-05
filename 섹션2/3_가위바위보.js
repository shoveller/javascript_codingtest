function solution(a, b){
    const 가위 = 1
    const 바위 = 2
    const 보 = 3

    const result = []
    for (const aKey in a) {
        const A = a[aKey]
        const B = b[aKey]

        if (A === B) {
            result.push('D')
        }

        else if (A === 보 && B ===가위) {
            result.push('B')
        }

        else if (A > B ) {
            result.push('A')
        }

        else if (A < B ) {
            result.push('B')
        }
    }

    return result
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
