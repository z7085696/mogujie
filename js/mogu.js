//轮播图----------------------------------------------------
var picAll =document.querySelectorAll('.pic');
var box = document.querySelector('.lunbo');
var ps = document.querySelectorAll('.dian');
var index =0;
var timer;
//遍历所有图片
hideDiv(0);
function hideDiv(a){
	for(var i=0; i<3; i++){
		picAll[i].style.display = 'none'; //隐藏所有div
		ps[i].style.background = '#fff';  //把所有P标签变成白色
	}
	picAll[a].style.display = 'block';  //显示当前div
	ps[a].style.background = 'red'      //让其中一个P变成红色
}
//控制div按时出现
time()
function time(){
	timer = setInterval(function(){
		index++
		if(index>=3){
			index = 0
		}
		hideDiv(index)
	},2000)
}
//鼠标放在div上停止计时
box.onmouseover = function(){
	clearInterval(time);
}
//鼠标离开div后启动计时
box.onmouseout = function(){
	time()
}
//点击P标签,出现对应的图片
for(var j=0; j<3; j++){
	ps[j].index = j;
	ps[j].onclick = function(){
		hideDiv(this.index);
	}
}
//设置当前时间-----------------------------------------------------
var htime = document.querySelector('.htime');
var sp1 = document.querySelectorAll('.sp1');
var fen = sp1[0];
var miao = sp1[1];
htime.innerHTML = time1()
fen.innerHTML = time2()
miao.innerHTML = time3()
setInterval(function(){
	htime.innerHTML = time1()
	fen.innerHTML =time2()
	miao.innerHTML = time3()
},1000)
function time1(){
	var n = new Date();
	var y = n.getFullYear();
	var mo = n.getMonth() + 1;
	var d = n.getDate();
	var h = n.getHours();
	var m = n.getMinutes();
	var s = n.getSeconds();

	var str =add0(h)+'点快抢・距结束';   //获取当前时间
	return str
}
	function time2(){
	var n = new Date();
	var m = n.getMinutes();

	var str =add0(59-m);     ////获取剩余分钟
	return str
}
	function time3(){
	var n = new Date();
	var s = n.getSeconds();

	var str =add0(60-s);     //获取剩余秒
	if(str==60){             //当剩余秒数为60时,显示00
		return '00'
	}else{
		return str         
	}
}
function add0(num){
	if (num>9) {
		return num
	}else{
		return '0'+num
	}
}

	