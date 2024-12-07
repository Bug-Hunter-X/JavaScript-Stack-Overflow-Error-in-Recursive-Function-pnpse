function foo(x){
  if(x == 1) {return true}
  else if (x == 2) {return false}
  else {return foo(x-2)}
}

console.log(foo(5)); // outputs true
console.log(foo(4)); // outputs false
console.log(foo(10)); //stack overflow error