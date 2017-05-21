



$(function(){
	
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
	
	//展开和收起
	var isOpen = false;
	var top_activity = $(".top_activity");
	var top_activity_img = $(".top_activity img");
	$(top_activity).find("span").click(function(){
		if(!isOpen){
			$(top_activity_img).attr("src","img/bannershow.jpg").stop().animate({height:270},800);
			
		}else{
			$(top_activity_img).stop().animate({height:80},800,function(){
				
				$(top_activity_img).attr("src","img/banner.jpg");
			});
			
		}
		isOpen = !isOpen;
	})
	
	//关闭
	var news_activity = $(".news_activity");
	$(news_activity).find("span").click(function(){
		$(news_activity).css("display","none");
	})
	
	
	//点击进入购物车
	var shoppingcart = $(".shopping-cart");
	shoppingcart.click(function(){
		location.href = "shoppingcart.html";
	})
	$(".icon-gouwuche").click(function(){
		location.href = "shoppingcart.html";
		
	})
	
	
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
	
	//楼梯
	var stairs = $(".stairs");
	var stairsLi = $(".stairs li");
	var adiv = $(".spirit");
	var isMove = false;
	
	stairsLi.click(function(){
		var index = $(this).index();
		
		if(index<=stairsLi.length-2){
			//改变对应样式
			$(this).find("a").addClass("act").parent().siblings().find("a").removeClass("act");
			
			//点击楼梯，页面滑动
			var top = adiv.eq(index).offset().top-100;
			isMove = true;
			$("html,body").stop().animate({scrollTop:top},500,function(){
				isMove = false;
			});
			
		}
		//返回顶端
		if(index==stairsLi.length-1){
			$(window).scrollTop(0);
		}

	})

	//侧边栏返回顶端
	$(".icon-xiangshangjiantouarrowup").click(function(){
		$(window).scrollTop(0);
	})
	
	
	//下移导航栏
	var nav= $(".showNav-wrapper");
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=700){
			nav.stop().slideDown(500);
			stairs.stop().show(10,function(){
				//滑动页面，楼梯也要相应变化
				isM();
			});
		}else{
			nav.stop().slideUp(500);
			stairs.stop().hide();
		}
		
		function isM(){
			if(!isMove){
	//			var scrollTop1 = $(window).scrollTop();
				var index = 0;
				adiv.each(function(){
					var top = $(this).offset().top-150;
					
					if(scrollTop>=top){
						index = $(this).index(".spirit");
					}
				})
				
				stairsLi.eq(index).find("a").addClass("act").parents("li").siblings().find("a").removeClass("act");
					
			}
		}
		
		
	})
	
	//二级导航栏
	var smallBankList = $(".smallBankList");
	for(var i = 0;i<72;i++){
		$("<li>"+"茅台"+"</li>").appendTo(smallBankList);
	}
	
	var smallFlavorList = $(".smallFlavorList");
	for(var i = 0;i<17;i++){
		$("<li>"+"金门香型"+"</li>").appendTo(smallFlavorList);
	}
	var smallPlaceList = $(".smallPlaceList");
	for(var i = 0;i<9;i++){
		$("<li>"+"四川"+"</li>").appendTo(smallPlaceList);
	}
	
	var smallCountryList = $(".smallCountryList");
	for(var i = 0;i<12;i++){
		$("<li>"+"法国"+"</li>").appendTo(smallCountryList);
		
	}
	
	var smallVarietiesList = $(".smallVarietiesList");
	for(var i = 0;i<9;i++){
		$("<li>"+"长相思"+"</li>").appendTo(smallVarietiesList);
		
	}
	
	var smallTypeList = $(".smallTypeList");
	for(var i = 0;i<9;i++){
		$("<li>"+"红葡萄酒"+"</li>").appendTo(smallTypeList);
		
	}
	
	var smallBankList2 = $(".smallBankList2");
	for(var i = 0 ;i<72;i++){
		$("<li>"+"奔富"+"</li>").appendTo(smallBankList2);
		
	}
	
	var smallBankList3 = $(".smallBankList3");
	for(var i = 0 ;i<28;i++){
		$("<li>"+"百龄坛"+"</li>").appendTo(smallBankList3);
		
	}
	
	var smallVariList = $(".smallVariList");
	for(var i = 0;i<7;i++){
		$("<li>"+"白兰地"+"</li>").appendTo(smallVariList);
		
	}
	var smallPriceList = $(".smallPriceList");
	for(var i = 0;i<7;i++){
		$("<li>"+"1-99"+"</li>").appendTo(smallPriceList);
		
	}
	
	var huangjiuList = $(".huangjiuList");
	for(var i = 0;i<12;i++){
		$("<li>"+"古越龙山"+"</li>").appendTo(huangjiuList);
		
	}
	
	var huangjiuPriceList = $(".huangjiuPriceList");
	var yangshengjiuList = $(".yangshengjiuList");
	for(var i = 0;i<12;i++){
		$("<li>"+"劲酒"+"</li>").appendTo(yangshengjiuList);
		
	}
	var yangshenjiuPriceList = $(".yangshenjiuPriceList");
	var pijiuList = $(".pijiuList");
	for(var i = 0;i<5;i++){
		$("<li>"+"百威"+"</li>").appendTo(pijiuList);	
	}
	var pijiuPriceList = $(".pijiuPriceList");
	for(var i = 0;i<7;i++){
		$("<li>"+"1-99"+"</li>").appendTo(yangshenjiuPriceList);
		$("<li>"+"1-99"+"</li>").appendTo(huangjiuPriceList);
		$("<li>"+"1-99"+"</li>").appendTo(pijiuPriceList);
		
	}
	
	
	//移入出现二级导航
	var abannerList = $(".banner-item");
	abannerList.hover(function(){
		 var index = $(this).index();
		 $(this).find(".showItemWrapper").show();
	},
	function(){
		var index = $(this).index();
		 $(this).find(".showItemWrapper").hide();
		 
	})
	
	//二级导航栏结束
	
	
	
	
	
	//获取banner轮播图的数据
	var colorBg = [];
	var banner = $(".banner");
	$.getJSON("json/banner.json",function(arr){

		for(var i = 0;i<arr.length;i++){
			var obj = arr[i];
			//动态获取数据
			$("<li><img src="+obj.image+" /></li>").appendTo($(".list1"));
			$("<li>"+(i+1)+"</li>").appendTo($(".list2"));
			colorBg.push(obj.background);
		}
		
		banner.css("background",colorBg[0]);
		$(".list2 li").eq(0).addClass("active");
		$(".list1 li").eq(0).css({opacity: 1,filter: "alpha(opacity=1)"});
		
		//开始动画
		animateBanner();
	})

	//轮播图动画
	function animateBanner(){
		
		var olist1 = $(".list1");
		var ali1 = olist1.find("li");
		var olist2 = $(".list2");
		var ali2 = olist2.find("li");
		
		//让.list2动态居中
		olist2.css ("left", (olist1.width()- olist2.width())/2 + "px");
		
		
		var size = ali1.length;
		var i = 0;
		var timer = setInterval(function(){
			i++;
			move();
			
		},3000);
		
		//轮播图移动
		function move(){
			
			if(i>=size){
				i = 0;
			}
	
			banner.css("background",colorBg[i]);
			ali1.eq(i).css({opacity: 1,filter: "alpha(opacity=1)"}).stop().fadeIn(1000).siblings().fadeOut(1000);
			//下标跟着移动
			ali2.eq(i).addClass("active").siblings().removeClass("active");
			if(i==size){
				ali2.eq(0).addClass("active").siblings().removeClass("active");	
			}
		}

		$(ali2).mouseenter(function(){
			i = $(this).index();		
			move();
		})
		
		$(".scrollView").mouseenter(function(){
			clearInterval(timer);
		})
		
		$(".scrollView").mouseleave(function(){
			clearInterval(timer);
			timer = setInterval(function(){
				i++;
				move();
			},3000);
		})
	

	}
		
//////////////////    banner轮播图播放内容完成         ////////////////
	
	//特惠的轮播图
//		   <li class="clearFloat">
//				<img src="img/prefer/prefer1.gif"/>
//				<img src="img/prefer/prefer2.gif"/>
//				<img src="img/prefer/prefer3.gif"/>
//				<img src="img/prefer/prefer4.gif"/>
//			</li>
	
	
	$.getJSON("json/perfer.json",function(data){
		for(var i = 0;i<data.length;i++){
			var obj = data[i];
			var li = $("<li class='clearFloat'></li>");
			li.appendTo(".prefer");
			$("<img class='lazy' data-original="+obj.image1+" />").appendTo(li);
			$("<img class='lazy' data-original="+obj.image2+" />").appendTo(li);
			$("<img class='lazy' data-original="+obj.image3+" />").appendTo(li);
			$("<img class='lazy' data-original="+obj.image4+" />").appendTo(li);
		
		}
		
		movePre();
		
	})
	
//	movePre();
	
	function movePre(){
		
		 $(".prefer li").eq(0).clone(true).appendTo($(".prefer"));
		 
		 var prefer = $(".prefer");
		 var preferli = $(".prefer li");
		 var sizePre = preferli.length;
		 var preferential = $(".preferential");
		prefer.width( sizePre * 990  );
		
		var opre = $(".prefer-previous");
		var onext = $(".prefer-next");
		preferential.mouseenter(function(){
			opre.show();
			onext.show();
		})
		preferential.mouseleave(function(){
			opre.hide();
			onext.hide();
		})
		
		var i = 0;
		opre.click(function(){
			i--;
			moveCon1();
		})
		
		onext.click(function(){
			i++;
			moveCon1();
		})
		
		
		//轮播图图片移动
		function moveCon1(){
			if(i>=sizePre){
				i = 1;
				prefer.css("left",0);
			}
			if(i<0){
				i = sizePre-2;
				prefer.css("left",-990*(sizePre-1)+"px");
			}
			
			prefer.stop().animate({left:-990*i},500);
			
		}
		
		
	}
	
	
	
	
////特惠的轮播图end//////////////////////
	
	var afblListLi = $(".fBl-list li");
	//闪购
	$.get("json/flashBuy.json",function(arr){
		for(var i = 0;i<arr.length;i++){
			var obj = arr[i];
			afblListLi.eq(i).find("img").attr("data-original",obj.image).addClass("lazy");
			afblListLi.eq(i).find("a").html(obj.title);
			afblListLi.eq(i).find("strong").html(obj.price);
			
			//处理时间
			var d1 = new Date(obj.surplusTime);
				
			//每一秒
			(function(i){
				setInterval(function(){
					var d2 = new Date();
					var timeOffset = Math.abs(d1.getTime() - d2.getTime()); //毫秒
					var day = parseInt(timeOffset/(1000*3600*24));
					var hour = parseInt(timeOffset/(1000*3600)) % 24;
					var min = parseInt(timeOffset/(1000*60)) % 60;
					var sec = parseInt(timeOffset/1000) % 60;	
					day = day<10?"0"+day:day;
					hour = hour<10?"0"+hour:hour;
					min = min<10?"0"+min:min;
					sec = sec<10?"0"+sec:sec;

					afblListLi.eq(i).find(".day span").html(day);
					afblListLi.eq(i).find(".hour span").html(hour);
					afblListLi.eq(i).find(".minute span").html(min);
					afblListLi.eq(i).find(".second .r1").html(sec);
					
					
					afblListLi.eq(i).find(".relative").animate({top:0},500,function(){
						$(this).css("top","-19px");
						afblListLi.eq(i).find(".second .r2").html(sec);
						
					})
					
				
					
				},1000);
			})(i);
			
		}
	
	})



	//品牌馆
	var allBankImg = $(".allBank img");
	allBankImg.mouseenter(function(){
		$(this).stop().animate({left:"-140px"},500);
	})
	allBankImg.mouseleave(function(){
		$(this).stop().animate({left:"0"},500);
	})

	//几个馆的轮播图
	var aspirit = $(".spirit-scrollView");
	var acircle = $(".circle");
	$.getJSON("json/wineScroller.json",function(data){
		
		for(var i = 0;i<data.length;i++){
			var obj = data[i];
			for(var j = 0;j<aspirit.length;j++){
				
				var li = $("<li></li>");
				li.appendTo(aspirit[j]);
				$("<img class='lazy' data-original="+obj["img"+(j+1)]+" />").appendTo(li);
				$("<li></li>").appendTo(acircle[j]);	
			}
			if(i==0){
				acircle.find("li").addClass("selectActive").addClass("first");
			}
		}
		
		wineMove();
	})
	function wineMove(){
		var aprevious = $(".spirit-previous");
		var anext = $(".spirit-next");
		var aspiritlen = aspirit.length;
		var scrollBox = $(".scrollerBox");
		var scroll = $(".spirit-scrollView");
		var acircle = $(".circle");
		for( var i = 0;i<aspiritlen;i++){
			//将第一张克隆到最后	
			aspirit.eq(i).find("li").first().clone(true).appendTo(aspirit.eq(i));
			var size = aspirit.eq(i).find("li").size();
			scroll.width(size*440);
			
			(function(i){
				var s1 = 0;
				moveWine($(aspirit[i]),440,size,s1)
			})(i)
		}
		
		function moveWine(obj,width,size,j){
			obj.timer = setInterval(function(){
				j++;
				moveCon2(obj,440,size,j);
			},1000);
			
			//点击上下
			anext.click(function(){
				j++;
				moveCon2(obj,width,size,j);
			})
			
			aprevious.click(function(){
				j--;
				moveCon2(obj,width,size,j);
			})
			
			scrollBox.mouseenter(function(){
				clearInterval(obj.timer);
			})
			
			scrollBox.mouseleave(function(){
				obj.timer = setInterval(function(){
					j++;
					moveCon2(obj,440,size,j);
				},1000);
			})
			//轮播图图片移动
			function moveCon2(){
								
				if(j>=size){
					j = 1;
					obj.css("left",0);
				}
				if(j<0){
					j = size-2;
					obj.css("left",-width*(size-1)+"px");
				}
				
				obj.stop().animate({left:-width*j},500);
				
				for(var k = 0;k<acircle.length;k++){
					acircle.eq(k).find("li").eq(j).addClass("selectActive").
					siblings().removeClass("selectActive");
				}
				if(j == size-1){
					for(var k = 0;k<acircle.length;k++){
						acircle.eq(k).find("li").eq(0).addClass("selectActive").
						siblings().removeClass("selectActive");	
					}	
				}
			}
		}
	}

	//白酒的数据获取
	var baijiuTop = $(".baijiu-top-list");
	var baijiuBottom = $(".baijiu-bottom-list");
	
	//储存所有的酒类的li
//	var arrLi = [];
	
	//储存所有的数据源
	var datasourse = [];
	
	$.get("json/baijiu.json",function(arr){
		for(var i = 0;i<2;i++){
			var obj = arr[i];
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(baijiuTop);
//			 arrLi.push(li);
			datasourse.push(obj);
		}
		for(var i = 2;i<arr.length;i++){
			var obj = arr[i];
//			 $("<li><img src="+obj.img+" /></li>").appendTo(baijiuBottom);	
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(baijiuBottom);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		
	})
	
	//葡萄酒的数据获取
	var putaoTop = $(".putaojiu-top-list");
	var putaoBottom = $(".putaojiu-bottom-list");
	$.get("json/putaojiu.json",function(arr){
		for(var i = 0;i<2;i++){
			var obj = arr[i];
//			 $("<li><img src="+obj.img+" /></li>").appendTo(putaoTop);
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(putaoTop);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		for(var i = 2;i<arr.length;i++){
			var obj = arr[i];
//			 $("<li><img src="+obj.img+" /></li>").appendTo(putaoBottom);	
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(putaoBottom);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		
		
	})
	
	//洋酒的数据获取
	var yangjiuTop = $(".yangjiu-top-list");
	var yangjiuBottom = $(".yangjiu-bottom-list");
	$.get("json/yangjiu.json",function(arr){
		for(var i = 0;i<2;i++){
			var obj = arr[i];
//			 $("<li><a href='content.html'><img src="+obj.img+" /></a></ var li = $("<li><img src="+obj.img+" /></li>");
			  var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(yangjiuTop);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		for(var i = 2;i<arr.length;i++){
			var obj = arr[i];
//			 $("<li><a href='content.html'><img src="+obj.img+" /></a></li>").appendTo(yangjiuBottom);	
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(yangjiuBottom);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		
		
	})

	//茶酒的数据获取
	var chajiuTop = $(".chayejiu-top-list");
	var chajiuBottom = $(".chayejiu-bottom-list");
	$.get("json/chayejiu.json",function(arr){
		for(var i = 0;i<2;i++){
			var obj = arr[i];
//			 $("<li><a href='content.html'><img src="+obj.img+" /></a></li>").appendTo(chajiuTop);
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(chajiuTop);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		for(var i = 2;i<arr.length;i++){
			var obj = arr[i];
//			 $("<li><a href='content.html'><img src="+obj.img+" /></a></li>").appendTo(chajiuBottom);	
			 var li = $("<li><img class='lazy' data-original="+obj.img+" /></li>");
			 li.appendTo(chajiuBottom);
//			 arrLi.push(li);
			datasourse.push(obj);
			
		}
		
	})
	
	
		//进入详情页面
//		$(".thesameWine").on("click","li",function(){
//			var that = this;
//			$(arrLi).each(function(index,value){
//				if($(that).find("img").attr("src")==value.find("img").attr("src")){
//					console.log(index);
//					
//				}
//			})
//		})
	
	//进入详情页面
	$(".thesameWine").on("click","li",function(){

		
		var index = $(this).index(".thesameWine li");
		var obj = datasourse[index];
		
		location.href = "content.html?id =" +obj.id;
		
	})
	
	
	//购酒推荐数据
	var reComLi = $(".recom-center li");
	$.get("json/tuijian.json",function(arr){
		
		for(var i = 0;i<arr.length;i++){
			var obj = arr[i];
			reComLi.eq(i).find("h3").html(obj.name);
			reComLi.eq(i).find("div p").html(obj.content);
			reComLi.eq(i).find("div span").html(obj.price);
			reComLi.eq(i).find("img").attr("data-original",obj.img).addClass("lazy");
		}
		
		$("img.lazy").lazyload({
			effect: "fadeIn" 			
		});

		
	})
	
	//购酒推荐
	var arecomCenImg = $(".recom-center li a img");
	arecomCenImg.hover(function(){
		$(this).stop().animate({left:65});
		
	},function(){
		$(this).stop().animate({left:73});
		
	})


	//登录成功后，取cookie中的用户名登录
	if($.cookie("person")){
		var person = $.cookie("person")?JSON.parse($.cookie("person")):[];
		var Li = $(".loginReg");
		Li.empty();
		Li.html("<strong style='margin-right:10px'>hi</strong>"+ person.name + "<a>退出</a>");
	
		Li.on("click","a",function(){
			$.cookie("person","",{expiesr:0,path:"/"});
			
//			Hi,请
//			<a href="login.html" class="login">登录</a>/
//			<a href="register.html" class="register">注册</a>	
			Li.html("Hi,请");
			$('<a href="login.html" class="login">登录</a>'+'/'+'<a href="register.html" class="register">注册</a>').appendTo(Li);
			
			
		})
	}
	
	
	onload = function(){
		var arr =	$("img.lazy");
		console.log(arr.size());
		if(arr.size()>=44){
			$("img.lazy").lazyload({
				effect: "fadeIn" 			
			});
	}
		
}

		
		
	
	
})
























