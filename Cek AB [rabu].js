function checkAB(str) {
    
    var arr = str.toLowerCase().split("")

    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === "a" && arr[i+4] === "b") {
            return true
        } if (arr[i] === "b" && arr[i+4] === "a") {
            return true
        }
    } 
    return false
}

console.log(checkAB("lane borrowed")) // true
console.log(checkAB("i am sick")) // false
console.log(checkAB("you are boring")) // true
console.log(checkAB("barbarian")) // true
console.log(checkAB("bacon and meat")) // false