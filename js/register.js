

$(function(){
	
	//选择手机还是邮箱注册
	var box = $(".box");
	var line = $(".line");
	$(".top-first").click(function(){
		box.animate({left:0},500);
		line.animate( {left:0},500);
	})
	$(".eail").click(function(){
		box.animate({left:-516},500);	
		line.animate({left:255},500);	
		
	})
	
	//请登录
	$(".login i").click(function(){
		location.href = "login.html";
	})
	
	//验证码
	$(".disCode a").click(function(){
		
		var number = parseInt(Math.random()*90000)+10000;
		$(this).parent().find("span").html(number);
		
	})
	
	//进入编辑状态，边框改成蓝色
	var allInput = $("input");
	allInput.focus(function(){
		$(this).parent().find("strong").empty().removeClass("correct").removeClass("error");
		if($(this).attr("name") == "yy"){
			$(this).parents("li").addClass("focus");
		}else if($(this).val()=="获取校验码"){
			
		}else{
			$(this).parent().removeClass("errorBox").addClass("focus");
		}
		
	})
	
	var isOk11 = false;
	var isOk12 = false;
	var isOk2 = false;
	var isOk31 = false;
	var isOk32 = false;
	var isOk41 = false;
	var isOk42 = false;
	var isOk5 = false;
	
	
	//失去焦点，先判断正则，再对应改变样式
	//手机号注册
	$(".mphone-number input").blur(function(){
		$(this).parent().removeClass("focus");
		
		if($(this).val().length == 0){
			$(this).parent().addClass("errorBox");
			$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入手机号");
			isOk11 = false;
			
		}else{
			var reg = /^((13[0-9])|(14[57])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
			
			if(reg.test($(this).val())){
				$(this).parent().find("strong").addClass("correct");
				isOk11 = true;
			}else{
				$(this).parent().addClass("errorBox");
				$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入正确手机号");
				isOk11 = false;
				
			}
		}
	})
	
	$(".ephoneNum input").blur(function(){
		$(this).parent().removeClass("focus");
		
		if($(this).val().length == 0){
			$(this).parent().addClass("errorBox");
			$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入手机号");
			isOk5 = false;
			
		}else{
			var reg = /^((13[0-9])|(14[57])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
			
			if(reg.test($(this).val())){
				$(this).parent().find("strong").addClass("correct");
				isOk5 = true;
			}else{
				$(this).parent().addClass("errorBox");
				$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入正确手机号");
				isOk5 = false;
				
			}
		}
	})		
	
	
	

	//邮箱注册
	$(".email input").blur(function(){
		$(this).parent().removeClass("focus");
		if($(this).val().length == 0){
			$(this).parent().addClass("errorBox");
			$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入邮箱");
			isOk12 = false;
			
		}else{
			var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
			
			if(reg.test($(this).val())){
				$(this).parent().find("strong").addClass("correct");
				isOk12 = true;
			}else{
				$(this).parent().addClass("errorBox");
				$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入正确邮箱格式");
				isOk12 = false;
				
			}
		}
	})
	
	//设置密码
	$(".msetPassWord input,.esetPassword input").blur(function(){
		$(this).parent().removeClass("focus");
		
		if($(this).val().length == 0){
			$(this).parent().addClass("errorBox");
			$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入密码");
			isOk2 = false;
			
		}else{
			var reg = /^.{6,20}$/;
			
			if(reg.test($(this).val())){
				$(this).parent().find("strong").addClass("correct");
				isOk2 = true;
				
			}else{
				$(this).parent().addClass("errorBox");
				$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入正确密码格式");
				isOk2 = false;
				
			}
		}
	})
	
	//重复输入密码
	//手机号注册的重置密码
	$(".mresetPassWord input").blur(function(){
		$(this).parent().removeClass("focus");
		
		
		if($(this).val().length == 0 && $(".msetPassWord input").val().length == 0){
			$(this).parent().addClass("errorBox");
			$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入相同的密码");
			isOk31 = false;
			
		}else{
			if($(this).val() == $(".msetPassWord input").val()){
				$(this).parent().find("strong").addClass("correct");
				isOk31 = true;
			}else{
				$(this).parent().addClass("errorBox");
				$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入相同的密码");
				isOk31 = false;
				
			}
		}
	})
	
	//邮箱注册的重置密码
	$(".eresetPassword input").blur(function(){
		$(this).parent().removeClass("focus");
		
		if($(this).val().length == 0 && $(".esetPassword input").val().length == 0){
			$(this).parent().addClass("errorBox");
			$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入相同的密码");
			isOk32 = false;
		
		}else{
			if($(this).val() == $(".esetPassword input").val()){
				$(this).parent().find("strong").addClass("correct");
				isOk32 = true;
			}else{
				$(this).parent().addClass("errorBox");
				$(this).parent().find("strong").addClass("error").append("<b class='errorIcon'></b>"+"请输入相同的密码");
				isOk32 = false;
				
			}
		}
	})
	
	
	
	//验证码
	$(".verCode input").blur(function(){
		$(this).parent().removeClass("focus");
		if($(".s1").html()==$(this).val()){
//			console.log(true);
			isOk41 = true;
		}else{
			console.log(false);
			isOk41 = false;
		}
	})
	
	$(".verCode2 input").blur(function(){
		$(this).parent().removeClass("focus");
		if($(".s2").html()==$(this).val()){
//			console.log(true);
			isOk42 = true;
		}else{
			console.log(false);
			isOk42 = false;
		}
	})
	
	//校验码
	$(".putIncheckCode input").blur(function(){
		$(this).parents("li").removeClass("focus");
	})
	
	
	//手机注册点
	$(".mregister-btn").click(function(){
		if(isOk11 && isOk2 && isOk31 && isOk41){
			$.ajax({
				type:"post",
				url:"http://10.36.135.25/GJWdata/GJWRegister.php",
//				url:"http://172.27.35.1/register/register.php",
				data:{name:$(".mphone-number input").val(),password:$(".msetPassWord input").val()},
				async:true,
				success:function(data){
					var obj = JSON.parse(data);
					alert("用户名："+$(".mphone-number input").val()+obj.msg);
				},
				error:function(){
					console.log("获取数据失败");
				},
				complete:function(){
					console.log("请求完成");
				}
				
			});
			
		}else{
			alert("手机注册失败");
			
		}

	})
	
	//邮箱注册点
	$(".eregister-btn").click(function(){
		if(isOk12 && isOk2 && isOk32 && isOk42 &&isOk5){
			$.ajax({
				type:"post",
				url:"http://10.36.135.25/GJWdata/GJWRegister.php",
				data:{name:$(".email input").val(),password:$(".esetPassword input").val()},
				async:true,
				success:function(data){
					var obj = JSON.parse(data);
					alert("用户名："+$(".email input").val()+obj.msg);
				},
				error:function(){
					console.log("获取数据失败");
				},
				complete:function(){
					console.log("请求完成");
				}
				
			});
		}else{
			alert("邮箱注册失败");
			
		}
		
	})
})













































