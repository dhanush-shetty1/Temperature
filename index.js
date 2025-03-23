const text=document.getElementById('num');
const faren=document.getElementById('tofaren');
const cel=document.getElementById('tocel');
const result=document.getElementById('p');
let temp;

function convert(){
    if(faren.checked){
        temp=Number(text.value);
        temp=temp*9/5+32;
        result.textContent=(`${temp}° F`);

    }
    else if(cel.checked){
        temp=Number(text.value);
        temp=temp-32*5/9;
        result.textContent=(`${temp.toFixed(1)}° C`);
        
    }
    else{
        result.textContent='Select a unit.';

    }

}