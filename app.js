var replayBtn = document.createElement('span');
replayBtn.addEventListener('click',()=>{play()});
replayBtn.classList.add("replayBtn");
var play = ()=> {
        var elem = document.getElementsByTagName("p")[0];         var main = document.getElementsByTagName('main')[0];
        elem.innerHTML="";
        if(main.contains(replayBtn)){ main.removeChild(replayBtn); }
        var sentence = "Hi....\nMy name is Nuh\nI like to code\nto help make this world a better, fairer place\nI have personal experience\nthat drives my professional passion\nI hope to become an excellent engineer\nthat can lead teams\nto build innovative solutions\nthat make a difference.\nThank you for your patience,\nnice to meet you.";
        var sentenceArray = sentence.split('\n');
        //console.log(sentenceArray);
        var delay = ms => new Promise(res => setTimeout(res, ms));
        var playIntro = async () => {
            for(var word of sentenceArray){
                console.log(word);
                for(var letter of word){
                    elem.innerHTML+=letter;
                    await delay(100);
                };
                elem.innerHTML+="<br>";
            };
            await delay(100);
            main.prepend(replayBtn);
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