var replayBtn = document.createElement('span');
replayBtn.addEventListener('click',()=>{play()});
replayBtn.classList.add("replayBtn");
var intervalToRunIntro;
var play = ()=> {
        var elem = document.querySelector(".introText");
		var intro = document.querySelector('.intro');
        elem.innerHTML="";
        if(intro.contains(replayBtn)){ intro.removeChild(replayBtn); }
        //var sentence = "Hi,\ \nMy name is Nuh.\nI like to code and to learn,\nto help others and make a difference.\nI am aiming to become an excellent engineer \nthat can also lead teams to build innovative \nand impactful solutions.\n This is my newly built website,\n you are welcome to have an early browse.\n Thank you for your patience,\n and nice to meet you.";
        var sentence = "Hi \n My name is Nuh\n Welcome to my newly built website\n I love challenges \n from hiking and horse riding \n to coding for the world\n I also love learning about cultures \n I look for similarities\n to appreciate the differences.\n Do you?"
		var sentenceArray = sentence.split('\n');
        //console.log(sentenceArray);
        var delay = ms => new Promise(res => setTimeout(res, ms));
        var playIntro = async () => {
			var i=0;
			var k=sentenceArray.length;
            for(var word of sentenceArray){
                console.log(word);
				i++;
				//var line = document.createElement('p');
				//intro.appendChild(line);
                for(var letter of word){
                    elem.innerHTML+=letter;
                    await delay(80);
                };
				await delay(500);
				if(i==0){await delay(1000);}
				if(i===k){break;}
				for(var letter of word){
                    elem.innerHTML=elem.innerHTML.substring(0,elem.innerHTML.length-1);
                    await delay(50);
                };
                //elem.innerHTML+="<br>";
				
            };
            await delay(10000);
            //intro.prepend(replayBtn);
			play();
        };
        playIntro();
};
if(document.title==="Home" && document.readyState){play();}

var navlinks = document.querySelector('.nav-links');
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', drop);
function drop(){
	navlinks.classList.toggle('active');
	dropdown.classList.toggle('active');
	navlinks.classList.toggle('inactive');
	document.body.classList.toggle("hidden");
}