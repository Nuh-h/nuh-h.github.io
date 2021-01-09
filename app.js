var replayBtn = document.createElement('span');
replayBtn.addEventListener('click',()=>{play()});
replayBtn.classList.add("replayBtn");
var intervalToRunIntro;
var play = ()=> {
        var elem = document.querySelector(".introText");
		var intro = document.querySelector('.intro');
        elem.innerHTML="";
        if(intro.contains(replayBtn)){ intro.removeChild(replayBtn); }
        var sentence = "Hi \n My name is Nuh\n Welcome to my newly built website\n I love challenges \n from hiking and horse riding \n to coding for the world\n I also love learning about cultures \n I look for similarities\n to appreciate the differences.\n Do you?"
		var sentenceArray = sentence.split('\n');

        var delay = ms => new Promise(res => setTimeout(res, ms));
        var playIntro = async () => {
			var i=0;
			var k=sentenceArray.length;
            for(var word of sentenceArray){
                console.log(word);
				i++;
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
            };
            await delay(10000);
            //intro.prepend(replayBtn);
			play();
        };
        playIntro();
};
var blogResponse;
if(document.title==="Home" && document.readyState){play();}
if(document.title==="Blog" && document.readyState){	postBlogs();}
function postBlogs(){
	var blogPosts = document.querySelector('.blog-posts');
	blogPosts.innerHTML="";

	fetch('https://nuh-h.github.io/blogposts.json').then(response => response.json()).then(jsonResponse => {
		jsonResponse.posts.forEach(item=>{
			var blogPosts = document.querySelector('.blog-posts');
			var nPost = document.createElement('div');
			nPost.classList.add('post');
				
			var nDate = document.createElement('div');
			nDate.classList.add('post-date');
			nDate.innerHTML=item.date;
				
			var nPostContainer = document.createElement('div');
			nPostContainer.classList.add('post-container');
				
			var nTitle = document.createElement('p');
			nTitle.classList.add('post-title');
			nTitle.innerHTML=item.title;
				
			var nContent = document.createElement('p');
			nContent.classList.add('post-content');
			var paragraphs = item.content.split('\n');
			var content="";
			var i=0;
			for(var paragraph of paragraphs){
				if(i<paragraphs.length-1){content+=paragraph+'<br/><br/>'}
				else{content+=paragraph};
				i++;
			}
			nContent.innerHTML=content.trim();
				
			nPostContainer.appendChild(nTitle);
			nPostContainer.appendChild(nContent);
				
			nPost.appendChild(nDate);
			nPost.appendChild(nPostContainer);
				
			blogPosts.appendChild(nPost);
		})
	})
}
var navlinks = document.querySelector('.nav-links');
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', drop);
function drop(){
	navlinks.classList.toggle('active');
	dropdown.classList.toggle('active');
	navlinks.classList.toggle('inactive');
	document.body.classList.toggle("hidden");
}