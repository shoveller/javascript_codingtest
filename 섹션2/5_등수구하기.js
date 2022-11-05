function solution(arr){
    // 0. 점수배열에서 중복을 제거한다.
    const 중복제거배열 = Array.from(new Set(arr))
    // 1. 점수배열을 내림차순 정렬한 새 배열을 만든다
    const 내림차순배열 = 중복제거배열.sort((a,b) => b - a)
    // 2. 1에 등수 정보를 추가한 컬렉션을 만든다. 1의 인덱스 + 1 이 등수이다.
    const 등수_보고서 = 내림차순배열.map((item, index) => {
        return {
            점수: item,
            등수: index + 1
        }
    })
    // 3. 점수배열을 순회하면서 그것과 매칭되는 등수배열을 만들어 반환한다
    return arr.map(점수 => {
        const { 등수 } = 등수_보고서.find(item => item.점수 === 점수)

        return 등수
    })
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));
