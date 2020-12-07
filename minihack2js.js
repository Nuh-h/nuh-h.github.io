//const blankList = document.querySelector('main');
//console.log(blankList)

var mayn = document.body.firstElementChild;
var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;width:88%;height:60%;opacity:0.3;background:#000; color:white; font-size:25px;';
mayn.appendChild(elemDiv);

var listWrap = mayn.lastElementChild;
listWrap.innerHTML += "<p>Hello jcoders!</p>";
listWrap.innerHTML+='<button onclick="myFunction()">Press!</button>';
function myFunction(){
	alert("HELLO, you got here nicely!");
}
function dropdown(value){
	if(value==1){ var first = document.querySelector('.first');}
	else if(value==2){ var first = document.querySelector('.second'); }
	else{ var first = document.querySelector('.third');}
	first.classList.toggle('disappear');
}
var instructions = document.createElement('p');
instructions.innerHTML = "INSTRUCTIONS: START GAME to display the next word in morse, and click ANSWER if you are ready to answer";
instructions.style='font-size:18px';
elemDiv.appendChild(instructions);
var dot=document.createElement('h2');
dot.innerHTML='Morse here';
dot.style='font-size:45px;color:white;'
elemDiv.appendChild(dot);

var btn = document.createElement('button');
btn.innerHTML='START GAME';
var answerBtn = document.createElement('button');
answerBtn.innerHTML='ANSWER';
var answerField = document.createElement('INPUT');
//answerField.
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
var words = 
            {
                'DAVID': '-.. .- ...- .. -..',
                'BORIS': '-... --- .-. .. ...',
                'GAVIN': '--. .- ...- .. -.',
                'NUH': '-. ..- ....',
                'MILES': '-- .. .-.. . ...',
            };
//var random = new Random();
var level = 1;
//var dt = elemDiv.getElementsByTagName('h2')[0];
//Console.WriteLine("Please enter a word ... or type EXIT to leave the program");
var userWord = '';
var word = '';
btn.addEventListener("click", function(){

	var result = parseInt(getRndInteger(0,Object.keys(words).length));//random.Next(0, words.Count());
	word = Object.keys(words)[result];
    var code = (words[word]).toString();
	//StrToBlinkConverter(code, level);
	var dt = elemDiv.getElementsByTagName('h2')[0];

	/* for(letter of code)
	{	
		dt.innerHTML=letter;
		console.log(letter, dt.innerHTML);
		sleep(200);
	} */
	dt.innerHTML = code;
	sleep(100);
	console.log(dt.innerHTML);
	//dt.innerHTML='';
	console.log(word);
	/* userWord = prompt('Please enter your guess:');
	if(userWord==word)
	{
		alert("Congrats! You got the next word!");
        level++;
    //}else if (userWord==="EXIT"){
	//	alert("Exiting program...");
	}
    else
    {
		alert("That was wrong. Keep practising :)");
	} */
});
answerBtn.addEventListener("click",function(){
	if(word==''){
		alert("Please start game first");
		
	}else{
		userWord = prompt('Please enter your guess:');
		if (userWord == null){
			alert("you could've put in a little bit more effort.... well, try again");
		}
		else if(userWord==word)
		{
			alert("Congrats! You got the next word!");
			level++;
		//}else if (userWord==="EXIT"){
		//	alert("Exiting program...");
		}
		else
		{
			alert("That was wrong. Keep practising :)");
		}
	}
});
elemDiv.appendChild(btn);
elemDiv.appendChild(answerBtn);
