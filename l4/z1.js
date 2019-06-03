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

console.log(createTree(4));