/*
=============
Make Anagram
=============

[INSTRUCTION]
Kita mengganggap kedua string adalah Anagram apabila huruf-huruf dari string
pertama dapat disusun ulang menjadi string kedua. Dengan kata lain, kedua string
harus memiliki huruf yang sama dengan jumlah huruf yang sama pula, contohnya
"bacdc" dan "dcbac" adalah Anagram, tetapi "bacdc" dan "dcbad" bukan Anagram.

Tugas anda adalah menghitung minimal jumlah karakter yang harus dihapus agar
kedua string menjadi Anagram!

[EXAMPLE]
bila input adalah "cde" dan "abc", maka hasilnya adalah 4, karena kita harus
menghapus 2 huruf pada "cde" yaitu "d" dan "e", dan mengapus 2 huruf pada "abc"
yaitu "a" dan "b".

*/

function countAnagramDeletion(stringA, stringB) {
  // kode anda disini
  if (stringA.length !== stringB.length) {
    return false;
}
var sortStr1 = stringA.split('').sort().join('');
var sortStr2 = stringB.split('').sort().join('');

return (sortStr1 === sortStr2);
}

console.log(countAnagramDeletion('cde', 'abc')); // 4

console.log(
  countAnagramDeletion('ayam', 'maya')
); // 0

console.log(
  countAnagramDeletion(
    'bugexikjevtubidpulaelsbcqlupwetzyzdvjphn',
    'lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk'
  )
); // 40

console.log(
  countAnagramDeletion(
    'imkhnpqnhlvaxlmrsskbyyrhwfvgteubrelgubvdmrdmesfxkpykprunzpustowmvhupkqsyjxmnptkcilmzcinbzjwvxshubeln',
    'wfnfdassvfugqjfuruwrdumdmvxpbjcxorettxmpcivurcolxmeagsdundjronoehtyaskpwumqmpgzmtdmbvsykxhblxspgnpgfzydukvizbhlwmaajuytrhxeepvmcltjmroibjsdkbqjnqjwmhsfopjvehhiuctgthrxqjaclqnyjwxxfpdueorkvaspdnywupvmy'
  )
); // 102