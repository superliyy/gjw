


$(function(){
	
	$(".con-right-bottom").click(function(){
		location.href = "register.html";
	})
	
	$(".loginbtn input,.password input").focus(function(){
		$(this).parent().addClass("focus");
	})
	
	$(".loginbtn input,.password input").blur(function(){
		$(this).parent().removeClass("focus");
	})
	
	
//	点击登录
	$(".loginclick").click(function(){
		$.ajax({
			type:"post",
			url:"http://10.36.135.25/GJWdata/GJWLogin.php",
			async:true,
			data:{name:$(".loginbtn input").val(),password:$(".password input").val()},
			success:function(data){
			
				var obj = JSON.parse(data);
				alert($(".loginbtn input").val()+obj.msg);
				
				
				//将用户名和密码存到cookie中，10天内免登陆
				if(obj.status == 1){
					var person = {
						name:$(".loginbtn input").val(),
						password:$(".password input").val()
					}
					var str = JSON.stringify(person);
					$.cookie("person",str,{expires:10,path:"/"});
		
				}
				
			},
			error:function(){
				alert("获取数据失败！");
			},
			complete:function(){
				console.log("数据请求完成！");
				
				//如果已登录成功后，下次从cookie中取值
				var person = $.cookie("person")? JSON.parse($.cookie("person")):[];
				$(".loginbtn input").val(person.name);
				$(".password input").val(person.password);
					
				if(person.name.length >  0){
					var time  = setTimeout(function(){
						location.href = "index.html";
						clearTimeout(time);
					},2000);
				}
				
				
			}
			
		});
	})

	




	
	








})













