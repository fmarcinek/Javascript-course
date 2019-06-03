var Foo = function() {}
Foo.prototype.Bar = function(n) {
    function Qux(n) {
        var res = 1;
        for (let i = 1; i <= n; i++) {
            res *= i;            
        }
        return res;
    }
    return Qux(n);
}(5)

var n = 5;
var sampleObject = new Foo();
console.log(sampleObject.Bar);
console.log(sampleObject.Bar.Qux);