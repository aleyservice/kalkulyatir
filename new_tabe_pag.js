const display = document.querySelector('.kalkulator-input'); 
const keys = document.querySelector('.calculator-key');

let DisplayValue = '0';
let firstValue = null;
let operator = null;
let waitingvalue = false;


UptadedDisplay();
function UptadedDisplay(){
    display.value = DisplayValue;
}
keys.addEventListener('click',function(e){
    const element = e.target;
    if (!element.matches('button')) return;
    

    if(element.classList.contains('operator')){
        //console.log('operator',element.value);
        handleOperator(element.value);
        UptadedDisplay(); 
        return;
    }
    if(element.classList.contains('decimal')){
        //console.log('decimal',element.value);
        inputDecimal(element.value);
        UptadedDisplay();
        return;
    }
    if(element.classList.contains('clear')){
        //console.log('clear',element.value);
        clear();
        UptadedDisplay();
        return;
    }
    //console.log('number',element.value)
    inputNumber(element.value)
    UptadedDisplay();

});

function handleOperator(nextoperator){
    if(operator && waitingvalue){
        operator = nextoperator
        return;
    }
    const value = parseFloat(DisplayValue)
    if(firstValue ===  null){
        firstValue = value
    }else if(operator){
        const result = calculate(firstValue,value,operator)

        DisplayValue = `${parseFloat(result.toFixed(7))}`
        firstValue = result;
    }

    waitingvalue = true;
    operator = nextoperator
    console.log(DisplayValue,firstValue,operator,waitingvalue)
}
function calculate(first,second,operator){
    if(operator==='+'){
       return first + second;
    }else if(operator==='-'){
        return first - second
    }else if(operator==='*'){
        return first * second;
    }else if(operator==='/'){
        return first / second;
    }
    return second;
}
function inputNumber(num){
    
    if(waitingvalue){
        DisplayValue = num;
        waitingvalue = false;
    }
    else{
        DisplayValue = DisplayValue === '0'? num: DisplayValue + num;
    }
    console.log(DisplayValue,firstValue,operator,waitingvalue)

}
function inputDecimal(operator){

    if(!DisplayValue.includes(".")){
        DisplayValue += "."
    }
    console.log(DisplayValue,firstValue,operator,waitingvalue)

    
}
function clear(){
    DisplayValue = "0"
    console.log(DisplayValue,firstValue,operator,waitingvalue)
}