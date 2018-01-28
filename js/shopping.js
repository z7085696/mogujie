//返回上一个页面
var return1 = document.querySelector('.return');
return1.onclick = function(){
	history.back();      //返回上一个页面
}

//点击DIV变成红色----------------------------------
var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var p3 = document.querySelector('.p3');
var p4 = document.querySelector('.p4');
var p5 = document.querySelector('.p5');
var p6 = document.querySelector('.p6');
var sp1 = document.querySelector('.sp1');
var money = document.querySelector('.money');
p1.onclick = function(){
	p4.style.display = 'block';
	p5.style.display = 'block';
	p6.style.display = 'block';
	p1.style.display = 'none';
	p2.style.display = 'none';
	p3.style.display = 'none';
	sp1.innerHTML = '全选（1）';
	money.innerHTML = '39.9';
}
p2.onclick = function(){
	p4.style.display = 'block';
	p5.style.display = 'block';
	p6.style.display = 'block';
	p1.style.display = 'none';
	p2.style.display = 'none';
	p3.style.display = 'none';
	sp1.innerHTML = '全选（1）';
	money.innerHTML = '39.9';
}
p3.onclick = function(){
	p4.style.display = 'block';
	p5.style.display = 'block';
	p6.style.display = 'block';
	p1.style.display = 'none';
	p2.style.display = 'none';
	p3.style.display = 'none';
	sp1.innerHTML = '全选（1）';
	money.innerHTML = '39.9';
}
p4.onclick = function(){
	p4.style.display = 'none';
	p5.style.display = 'none';
	p6.style.display = 'none';
	p1.style.display = 'block';
	p2.style.display = 'block';
	p3.style.display = 'block';
	sp1.innerHTML = '全选（0）';
	money.innerHTML = '0.00';
}
p5.onclick = function(){
	p4.style.display = 'none';
	p5.style.display = 'none';
	p6.style.display = 'none';
	p1.style.display = 'block';
	p2.style.display = 'block';
	p3.style.display = 'block';
	sp1.innerHTML = '全选（0）';
	money.innerHTML = '0.00';
}
p6.onclick = function(){
	p4.style.display = 'none';
	p5.style.display = 'none';
	p6.style.display = 'none';
	p1.style.display = 'block';
	p2.style.display = 'block';
	p3.style.display = 'block';
	sp1.innerHTML = '全选（0）';
	money.innerHTML = '0.00';
}