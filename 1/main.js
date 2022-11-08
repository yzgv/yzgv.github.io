var imgs = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png"], timer;
//var i = 0;
function change() {
	/*
	document.getElementById("img").src = imgs[i++];
	if (i >= 5) {
		i = 0;
	}
	*/
 document.getElementById("img").src = imgs[Math.floor(Math.random() * imgs.length)];
}
function start() {
	if (!timer) {
		timer = setInterval(change, 500);
	}
}
function end() {
	clearInterval(timer);
	timer = null;
}
