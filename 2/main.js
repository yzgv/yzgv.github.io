var msg = document.querySelector('#msg');
var send = document.querySelector('#send');
var copy = document.querySelector('#copy');
var recall = document.querySelector('#recall');
var del = document.querySelector('#delete');
var msgs = document.querySelector('#msgs');
var cpys = document.querySelectorAll('.cpy');
var dels = document.querySelectorAll('.del');
send.onclick = function() {
	if(msg.value == '') {
		alert('输入为空');
	} else {
		var li = document.createElement('li');
		var span = document.createElement('span');
		var cpy = document.createElement('a');
		var del = document.createElement('a');
		span.innerHTML = msg.value;
		cpy.setAttribute('href', 'javascript:;');
		cpy.setAttribute('class', 'cpy');
		cpy.innerText = '复制';
		del.setAttribute('href', 'javascript:;');
		del.setAttribute('class', 'del');
		del.innerText = '删除';
		li.appendChild(del);
		li.appendChild(cpy);
		li.appendChild(span);
		if(msgs.children.length <= 1) {
			msgs.insertBefore(li, msgs.children[0]);
		} else {
			msgs.insertBefore(li, msgs.children[msgs.children.length - 1]);
		}
	}
}
recall.onclick = function() {
	if(msgs.children.length <= 0) {
		alert('消息为空');
	} else {
		msgs.removeChild(msgs.children[msgs.children.length - 1]);
	}
}
for(var i = 0; i < dels.length; i++) {
	dels[i].onclick = function() {
		msgs.removeChild(this.parentNode);
	}
}
