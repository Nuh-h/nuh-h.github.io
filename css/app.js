const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

if(mobileMenu){
	console.log(mobileMenu.classList);
	mobileMenu.addEventListener("click", () => {
	menuItems.classList.toggle("open");
	menuItem.forEach(link => {link.classList.toggle("fade");});
	});
}else{
	console.log("mobileMenu is empty");
	console.log(menuItems.classList);
};
const gitlink = document.querySelector('a.git-link');
gitlink.addEventListener("click", ()=> {alert("Link broken, will be fixed soon");});