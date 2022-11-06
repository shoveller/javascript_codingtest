function solution(s){
    // 1. 문자열을 소문자로 변환한다. 문자만 대상으로 한다
    // 2. 문자열을 순회한다. 반대쪽 문자가 다르면 NO를 리턴
    // 3. 무사히 통과하면 2를 리턴
    const 소문자_배열 = s.toLowerCase().replace(/[^a-z]/g, '')

    for (const 키 in 소문자_배열) {
        const 인덱스 = parseInt(키, 10)
        const 반대편_인덱스 = 소문자_배열.length -1 -인덱스
        const 앞 = 소문자_배열[인덱스]
        const 뒤 = 소문자_배열[반대편_인덱스]

        if (앞 !== 뒤) {

            return 'NO'
        }
    }

    return 'YES'
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
