function urutkanAbjad(str) {
    return str.split("").sort().join("")
}

console.log(urutkanAbjad("hello")) // ehllo
console.log(urutkanAbjad("truncate")) // acenrttu
console.log(urutkanAbjad("developer")) // deeeloprv
console.log(urutkanAbjad("software")) // aeforstw
console.log(urutkanAbjad("aegis")) // aegis