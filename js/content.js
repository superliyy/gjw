


$(function(){
	
	//?id%20=cy04
	var goodsId = location.search.slice(7);
//	console.log(goodsId);
	
	//白酒
	$.get("json/baijiu.json",function(arr){
		for(var i = 0;i<arr.length;i++){
			if(arr[i].id == goodsId){
				var obj = arr[i];
				content(obj);
				$("img.lazy").lazyload({
     	 			effect: "fadeIn"
     	 			
     	 		});
			}
		}
	})
	//葡萄酒的数据获取
	$.get("json/putaojiu.json",function(arr){
		for(var i = 0;i<arr.length;i++){
			if(arr[i].id == goodsId){
				var obj = arr[i];
				content(obj);
				$("img.lazy").lazyload({
     	 			effect: "fadeIn"
     	 			
     	 		});
			}
		}
	})
	
	//洋酒的数据获取
	$.get("json/yangjiu.json",function(arr){
		for(var i = 0;i<arr.length;i++){
			if(arr[i].id == goodsId){
				var obj = arr[i];
				content(obj);
				$("img.lazy").lazyload({
     	 			effect: "fadeIn"
     	 			
     	 		});
			}
		}		
	})

	//茶酒的数据获取
	$.get("json/chayejiu.json",function(arr){
		for(var i = 0;i<arr.length;i++){
			if(arr[i].id == goodsId){
				var obj = arr[i];
				content(obj);
				$("img.lazy").lazyload({
     	 			effect: "fadeIn"
     	 			
     	 		});
			}
		}
	})
	
	function content(obj){

		var omiddlArea = $(".middleArea");
		var omiddleImg = $(".middleImg img");
		var obigArea = $(".bigArea");
		
		
		//中图的盒子
		var omiddleImgbox = $(".middleImg");
		
		
		var smallImgList = $(".smallImg");
		var obigImg = $(".bigArea img");

		
		//动态改变数据
		omiddleImg.attr("data-original",obj.other[0]).addClass("lazy");
		obigImg.attr("data-original",obj.other[0]).addClass("lazy");
		$(".content-right h3").html(obj.name);
		$(".reference-price span").html("￥"+obj.reprice);
		$(".activity-price span").html(obj.price);
		$(".promotion-price i").html("已优惠"+(obj.reprice-obj.price)+"元");
		for(var i = 0;i<obj.other.length;i++){
			$("<li><img src="+obj.other[i]+" /></li>").appendTo(smallImgList);
		}
		//改变样式
		var asmallImgLi = $(".smallImg li");
		asmallImgLi.eq(0).css("border","2px solid #c40000");

		smallImgList.on("mouseenter","li",function(){
			$(this).css("border","2px solid #c40000").siblings().css("border","2px solid white");
			var newSrc = $(this).find("img").attr("src")
			omiddleImg.attr("src",newSrc);
			obigImg.attr("src",newSrc);
		})
		//中图的盒子移入
//		omiddleImgbox.mouseenter(function(){
//			omiddlArea.show();
//			obigArea.show();
//		})
		//中图的盒子移出
		omiddleImgbox.mouseleave(function(){
			omiddlArea.hide();
			obigArea.hide();
		})
	
		//放大镜效果
		omiddlArea.width(  omiddleImg.width()/obigImg.width()*obigArea.width()  );
		omiddlArea.height(  omiddleImg.height()/obigImg.height()*obigArea.height()  );
		
		var scrale = obigArea.width()/omiddlArea.width(); 
		
		omiddleImgbox.mousemove(function(evt){
			omiddlArea.show();
			obigArea.show();
			
			var e = evt || event;
			var x = e.pageX - omiddleImgbox.offset().left-omiddlArea.width()/2;
			var y = e.pageY - omiddleImgbox.offset().top-omiddlArea.height()/2;
			
			if(x<0){
				x = 0;
			}else if(x>=omiddleImgbox.width()-omiddlArea.width()){
				x = omiddleImgbox.width()-omiddlArea.width();
			}
			
			if(y<0){
				y = 0;
			}else if(y>=omiddleImgbox.height()-omiddlArea.height()){
				y = omiddleImgbox.height()-omiddlArea.height();
			}
			omiddlArea.css({"left":x,"top":y});
			$(obigImg).css({"left":-x*scrale,"top":-y*scrale});
			
		})
		
		//增加和减少
		
		var num = $(".num-num").val();
		$(".add").click(function(){
			num++;
			$(".num-num").val(num);
			
		})
		
		$(".minus").click(function(){
			num--;
			if(num<=1){
				num = 1;
			}
			$(".num-num").val(num);
		})
		
		
		
		//进入购物车
		$(".goShoppingCart").click(function(e){
			var flyer = $("<img class='u-flyer' />");
			flyer.attr("src",obj.other[0]).css({zIndex:"1",width:"40px",height:"40px",borderRadius:"50%"});
			
			flyer.fly({
				start:{
					left:e.clientX,
					top:e.clientY,
					width:50,
					height:50
				},
				end:{
					left:$(".cart").offset().left - $(window).scrollLeft(),
					top:$(".cart").offset().top +25 - $(window).scrollTop(),
					width:25,
					height:25
				},

				onEnd: function(){
					flyer.fadeOut();
					
					
					//用cookie储存商品
					var wineobj = {
						id:obj.id,
						name:obj.name,
						unit:obj.unit,
						price:obj.price,
						number: parseInt($(".num-num").val()),
						src:obj.other[0]
					}
					
//					console.log(wineobj);
					
					//从判断cookie中是否有该商品
					
						
					var wineArr = $.cookie("wine")? JSON.parse( $.cookie("wine")):[];
					var isExists = false;
					
					$(wineArr).each(function(index,value){
						if(value.id == wineobj.id){
							value.number++;
							isExists = true;
						}
					})
					if(!isExists){
						wineArr.push(wineobj);
					}
				
					$.cookie("wine",JSON.stringify(wineArr),{expires:10,path:"/"});
					
				}
			})
		})
		
		//跳转
		$(".icon-gouwuche").click(function(){
			location.href = "shoppingcart.html";
			
		})
		
	}
	
	
	
	//侧边栏
	var sidebar = $(".sidebar");
	$(sidebar).height($(document.body).height());
	
	var sidebarli = $(".sidebar ul li");
	
	
	sidebarli.mouseenter(function(){
		$(this).css({background:"#ba000c"});
		$(this).find("span").css({color:"white",borderBottom:"1px solid #ba000c"});
		$(this).find(".showCon").stop().show();
		$(this).find("i").stop().show();
		
	})
	sidebarli.mouseleave(function(){
		$(this).css({background:"#eaeaea"});
		$(this).find("span").css({color:"#ba000c",borderBottom:"1px solid #cacaca"});
		$(this).find(".showCon").hide();
		$(this).find("i").hide();
		
	})
	
	
	//侧边栏返回顶端
	$(".icon-xiangshangjiantouarrowup").click(function(){
		$(window).scrollTop(0);
	})
	
	
	//二维码
	var apptimer;
	//移入
	var app = $(".app");
	var code = $(".QR-code");
	$(app,code).mouseenter(function(){
		clearTimeout(apptimer);
		$(app).css({background:"white"})
		.find("span").css("color","#C40000")
		.parent().find("i").css("transform","rotate(180deg)").css("color","#c40000");
		
		$(code).stop().show();
	})
	//离开
	$(app,code).mouseleave(function(){
		$(app).css({background:"#f7f7f7"})
		.find("span").css("color","#656565")
		.parent().find("i").css("transform","rotate(0deg)").css("color","#656565");

		apptimer = setTimeout(function(){
			$(code).stop().hide();
		},200);
	})
	
	//用户中心
	var users = $("#users");
	var usersUL = $(".usersUl");
	var usersi = $("#users i");
	var usersLi = $(".usersUl li");
	
	$(users).mouseenter(function(){
		$(usersUL).css("display","block").slideDown(800);
		$(usersi).css("transform","rotate(180deg)");
	})
	$(users).mouseleave(function(){
		$(usersUL).css("display","none").slideUp(800);

	})
	$(usersLi).eq(0).mouseleave(function(){
		$(usersi).css("transform","rotate(0deg)");	
	})
	$(usersLi).eq(0).mouseenter(function(){
		$(usersi).css("transform","rotate(180deg)");	
	})
	
	
	
})


















