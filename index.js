//the factorial function finds the factorial of the parameter num
function getFactiorial(num){
    let factorial = 1;
    for(let i=num; i>=1; i--){
      factorial *= i;
    }//loop end
    return factorial;
  }//end of factorial 
  