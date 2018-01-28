//返回上一个页面
var return1 = document.querySelector('.return');
return1.onclick = function(){
	history.back();      //返回上一个页面
}

//验证码倒计时
var btn = document.querySelector('.button')
btn.onclick = function(){
	var num =15;
	console.log(this)  //确认获取的值
	var s = this;
	timer = setInterval(function(){
		s.value = num;
		num--;
		if(num<0){
			clearInterval(timer);    //当num为0时,终止计时
			s.value = '请重新获取验证码';
		}
	},1000)
}
//验证手机号
var pho = document.querySelector('.pho');
var sub = document.querySelector('.submit');

sub.onclick = function(){
	var phe =  /^1\d{10}$/ ;

	if (phe.test(pho.value)){
		alert('注册成功')
	}else{
		alert('输入不合法')
	}
}