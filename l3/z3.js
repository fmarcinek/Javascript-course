function forEach(a,f) {
    for (let i = 0; i < a.length; i++) {
        f(a[i]);
    }
}

function forEach2(a,f) {
    return function(a,f) {
        for (let i = 0; i < a.length; i++) {
            f(a[i]);
        }
    }
}

var a = [1,2,3,4];

f = forEach2();
f(a,x => {console.log(x);});

//////////////////////////////////////////////

function filter(a,f) {
    var result = [];
    for (let i = 0; i < a.length; i++) {
        if (f(a[i]) == true) {
            result.push(a[i]);
        };
    }
    return result;
}

function filter2(a,f) {
    return function(a,f) {
        var result = [];
        for (let i = 0; i < a.length; i++) {
            if (f(a[i]) == true) {
                result.push(a[i]);
            };
        }
        return result;
    }
}

g = filter2();
console.log(g(a, x => x < 3));

/////////////////////////////////////////////////

function map(a,f) {
    var result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(f(a[i]));
    }
    return result;
}

function map2(a,f) {
    return function(a,f) {
        var result = [];
        for (let i = 0; i < a.length; i++) {
            result.push(f(a[i]));
        }
        return result;
    }
}

h = map2();
console.log(h(a, x => x * 2))