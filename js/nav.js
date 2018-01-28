//nav
var nav1 = document.querySelector('.nav1');
var nav3 = document.querySelector('.nav3');
var cover = document.querySelector('.cover');
var sec = document.querySelector('.sec')

nav1.onclick = function(){
	console.log(nav1);
	nav1.style.display='none';
	cover.style.display='block';
	nav3.style.display='block';
	sec.style='top:0;display:block';
}
nav3.onclick = function(){
	nav1.style.display='block';
	cover.style.display='none';
	nav3.style.display='none';
	sec.style='display:none';
}
