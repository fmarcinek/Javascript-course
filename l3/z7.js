function createFibIter() {
    _state = [0,0];    // przechowuje dwie ostatnie liczby Fibonacciego
    return {
        next : function() {
            if (_state[0] < 1) {
                _state[0]++;
            } else {
                _state = [_state[1],_state[0]+_state[1]];
            }
            return {
                value : _state[1],
                done : false
            }
        }
    }
}

// var fibIter = createFibIter();
// for (var _result; _result = fibIter.next(), !_result.done;) {
//     console.log( _result.value );
// }

var fibIter = {
    [Symbol.iterator] : createFibIter
};
console.log(fibIter);
// for (var i of fibIter) {
//     console.log( i );
// }

/////////////////////////////////////////////////////////////////////////

function* createFibGen() {
    _state = [0,1];    // przechowuje dwie ostatnie liczby Fibonacciego
    yield 0;
    yield 1;
    while (true) {
        _state = [_state[1],_state[0]+_state[1]];
        yield _state[1];
    }
}

// var fibGen = createFibGen();
// for (var _result; _result = fibGen.next(), !_result.done;) {
//     console.log( _result.value );
// }

var fibGen = {
    [Symbol.iterator] : createFibGen
}

for (var i of fibGen) {
    console.log( i );
}

// export {createFibGen}