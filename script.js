function calculate(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var op = document.getElementById('operation').value;
    var result;
    if(op==='+'){
        result=num1+num2;
    } else if(op==='-'){
        result=num1-num2;
    } else if(op==='*'){
        result=num1*num2;
    } else{
        if(num1>num2 && num2 !=0){
            result= num1/num2;
        } else{
            result="Operation Faild";
        }
    }
    document.getElementById('result').innerHTML="Result: "+result;
}