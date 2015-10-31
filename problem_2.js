var calculateSum = function(range) {
    var Sum = 0;
    var cache = 0;
    
    for (i = 1; i <= range; i += cache) {
        console.log(i);
        cache = i - cache;
        console.log("prev " + cache);
        
        if (i % 2 === 0) Sum += i;
        
    }
    
    return Sum;
}

alert(calculateSum(4000000));