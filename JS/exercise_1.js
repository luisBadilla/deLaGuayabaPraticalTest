//Autor: Luis Badilla
var array_1 = [2,3,4,6];
var array_2 = [123,67,890,4];
var array_3 = [2,3,7,9,4,5,6,9,12];

exercise_1(array_1);
exercise_1(array_2);
exercise_1(array_3);

function exercise_1(array){
  var result = [];
  var temp;
  for(var i = 0; i < array.length; i++){
    temp = 1;
    for(var n = 0; n < array.length; n++){
            if( i != n){
               temp = temp * array[n];
            }
    }
    result[i] = temp;
   
  }
  console.log(result);
}