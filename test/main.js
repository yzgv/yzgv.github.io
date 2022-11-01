var timer;
function start() {
	var num = Math.floor(Math.random() * 50 + 1);
	document.getElementById("input").value = num;
	timer = setTimeout(start, 250);
}
function end() {
	clearTimeout(timer);
}
