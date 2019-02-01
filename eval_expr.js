function operate(sign, nb1, nb2) {
  //parseInt converts strings to numbers.
  //https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
  nb1 = parseInt(nb1);
  nb2 = parseInt(nb2);
  console.log(nb1 + " " + sign + " " + nb2);
  //https://www.geeksforgeeks.org/switch-case-javascript/
  switch (sign) {
    case '+': return nb1 + nb2;
    case '-': return nb1 - nb2;
    case '*': return nb1 * nb2;
    case '/': return nb1 / nb2;
    case '%': return nb1 % nb2;
  }
}

function result(signs, expr) {
  //let enables me to change a var.
  //The length property returns the length of a string (number of characters).
 //The length of an empty string is 0.
  for (let i = 0; i < expr.length; i++) { //for creates a loop //++ increment numbers.
    if (signs.indexOf(expr[i]) > -1) {    //indexOf: Provides position first occurrence of specified text within a string.
      let evaluated = operate(expr[i], expr[i - 1], expr[i + 1]);
      //splice adds/removes items to/from an array, and returns the removed item(s).
      expr.splice(i - 1, 3, evaluated);
      return result(signs, expr);
    }
  }
  return expr;
}

function evalExpr(expr) {
  //split is used to split a string into an array of substrings, and returns the new array.
  expr = expr.split(/\s/g);
  expr = result(['*', '/' , '%'], expr); //[]: Find any of the characters between the brackets.
  expr = result(['+', '-'], expr);
   
  return parseInt(expr[0]);
}
console.log(evalExpr("5 * 3 / 1 % 3"));
