function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-2)+fib(n-1);
}

function memoize(fun) {
    var cache = {};
    
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            var result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

var memFib = memoize(fib)

for (let i = 10; i < 41; i++) {
    console.log(i);
    console.time('memoizeFib');
    memFib(i);
    console.timeEnd('memoizeFib');
}