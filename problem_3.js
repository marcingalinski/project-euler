var findFactor = function(number) {
    var factor = number;
    var currentFactor = 2;
    
    while (currentFactor < factor) {
        if (factor % currentFactor === 0) {
            factor /= currentFactor;
            console.log("Fac: " + factor);
            console.log("Cur: " + currentFactor);
        } else currentFactor++;
    }
    
    return factor;
}

alert(findFactor(600851475143));