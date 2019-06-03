var sampleObject = {
    sampleField: 42,
    sampleMethod: function (n1,n2) {
        return n1+n2;
    },
    set sampleSetter(n) {
        sampleObject.sampleField = n;
    },
    get sampleGetter() {
        sampleObject.sampleField = 34;
        return sampleObject.sampleField;
    }
};

sampleObject.secondSampleField = "42";
// sampleObject["secondSampleField"] = "42";

sampleObject.sampleMethod = function(n1,n2) {
    return n1 - n2;
};

console.log(sampleObject.sampleMethod(4,5));

Object.defineProperty(sampleObject, 'secondSampleGetter', {
    get: function() {
        return sampleObject.secondSampleField;
    }
});

Object.defineProperty(sampleObject, 'secondSampleSetter', {
    get: function(n) {
        sampleObject.secondSampleField = n;
    }
});