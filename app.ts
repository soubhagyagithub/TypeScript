const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const btnElement = document.querySelector("button")!;

const numResult: number[] = [];
const stringResult: string[] = [];

type NumOrString = number | string;
type Result = {val: number; timestamp: Date};

interface ResultObj{
    val: number;
    timestamp: Date;
}
function add(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1+ ' '+ num2
    }
    return +num1 + +num2;
}

function printResult(resultObj: Result){
    console.log(resultObj.val);
    
}


    btnElement.addEventListener('click',()=>{
        const num1 = num1Element.value;
        const num2 = num2Element.value;
        const result  = add(+num1,+num2);
        numResult.push(result as number);
        const resultString  = add(num1,num2);
        stringResult.push(resultString as string);
        printResult({val: result as number, timestamp: new Date()});
        console.log(numResult, stringResult);
        
    
    })


