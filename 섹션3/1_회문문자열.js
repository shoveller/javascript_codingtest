function solution(s){
    // 1. 문자열을 소문자로 변환한다
    // 2. 문자열을 순회한다
    // 3. 대상과 맞은편이 같은지 확인한다
    const 소문자_문자열 = s.toLowerCase()

    for (const 키 in 소문자_문자열) {
        const 인덱스 = parseInt(키, 10)
        const 반대편_인덱스 = 소문자_문자열.length -1 - 인덱스

        if (소문자_문자열[인덱스] !== 소문자_문자열[반대편_인덱스]) {
            return 'NO'
        }
    }

    return 'YES'
}

let str="goooG";
console.log(solution(str));
