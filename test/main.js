var timer;
function start() {
	var num = Math.floor(Math.random() * 50 + 1);
	document.getElementById("input").value = num;
	timer = setTimeout(start, 250);
}
function end() {
	clearTimeout(timer);
}

var date = new Date(),
		week = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"];
document.write(date.toLocaleString() + week[date.getDay()] + "<br/>");
