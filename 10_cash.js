function cashFunction(fn){
    const cash = {}
    return function(n){
        if(cash[n]){
            console.log('with cash:', cash[n]);
            return cash[n];
        }
        let result = fn(n);
        console.log('with function:', result);
        cash[n] = result;
        return result;
    }

}
function factorial(n){
    let result = 1;
    while(n > 1){
        result = result * n;
        n-=1;
    }
    return result;
}

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(10);
cashFactorial(4);
cashFactorial(3);
cashFactorial(5);

//console.log(factorial(5));