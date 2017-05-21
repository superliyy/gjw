



$(function(){
	
	var arr;
	
	var selectArr=[];
	var arr1 =  $.cookie("wine");
	if(arr1){
		arr1 = JSON.parse(arr1);
		$.each(arr1,function(index){
			selectArr.push(true);
		})
	}
	reflash();
	$("img.lazy").lazyload({
   		effect: "fadeIn"
   	});
	
	function reflash(){
		//先清空
		$(".wine-list").empty();
		
		
		//获取cookie中的数据
		 arr = $.cookie("wine")? JSON.parse( $.cookie("wine")):[];
		
		var total = 0;
		for(var i = 0;i<arr.length;i++){
			var tr = $("<tr></tr>");
		    tr.appendTo($(".wine-list"));
			//添加到界面中
			var obj = arr[i];
			
			if(selectArr[i]){
				$('<td class="select"><input type="checkbox" checked="checked"/></td>').appendTo(tr);	
			}else{
				$('<td class="select"><input type="checkbox" /></td>').appendTo(tr);	
			}

			$('<td class="goods-pic"><img src='+ obj.src + ' /></td>').appendTo(tr);
			$('<td class="goods-name"><a href="#">' + obj.name + '</a></td>').appendTo(tr);
			$('<td class="price"><a href="#">' +obj.unit+  obj.price  + ' </a></td>').appendTo(tr);
			$('<td class="cheaper"><a href="#">-</a></td>').appendTo(tr);
			$('<td class="number"><input class="minus" type="button" value="-"><input class="text" type="text"  value=' + obj.number +' /><input class="add" type="button" value="+" /></td>').appendTo(tr);
			$('<td class="total">'+obj.unit + (obj.price * obj.number) +'</td>').appendTo(tr);
			$('<td class="operation">收藏<b>删除</b></td>').appendTo(tr);
			
			if(selectArr[i]){
				total += obj.price * obj.number;
			}
		}
		$(".check-all strong").html(total);
//		
	}
	
	//-
	$(".wine-list").on("click",".minus",function(){
		
		var index = $(this).index(".minus");
		var obj = arr[index];
		obj.number--;
		
		if(obj.number <1){
			obj.number = 1;
			alert("数量不能低于1件");
		}
		$.cookie("wine",JSON.stringify(arr),{expires:10,path:"/"});
		reflash();
		console.log("minus");
	})
	
	//+
	$(".wine-list").on("click",".add",function(){
		var index = $(this).index(".add");
		
		var obj = arr[index];
		obj.number++;
		$.cookie("wine",JSON.stringify(arr),{expires:10,path:"/"});
		reflash();
		
	})
	
	//删除单个商品
	$(".wine-list").on("click",".operation b",function(){
		var index = $(this).index(".operation b");
		
		arr.splice(index,1);
		$.cookie("wine",JSON.stringify(arr),{expires:10,path:"/"});
		
		selectArr.splice(index,1);
		
		isAll();
		reflash();
	})
	
	//清空购物车
	$(".deleteAll").click(function(){
		arr = [];
		selectArr = [];
		$.cookie("wine",JSON.stringify(arr),{expires:10,path:"/"});
		reflash();
	})
	
	//全选按钮
	$(".T-select input,.allSelect input").click(function(){
		if($(this).prop("checked")==true){
			$(".T-select input,.allSelect input").prop("checked",true);
			$.each(selectArr, function(i) {
				selectArr[i] = true;
			});
		}else{
			$(".T-select input,.allSelect input").prop("checked",false);
			
			$.each(selectArr, function(i) {
				selectArr[i] = false;
			});
		}
		reflash();
	})
	
	//删除选中
	$(".delete").click(function(){
		
		var newSelect = [];
		var newArr = [];
		for(var i = 0;i<arr.length;i++){
			if(selectArr[i]==false){
				newArr.push(arr[i]);
				newSelect.push(selectArr[i]);
			}
		}
		selectArr = newSelect;
		$.cookie("wine",JSON.stringify(newArr),{expires:10,path:"/"});
		
		
		reflash();
	})

	//点击单个选择
	$(".wine-list").on("click",".select input",function(){
		var index = $(this).index(".select input");
		selectArr[index] = !selectArr[index];
		
		//单个控制全选
		isAll();
		
		reflash();
		
	})

	function isAll(){
		var sum = 0;
		for( var i = 0;i<selectArr.length;i++){
			if(selectArr[i]){
				sum++;
			}
		}
		if(sum == arr.length){
			
			$(".T-select input,.allSelect input").prop("checked",true);	
		}else{
			$(".T-select input,.allSelect input").prop("checked",false);
			
		}
	}

	$(".goIndex").click(function(){
		location.href = "index.html";
	})


})














