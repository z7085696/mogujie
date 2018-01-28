//服务说明------------------------------------------
var fbottom = document.querySelector('.fbottom');
var cover = document.querySelector('.cover');
var exp = document.querySelector('.explain');
var expc = document.querySelector('.expc');

//点击服务说明,出现遮罩层和内容框
fbottom.onclick = function(){
	cover.style.display = 'block';
	exp.style.display = 'block';
}
//点击X,遮罩层和内容框消失
expc.onclick = function(){
	cover.style.display = 'none';
	exp.style.display = 'none';
}

//选择颜色 尺寸-------------------------------
var stl = document.querySelector('.style');
var sku = document.querySelector('.sku');
var goodsc = document.querySelector('.goods-cont i');
var prop = document.querySelector('.prop li')

//点击颜色 尺寸,出现遮罩层和内容框
stl.onclick = function(){
	cover.style.display = 'block';
	sku.style.display = 'block';
}
//点击X,遮罩层和内容框消失
goodsc.onclick = function(){
	cover.style.display = 'none';
	sku.style.display = 'none';
}
//点击大小和颜色,变色
prop.onclick = function(){
	prop.style='border: 1px solid #EF5C79;color: #EF5C79;'
}

//nav-------------------------------------------
var nav1 = document.querySelector('.nav1');
var nav3 = document.querySelector('.nav3');
var cover = document.querySelector('.cover');
var sec = document.querySelector('.sec')

nav1.onclick = function(){
	console.log(nav1);
	nav1.style.display='none';
	cover.style.display='block';
	nav3.style.display='block';
	sec.style='top:20%;display:block';
}
nav3.onclick = function(){
	nav1.style.display='block';
	cover.style.display='none';
	nav3.style.display='none';
	sec.style='display:none';
}
