var play = ()=> {
    var elem = document.getElementsByTagName("main")[0].firstElementChild;   
    var sentence = "Hi\nMy name is Nuh\nI like to code\nto help make this world a better, fairer place\nI have personal experience\nthat drives my professional passion\nI hope to become an excellent engineer\nthat can lead teams\nto build innovative solutions\nthat make a difference.\nThank you for your patience,\nnice to meet you.";
    var sentenceArray = sentence.split('\n');
    //console.log(sentenceArray);
    var delay = ms => new Promise(res => setTimeout(res, ms));
    var playIntro = async () => {
        for(var word of sentenceArray){
            elem.innerHTML="";
            await delay(500);
            console.log(word);
            for(var letter of word){
                elem.innerHTML+=letter;
                await delay(200);
            };
        };
    };
    playIntro();
};
setInterval(play(),70000)//every 1 minute and 10 seconds
