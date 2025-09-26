// Test 1: Write a function applyTwice(fn, x)
// that applies function fn to x two times.
function applyTwice(fn, x) {
  return fn(fn(x));
}
console.log(
  "Test 1:",
  applyTwice((n) => n + 2, 5)
); // 9
console.log(
  "Test 1:",
  applyTwice((n) => n * 3, 2)
); // 18

// Test 2: Write a function makePowerFn(n)
// that returns a function which raises input to the power of n.
function makePowerFn(n) {
  return function (x) {
    return x ** n;
  };
}
const square = makePowerFn(2);
const cube = makePowerFn(3);
console.log("Test 2:", square(5)); // 25
console.log("Test 2:", cube(2)); // 8

// Test 3: Write a function compose(f, g)
// that returns a new function h(x) = f(g(x)).
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}
const double = (x) => x * 2;
const increment = (x) => x + 1;
const h = compose(double, increment);
console.log("Test 3:", h(3)); // 8 (double(increment(3)))

// Test 4: Write a function mapWith(fn, arr)
// that behaves like Array.map using fn.
function mapWith(fn, arr) {
  return arr.map(fn);
}
console.log(
  "Test 4:",
  mapWith((x) => x * 2, [1, 2, 3])
); // [2,4,6]

// Test 5: Write a function filterWith(fn, arr)
// that behaves like Array.filter using fn.
function filterWith(fn, arr) {
  return arr.filter(fn);
}
console.log(
  "Test 5:",
  filterWith((x) => x > 2, [1, 2, 3, 4])
); // [3,4]

// Test 6: Write a function reduceWith(fn, arr, init)
// that behaves like Array.reduce using fn and init.
function reduceWith(fn, arr, init) {
  return arr.reduce(fn, init);
}
console.log(
  "Test 6:",
  reduceWith((a, b) => a + b, [1, 2, 3, 4], 0)
); // 10

// Test 7: Write a function curryAdd(a)
// that returns a function expecting b, then c, to return a+b+c.
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log("Test 7:", curryAdd(1)(2)(3)); // 6

// Test 8: Write a function once(fn)
// that allows fn to be called only once, then always returns the first result.
function once(fn) {
  let call = false;
  let result;
  return function (...args) {
    if (!call) {
      result = fn(...args);
      call = true;
    }
    return result;
  };
}
let init = once(() => "Initialized");
console.log("Test 8:", init()); // "Initialized"
console.log("Test 8:", init()); // "Initialized"

// Test 9: Write a function makeCounter()
// that returns a function which increases internal count each time it’s called.
function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log("Test 9:", counter()); // 1
console.log("Test 9:", counter()); // 2

// Test 10: Write a function negate(fn)
// that returns a function which returns the logical opposite of fn(x).
function negate(fn) {
  return function (x) {
    return !fn(x);
  };
}
const isEven = (x) => x % 2 === 0;
const isOdd = negate(isEven);
console.log("Test 10:", isOdd(3)); // true
console.log("Test 10:", isOdd(4)); // false

// Test 11: Write a function callNTimes(fn, n)
// that calls fn exactly n times.
function callNTimes(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
callNTimes(() => console.log("Test 11: Hello"), 3);

// Test 12: Write a function pipe(...fns)
// that returns a function applying all fns left-to-right.
function pipe(...fns) {
  return (x) => fns.reduce((acc, cur) => cur(acc), x);
}
const pipeline = pipe(
  (x) => x + 1,
  (x) => x * 2,
  (x) => x - 3
);
console.log("Test 12:", pipeline(5)); // 9

// Test 13: Write a function memoize(fn)
// that caches the result of fn(x) to avoid recomputation.
function memoize(fn) {
  let check = {};

  return (x) => {
    if (x in check) {
      console.log('cached, no Computing...');
      return check[x] 
      
    } else{
      let result = fn(x)
      check[x] = result
      return result
    }
  };
}
const slowSquare = (n) => {
  console.log("Computing...");
  return n * n;
};
const fastSquare = memoize(slowSquare);
console.log("Test 13:", fastSquare(4)); // Computing... 16
console.log("Test 13:", fastSquare(4)); // 16 (cached, no Computing...)

// Test 14: Write a function zipWith(fn, arr1, arr2)
// that combines two arrays element-wise using fn.
function zipWith(fn, arr1, arr2) {}
console.log(
  "Test 14:",
  zipWith((a, b) => a + b, [1, 2, 3], [4, 5, 6])
); // [5,7,9]

// Test 15: Write a function repeatFn(fn, times)
// that returns a new function which repeats fn’s result times times in an array.
function repeatFn(fn, times) {}
const sayHi = () => "Hi";
console.log("Test 15:", repeatFn(sayHi, 3)()); // ["Hi","Hi","Hi"]
