function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(자연수_목록 = []){
    // 1. 자연수 목록을 순회하며 하나씩 꺼낸다
    // 2. 1의 값을 뒤집는다
    // 3. 2의 값이 소수이면 반환한다

    const 소수_목록 = []
    자연수_목록.forEach((자연수) => {
        const 뒤집은_값 = Number(`${자연수}`.split('').reverse().join(''))
        console.log(뒤집은_값);

        if (isPrime(뒤집은_값)) {
            소수_목록.push(뒤집은_값)
        }
    })

    return 소수_목록
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
