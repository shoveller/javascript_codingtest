function solution(s){
    return s.split('').map(item => {
        const isUpperCase = item.toUpperCase() === item
        if (isUpperCase) {
            return item.toLowerCase()
        }

        return item.toUpperCase()
    }).join('')
}

console.log(solution("StuDY"));
