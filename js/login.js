//返回上一个页面
var return1 = document.querySelector('.return');
return1.onclick = function(){
	history.back();      //返回上一个页面
}

var log = document.querySelector('.log');
log.onclick = function(){
	alert('用户不存在')
}