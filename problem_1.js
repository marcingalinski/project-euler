var calculateSum = function(multiplier1, multiplier2, range) {
    var sum = 0;
    
    for (i = 1; i < range; i++) {
        if (i % multiplier1 === 0 || i % multiplier2 === 0) sum += i;
    }
    
    return sum;
}

alert(calculateSum(3, 5, 1000));