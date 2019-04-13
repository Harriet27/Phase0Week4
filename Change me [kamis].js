function changeMe(arr) {
  
  for(i = 0; i < arr.length; i++) {
    
    var dataDiri = {};
        dataDiri.firstname = arr[i][0];
        dataDiri.lastname = arr[i][1];
        dataDiri.gender = arr[i][2];
    
      if (arr[i][3] === undefined) {
        dataDiri.age = "Invalid Birth Year";
      } else {
        dataDiri.age = 2019-arr[i][3];
      }
    console.log(dataDiri)
  }
}

console.log(changeMe([
  ["Christ", "Evans", "Male", 1982], 
  ["Robert", "Downey", "Male"]
]));  

/*
Output :

1. Chris Evans :
{ firstName: 'Christ',
  lastName: 'Evans',
  gender: 'Male',
  age: 37 }

2. Robert Downey:
{ firstName: 'Robert',
  lastName: 'Downey',
  gender: 'Male',
  age: 'Invalid Birth Year' }
*/