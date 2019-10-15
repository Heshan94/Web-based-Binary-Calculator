var str="";
var temp="";
var finalVal="";
var num1="";
var num2="";
var show="";
function binaryCal(e){
	var btn=e.target || e.srcElement;

	var val=document.getElementById(btn.id).innerHTML;
	str=str.concat(val);
	show=str;
	document.getElementById(res.id).innerHTML=show;
	
}

function action(e){
	var btn=e.target || e.srcElement;
	num1=parseInt(str, 2);
	temp=str;
	str="";
	var val=document.getElementById(btn.id).innerHTML;
	str=str.concat(val);
	show=show.concat(str);
	document.getElementById(res.id).innerHTML=show;
}

function clear(e){
	var btn=e.target || e.srcElement;
	str="";
	temp="";
	num1="";
	num2="";
	show="";
	finalVal="";
	document.getElementById(res.id).innerHTML=show;
}

function evaluate(e){
	var btn=e.target || e.srcElement;
	
	num2=parseInt(str.substring(1,str.length),2);
	let temp2=num1.toString().concat(str.substring(0,1)).concat(num2.toString());
	finalVal=intToBinary(Math.floor(eval(temp2)));
	document.getElementById(res.id).innerHTML=finalVal;
	
}

function intToBinary(no){
  var str="";

	if(no==0){return str="0";}
	else{
		while(no/2!=0){
			if(no%2==0){
				str=str.concat("0");
			}
			else{
				str=str.concat("1");
			}
		no=Math.floor(no/2);
		}
str=str.split("").reverse().join("");
return str;
	}
}

document.getElementById('btn0').onclick = binaryCal;
document.getElementById('btn1').onclick = binaryCal;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;
document.getElementById('btnClr').onclick = clear;
document.getElementById('btnEql').onclick = evaluate;