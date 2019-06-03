// import { createFibGen } from "./z7.js";

function* createFibGen() {
    _state = [0,1];    // przechowuje dwie ostatnie liczby Fibonacciego
    yield 0;
    yield 1;
    while (true) {
        _state = [_state[1],_state[0]+_state[1]];
        yield _state[1];
    }
}

function* take(it, top) {
    var iter = createFibGen();
    var result_;
    for (let i = 0; i < top; i++) {
        _result = iter.next().value;
        yield _result;
    }
}


// zwróć dokładnie 10 wartości z potencjalnie
// "nieskończonego" iteratora/generatora
for (let num of take(createFibGen(), 10)) {
    console.log(num);
}