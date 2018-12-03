//the factorial function finds the factorial of the parameter num
function getFactiorial(num){
    let factorial = 1;
    for(let i=num; i>=1; i--){
      factorial *= i;
    }//loop end
    return factorial;
  }//end of factorial 

  //write your new function below
  
 /*===================
 Take a look at the recursive implementation of your factorial function, how do you see it?
 */

function factorial(n){
	return n == 0 ?  1: n * factorial(n-1);
}

/*===================
 An implementation of the factorial function divided by two
 */
 
function factDivTwo(n){
	let fact = 1;
	for(let i = n; i >=1; i--){
		fact *= i;
	}
	return fact/2;
}