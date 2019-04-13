function tukarBesarKecil (kalimat) {
    var tukar = '';
    for(var i = 0; i < kalimat.length; i++) {
        
        var uppercase = kalimat[i].toUppercase();
        var lowercase = kalimat[i].toLowercase();
        
        if (kalimat[i] === uppercase) {
            tukar += lowercase;
        } else if (kalimat[i] === lowercase) {
            tukar += uppercase;
        } else {
            tukar += kalimat[i]
        }
    }
    return tukar
} 

console.log(tukarBesarKecil('Hello World')) // hELLO wORLD
console.log(tukarBesarKecil('I aM aLAY')) // i Am Alay
console.log(tukarBesarKecil('My Name is Bond!!')) // mY nAME IS bOND!!
console.log(tukarBesarKecil('IT sHOULD bE me')) // it Should Be ME
console.log(tukarBesarKecil('001-A-3-5TrdYW')) // 001-a-3-5tRDyw