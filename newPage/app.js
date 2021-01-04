var replayBtn = document.createElement('span');
replayBtn.addEventListener('click',()=>{play()});
replayBtn.classList.add("replayBtn");
var play = ()=> {
        var elem = document.querySelector(".introText");
		var intro = document.querySelector('.intro');
        elem.innerHTML="";
        if(intro.contains(replayBtn)){ intro.removeChild(replayBtn); }
        var sentence = "Hi,\ \nMy name is Nuh.\nI like to code and to learn,\nto help others and make a difference.\nI am aiming to become an excellent engineer that can also lead teams to build innovative and impactful solutions.\n This is my newly built website, you are welcome to have an early browse.\n Thank you for your patience,\n and nice to meet you.";
        var sentenceArray = sentence.split('\n');
        //console.log(sentenceArray);
        var delay = ms => new Promise(res => setTimeout(res, ms));
        var playIntro = async () => {
            for(var word of sentenceArray){
                console.log(word);
                for(var letter of word){
                    elem.innerHTML+=letter;
                    await delay(80);
                };
                elem.innerHTML+="<br>";
            };
            await delay(80);
            intro.prepend(replayBtn);
        };
        playIntro();
};
if(document.title==="Home"){play();} 

var navlinks = document.querySelector('.nav-links');
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', drop);
function drop(){
	navlinks.classList.toggle('active');
	dropdown.classList.toggle('active');
	navlinks.classList.toggle('inactive');
	document.body.classList.toggle("hidden");
}