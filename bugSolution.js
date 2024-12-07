function foo(x) {
  if (x === 1) {
    return true;
  } else if (x === 2) {
    return false;
  } else if (x > 0 && x % 2 === 0) {
    return foo(x - 2);
  } else if (x > 0 && x % 2 !== 0){
    return foo(x -1);
  }
  else {
    return "Invalid input";
  }
}

console.log(foo(5)); // Output: true
console.log(foo(4)); // Output: false
console.log(foo(10)); //Output: false
console.log(foo(0)); //Output: Invalid input
console.log(foo(-1)); //Output: Invalid input