let display = document.getElementById("display")
let numArray =[]
let secondArray=[]
let firstNumber
let secondNumber
let operation
let step=0
let result=0
let prevalue=null


function appendToDisplay(num){
    console.log(num)
    if(step===0 || step===1){
        numArray.push(num)
        step=1
        firstNumber =Number(numArray.join('')) 
        display.value=firstNumber
    }else if(step===2){
        secondArray.push(num)
        secondNumber = Number(secondArray.join(''))
        display.value =secondNumber
    }
}
function getOperator(op){
    console.log(op)
step=2
operation=op
}
function clearDisplay(){
display.value =''
firstNumber=null
secondNumber=null
step=0
operation=null
result=0
numArray=[]
secondArray=[]
}

const calculateEquals = () =>{
    if(operation==='+'){
        result=firstNumber+secondNumber;
        display.value=result;
    }else if(operation==='-'){
        result=firstNumber-secondNumber;
        display.value=result;
    }else if(operation==='*'){
        result=firstNumber*secondNumber;
        display.value=result;
    }else if(operation==='/'){
        result=firstNumber/secondNumber;
        display.value=result;
    }
   
} 
