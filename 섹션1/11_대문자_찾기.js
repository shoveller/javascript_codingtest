function solution(s){
    // 65 ~ 90
    return s.split('').filter(item => {
        const charCode = item.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return true
        }
        return false
    }).length
}

let str="KoreaTimeGood";
console.log(solution(str));
