var wow = document.querySelector('.window');
var msg = document.querySelector('.msg');
var send = document.querySelector('.send');
var copy = document.querySelector('.copy');
var recall = document.querySelector('.recall');
var msgs = document.querySelector('.msgs');
var cpys = document.getElementsByClassName('cpy');
var rcls = document.getElementsByClassName('rcl');

wow.style.height = (document.body.clientHeight - 48 - 92) + 'px';

send.onclick = function() {
	if(msg.value == '') {
		alert('输入为空');
	} else {
		var li = document.createElement('li');
		var txt = document.createElement('span');
		var cpy = document.createElement('span');
		var rcl = document.createElement('span');
		txt.innerHTML = msg.value;
		txt.setAttribute('class', 'txt');
		cpy.setAttribute('class', 'cpy');
		rcl.setAttribute('class', 'rcl');
		li.appendChild(rcl);
		li.appendChild(cpy);
		li.appendChild(txt);
		if(msgs.children.length <= 0) {
			msgs.insertBefore(li, msgs.children[0]);
		} else {
			msgs.insertBefore(li, msgs.children[msgs.children.length]);
		}
	}
}

recall.onclick = function() {
	rcls = document.getElementsByClassName('rcl');
	for(var i = 0; i < rcls.length; i++) {
		rcls[i].classList.add("display");
	}
	if(msgs.children.length <= 0) {
		alert('消息为空');
	} else {
		msgs.removeChild(msgs.children[msgs.children.length - 1]);
	}
}
