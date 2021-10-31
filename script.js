var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
// display.textContent=0;
var operand1=0;
var operand2=null;
var operator=null;

function isOperator(value)
{
    return (value=="+" || value=="-" || value == "/" || value == "*");
}

function fun()
{
    var value=this.getAttribute('data-value');
    var text=display.textContent.trim(); // Trime Will Remove the beggining and end spaces in string
    if(isOperator(value))
    {
        operator=value;
        operand1=parseFloat(text);
        display.textContent="";
    }
    else if(value=="ac")
    display.textContent="";
    else if(value=="sign"){
        operand1=parseFloat(text);
        operand1*=-1;
        display.textContent=operand1;
    }    
    else if(value==".")
    {
        if(!text.includes('.')){
            if(text.length)
            display.textContent=text+'.';
            else
            display.textContent="0"+'.';
        }
    }
    else if(value=="%")
    {
        operand1=parseFloat(text);
        operand1/=100;
        display.textContent=operand1;
    }
    else if(value=="="){
        operand2=parseFloat(text);
        var result=eval(operand1+' '+operator+' '+operand2);
        if(result)
        {
            display.textContent=result;
            operand1=result;
            operand2=null;
            operator=null;
        }
    }
    else
    {
        display.textContent+=value; // Means adding digit
    }
}

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',fun);
}
