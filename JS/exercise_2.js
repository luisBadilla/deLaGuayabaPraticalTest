//Autor: Luis Badilla

exercise_2();

function exercise_2(){
  console.log("Cálculo de Factorial");
  var number;
  do{
    number = prompt("Ingrese un número:");
  }while(!isNumber(number));
  console.log(factorial(number));  
}

function isNumber(number){
  number = parseFloat(number);
  if(!isNaN(number) && Number.isInteger(number) && number >= 0){ 
    return true;
  }else{
    console.log("¡Ingrese un número entero positivo!");
    return false;
  }
}

function factorial(n){
  var stringFactorial = "0! = 1\n";
  var temp = 1;
  for(var i = 1; i <= n ; i++){
     temp = i * temp;
     stringFactorial +=  + i + "!" + " = " + temp + "\n";
  }
  return stringFactorial;
}