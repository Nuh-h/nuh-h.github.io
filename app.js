// var mayn = document.body.firstElementChild;
// var elemDiv = document.createElement('div');
// elemDiv.style.cssText = 'position:absolute;width:88%;height:60%;opacity:0.3;background:#000; color:white; font-size:25px;';
// mayn.appendChild(elemDiv);

// var listWrap = mayn.lastElementChild;
// listWrap.innerHTML += "<p>Hello jcoders!</p>";
// listWrap.innerHTML+='<button onclick="myFunction()">Press!</button>';
// function myFunction(){
// 	alert("HELLO, you got here nicely!");
// }
function dropdown(value){
	if(value==1){ var first = document.querySelector('.first');}
	else if(value==2){ var first = document.querySelector('.second'); }
	else{ var first = document.querySelector('.third');}
	first.classList.toggle('disappear');
}