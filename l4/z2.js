var Tree = function(left, right, value) {
    this.left = left;
    this.right = right;
    this.value = value;
}

function createEmptyLeaves(n) {
    a = [];
    for (let i = 0; i < n; i++) {
        a.push(new Tree(null,null,i));
    }
    return a;
}

function concatenate(a) {
    if (a.length == 1) {
        return a;
    }

    res = [];
    var value;
    for (let i = 0; i < a.length/2; i++) {
        i *= 2;
        value = a[i].value + a[i+1].value;
        res.push(new Tree(a[i],a[i+1],value));
    }
    return concatenate(res);
}

function createTree(n) {
    return concatenate(createEmptyLeaves(n)); 
}

////////////////////////////////////////////////////////////////
// ZAD 2.

function* genValues(tree) {
    if (tree.left != null) {
        console.log(tree.left);
        genValues(tree.left);
    }
    yield tree.value;
    if (tree.right != null) {
        genValues(tree.right);
    }
}

function* generator(root) {
    var iter = genValues(root);
    var result_;
    while (true) {
        _result = iter.next().value;
        yield _result;
    }
}

console.log(genValues);
var root = createTree(4);

// var iter = {
//     [Symbol.iterator] : genValues
// }
// console.log(iter);
// Tree.prototype.iter = function*() {
//     for (var i of genValues(this)) {
//         yield i;
//     }
// }

// var root = new Tree(new Tree(null,null,3), null, 2);
// var root = createTree(4).iter;
// console.log(root);

// enumeracja wartości z węzłów
for (var e of generator(root)){
    console.log(e);
}