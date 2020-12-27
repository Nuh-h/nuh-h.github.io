var elem = document.getElementsByTag("main")[0].firstElementChild;   
const sentence = "Hi\nMy name is Nuh\nI like to code\nto help make this world a better, fairer place\nI have personal experience\nthat drives my professional passion\nI hope to become an excellent engineer\nthat can lead teams\nto build innovative solutions\nthat make a difference.\nThank you for your patience,\nnice to meet you.";
const sentenceArray = sentence.split('\n');
//console.log(sentenceArray);
const delay = ms => new Promise(res => setTimeout(res, ms));
const playIntro = async () => {
  for(var word of sentenceArray){
      elem.innerHTML="";
      await delay(500);
      console.log(word);
      for(var letter of word){
        elem.innerHTML+=letter;
        await delay(200);
      }
  }
};
setInterval(playIntro(), 60000);
