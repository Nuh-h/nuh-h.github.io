//Index/home page

const introText = document.querySelector(".introText");
const intro = document.querySelector('.intro');

var sentence = "Hi ... \n My name is Nuh\n Welcome to my 'always a draft' website\n I love challenges \n from hiking and horse riding \n to coding for the world\n I also love learning about cultures via languages\n I look for similarities\n to appreciate the differences.\n Do you?"
var sentenceArray = sentence.split('\n');

var delay = ms => new Promise(res => setTimeout(res, ms));
var playIntro = async () => {
	var i=0;
	var k=sentenceArray.length;
	introText.innerHTML = "";
    for(var word of sentenceArray){
		i++;
        for(var letter of word){
        	introText.innerHTML+=letter;
            await delay(50);
        };

		await delay(600);

		if(i===k){
			break;
		}

		for(var letter of word){
			var decreasingText = introText.innerHTML.substring(0,introText.innerHTML.length-1);
            introText.innerHTML = decreasingText;
            await delay(40);
        };				
	}
	await delay(4000);
	playIntro();
};


function createElem(elem,tag,val){
	try{ 
		var e= document.createElement(elem);
		e.classList.add(tag);
		if(val) e.innerHTML = val;
		return e
	}
	catch(err){
		console.log(err)
	}
}

if(document.title==="Home" && document.readyState){playIntro();}
if(document.title==="Blog" && document.readyState){	postBlogs();}

function postBlogs(){
	fetch('https://nuh-h.github.io/blogposts.json').then(response => response.json()).then(jsonResponse => {
		jsonResponse.posts.forEach(item=>{
			const blogPosts = document.querySelector('.blog-posts');
			
			const post = createElem('div','post');
			const date = createElem('div','post-date',item.date);
			const title = createElem('p', 'post-title',item.title);
			const postHeader = createElem('div','post-header');

			const content = item.content.split('\n').join("<br/><br/>");
			const postContent = createElem('p','post-content',content);
			
			postHeader.appendChild(title);
			postHeader.appendChild(date);

			post.appendChild(postHeader)
			post.appendChild(postContent);
				
			blogPosts.appendChild(post);
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