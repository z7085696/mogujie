//点击span标签出现对应的商品页面----------------------------------------------------
var shoes =document.querySelectorAll('.fenlei2');
var sp = document.querySelectorAll('.fenlei1');
var index =0;
console.log(sp)
//遍历所有商品页面
hideDiv(0);
function hideDiv(a){
	for(var i=0; i<4; i++){
		shoes[i].style.display = 'none'; //隐藏所有div
		sp[i].style.color ='#666666';  //给所有span标签验颜色
		sp[i].style.borderBottom = 'none' ; //隐藏所有span标签下边线
}
	
	shoes[a].style.display = 'block';  //显示当前div
	sp[a].style.borderBottom = '2.1px solid #FF5777' ;   //让其中一个span出现红色下边线
	sp[a].style.color ='#FF5777';                   //让其中一个span变成红色
}
//点击span标签,出现对应的图片
for(var j=0; j<4; j++){
	sp[j].index = j;
	sp[j].onclick = function(){
		hideDiv(this.index);
	}
}


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
	sec.style='top:20%;display:block';
}
nav3.onclick = function(){
	nav1.style.display='block';
	cover.style.display='none';
	nav3.style.display='none';
	sec.style='display:none';
}