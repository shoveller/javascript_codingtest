function solution(행렬 = [[]]){
    //1. 이차원 배열을 왼쪽부터 아래를 향해 순회한다
    //2. 각 요소의 상단, 우단, 하단, 좌단값을 구한다
    //3. 해당 요소가 다른 값보다 크다면 결과 배열에 넣는다
    //4. 결과 배열의 길이를 반환한다

    const 결과 = []
    행렬.forEach((열, 열_인덱스) => {
        열.forEach((요소, 행_인덱스) => {
            const 상단 = 행렬?.[열_인덱스 -1]?.[행_인덱스] ?? Number.MIN_SAFE_INTEGER
            const 우단 = 행렬?.[열_인덱스]?.[행_인덱스 + 1] ?? Number.MIN_SAFE_INTEGER
            const 하단 = 행렬?.[열_인덱스 + 1]?.[행_인덱스] ?? Number.MIN_SAFE_INTEGER
            const 좌단 = 행렬?.[열_인덱스]?.[행_인덱스 -1] ?? Number.MIN_SAFE_INTEGER
            const 주변의_최댓값 = Math.max(...[상단, 우단, 하단, 좌단])
            console.log('요소', 요소);
            console.log('주변의_최댓값', 주변의_최댓값);

            if (요소 > 주변의_최댓값) {
                결과.push(요소)
            }
        })
    })

    console.log(결과);
    return 결과.length
}

let arr=[[5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]];

console.log(solution(arr));
