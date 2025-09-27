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
function zipWith(fn, arr1, arr2) {
  return arr1.map((a,i) => fn(a,arr2[i]))
}
console.log(
  "Test 14:",
  zipWith((a, b) => a + b, [1, 2, 3], [4, 5, 6])
); // [5,7,9]

// Test 15: Write a function repeatFn(fn, times)
// that returns a new function which repeats fn’s result times times in an array.
function repeatFn(fn, times) {
  return () => {
    let result = []
    for (let i = 0; i < times; i++){
      result.push(fn())
    }
    return result
  }
}
const sayHi = () => "Hi";
console.log("Test 15:", repeatFn(sayHi, 3)()); // ["Hi","Hi","Hi"]

// Test 16: Write a function doubleMap(arr, fn)
// that applies fn to each element and doubles the result.
function doubleMap(arr, fn) {
  return arr.map(e => fn(e) * 2)
}
console.log("Test 16:", doubleMap([1, 2, 3], x => x + 1)); // [4,6,8]

// Test 17: Write a function callAndReturn(fn, x)
// that calls fn(x) and returns a string "Result: <value>".
function callAndReturn(fn, x) {
  return `Result: ${fn(x)}`
}
console.log("Test 17:", callAndReturn(n => n*2, 5)); // "Result: 10"

// Test 18: Write a function transformAndFilter(arr, transformFn, filterFn)
// that applies transformFn, then filters using filterFn.
function transformAndFilter(arr, transformFn, filterFn) {
  return arr.map(transformFn).filter(filterFn)
}
console.log("Test 18:", transformAndFilter([1,2,3,4], x=>x*3, x=>x>5)); // [6,9,12]

// Test 19: Write a function countBy(arr, fn)
// that returns an object counting elements by key returned from fn.
function countBy(arr, fn) {
  return arr.reduce((acc, cur) => {
    if (!acc[fn(cur)]){
      acc[fn(cur)] = 1
    } else{
      acc[fn(cur)]++
    }
    return acc
  }, {})
}
console.log("Test 19:", countBy(["apple","banana","pear","apricot"], w => w[0]));
// { a: 2, b: 1, p: 1 }

// Test 20: Write a function uniqueBy(arr, fn)
// that removes duplicates based on the result of fn.
function uniqueBy(arr, fn) {
  return arr.reduce((acc, cur) => {
    if (!acc.some((x) => fn(x) === fn(cur))){
      acc.push(cur)
    }
    return acc
  }, [])
}
console.log("Test 20:", uniqueBy([1,2,3,4,5,6], x=>x%3)); // [1,2,3]

// Test 21: Write a function createMultiplier(n)
// that returns a function multiplying its input by n.
function createMultiplier(n) {
  return (x) => x * n
}
const times10 = createMultiplier(10);
console.log("Test 21:", times10(5)); // 50

// Test 22: Write a function applyAll(fns, x)
// that applies all functions in fns array to x, returning results array.
function applyAll(fns, x) {
  return fns.map(( a => a(x)))
}
console.log("Test 22:", applyAll([(x)=>x+1,(x)=>x*2,(x)=>x-3], 5)); // [6,10,2]

// Test 23: Write a function partition(arr, fn)
// that splits arr into [pass, fail] based on fn.
function partition(arr, fn) {
  return arr.reduce((acc, cur) => {
    if (fn(cur)){
      acc[0].push(cur)
    } else{
      acc[1].push(cur)
    }
    return acc
  },[[],[]])
}
console.log("Test 23:", partition([1,2,3,4,5], x=>x%2===0)); 
// [[2,4],[1,3,5]]

// Test 24: Write a function repeatStringFn(fn, times)
// that repeats the string result of fn() for given times.
function repeatStringFn(fn, times) {
  let result = ""
  for (let i = 0; i < times;i++){
    result +=fn()
  }
  return result
}
console.log("Test 24:", repeatStringFn(()=> "Hi", 3)); // "HiHiHi"

// Test 25: Write a function averageBy(arr, fn)
// that computes the average of fn(x) for each element.
function averageBy(arr, fn) {
  return arr.reduce((acc, cur) => {
    acc += fn(cur)
    return acc
  },0)/arr.length
}
console.log("Test 25:", averageBy([1,2,3,4], x=>x*x)); // 7.5
