var shop_id = document.getElementById("shop_id").value;
var typename="";

//根据菜单关键字进行分页
/**********************/
//跳转页数
$(".btngopage").click(function(){
    var inputpage = document.getElementById("inputpage").value;
    
	if(inputpage!=null & inputpage!=""){
		if(typename!=null & typename!=""){
	    	disheslistbytype(typename,inputpage);
	    }else{
	    	toconditiondishesList(inputpage);
	    }
		
	}
	
});
//上一页
$(".prebtngopage").click(function(){
	var currentpage1 = document.getElementById("currentpage1").innerText;
	var Totalpage1 = document.getElementById("Totalpage1").innerText;
	currentpage1 = parseInt(currentpage1);
	Totalpage1 = parseInt(Totalpage1);
    if(currentpage1>1  && currentpage1<=Totalpage1){
    	currentpage1 = currentpage1-1;
    	
    	if(typename!=null & typename!=""){
	    	disheslistbytype(typename,currentpage1);
	    }else{
	    	toconditiondishesList(currentpage1);
	    }
    
    }
});
//下一页
$(".nextbtngopage").click(function(){
	var currentpage2 = document.getElementById("currentpage2").innerText;
	var Totalpage2 = document.getElementById("Totalpage2").innerText;
	currentpage2 = parseInt(currentpage2);
	Totalpage2 = parseInt(Totalpage2);
	if(currentpage2<Totalpage2){
		currentpage2 = currentpage2+1;
		
    	if(typename!=null & typename!=""){
	    	disheslistbytype(typename,currentpage2);
	    }else{
	    	toconditiondishesList(currentpage2);
	    }
	}
	
});
//传入需要跳转的对应页数
function toconditiondishesList(inputpage){
	var conditiondishes = document.getElementById("conditiondishes").value;

	$.ajax({
        async:false,
        type : "get",
        data:{shop_id:shop_id,conditiondishes:conditiondishes,currentpage:inputpage},
        url: "/dishes/conditiondishes",
        //dataType:'json',
        success: function(data){
        	
        	var dishesList = document.getElementById("dishesList");
        	var dishesListlength = document.getElementById("dishesListlength");
        	var currentandtotal = document.getElementById("currentandtotal");
        	var currentandtotal2 = document.getElementById("currentandtotal2");
        	var showpage = document.getElementById("showpage");
        	var dishesList_text ="";
        	for(var i=0;i<data.data.length;i++){
        		dishesList_text+='<div class="myvideo">'
                    +'<div class="myvideoimg"><img src="'+data.data[i].pic+'" />'
                    +'   <h3><a href="shopss.html">'+data.data[i].name+'</a></h3>'
                    +'  <span class="play1"></span></div>'
                    +' <div class="title3">'
                    +'   <div class="jiage"><a href="shopss.html">￥'+data.data[i].price+'</a></div>'
                    +'   <div class="playtime"></div>'
                    +'  </div>'
                    +' </div>';
        	}
        	
        	dishesList.innerHTML=dishesList_text;
        	dishesListlength.innerHTML ='共'+data.totoldishes+'个筛选结果';
        	
        	//显示每一页  class="on"
        	
        	var showpage_text="";
        	if(data.Totalpage>10){
        		for(var y=1;y<=10;y++){
        			if(y==(data.currentpage+0)){
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" class="on">'+y+'</a>';
        			}else{
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" >'+y+'</a>';
        			}
        		}
        	}else{
        		for(var y=1;y<=data.Totalpage;y++){
        			if(y==(data.currentpage+0)){
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" class="on">'+y+'</a>';
        			}else{
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" >'+y+'</a>';
        			}
        			
        		}
        	}
        	showpage.innerHTML = showpage_text;
        	currentandtotal.innerHTML='<font class="f_blue"  id="currentpage1">'+data.currentpage+'</font>/<font id="Totalpage1">'+data.Totalpage+"</font>";
        	currentandtotal2.innerHTML='<font class="f_blue"  id="currentpage2">'+data.currentpage+'</font>/<font   id="Totalpage2">'+data.Totalpage+"</font>";
        }
   });
}

//默认首页
function conditiondishesList(){
	typename="";
	var conditiondishes = document.getElementById("conditiondishes").value;
	$.ajax({
        async:false,
        type : "get",
        data:{shop_id:shop_id,conditiondishes:conditiondishes},
        url: "/dishes/conditiondishes",
        //dataType:'json',
        success: function(data){
        	$(".bytype").removeAttr("style");
        	var dishesList = document.getElementById("dishesList");
        	var dishesListlength = document.getElementById("dishesListlength");
        	var currentandtotal = document.getElementById("currentandtotal");
        	var currentandtotal2 = document.getElementById("currentandtotal2");
        	var showpage = document.getElementById("showpage");
        	var dishesList_text ="";
        	for(var i=0;i<data.data.length;i++){
        		dishesList_text+='<div class="myvideo">'
                    +'<div class="myvideoimg"><img src="'+data.data[i].pic+'" />'
                    +'   <h3><a href="shopss.html">'+data.data[i].name+'</a></h3>'
                    +'  <span class="play1"></span></div>'
                    +' <div class="title3">'
                    +'   <div class="jiage"><a href="shopss.html">￥'+data.data[i].price+'</a></div>'
                    +'   <div class="playtime"></div>'
                    +'  </div>'
                    +' </div>';
        	}
        	
        	dishesList.innerHTML=dishesList_text;
        	dishesListlength.innerHTML ='共'+data.totoldishes+'个筛选结果';
        	
        	//显示每一页  class="on"
        	
        	var showpage_text="";
        	if(data.Totalpage>10){
        		for(var y=1;y<=10;y++){
        			if(y==(data.currentpage+0)){
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" class="on">'+y+'</a>';
        			}else{
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" >'+y+'</a>';
        			}
        		}
        	}else{
        		for(var y=1;y<=data.Totalpage;y++){
        			if(y==(data.currentpage+0)){
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" class="on">'+y+'</a>';
        			}else{
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" >'+y+'</a>';
        			}
        			
        		}
        	}
        	showpage.innerHTML = showpage_text;
        	currentandtotal.innerHTML='<font class="f_blue"  id="currentpage1">'+data.currentpage+'</font>/<font id="Totalpage1">'+data.Totalpage+"</font>";
        	currentandtotal2.innerHTML='<font class="f_blue"  id="currentpage2">'+data.currentpage+'</font>/<font   id="Totalpage2">'+data.Totalpage+"</font>";
        }
   });
}

/**********************/


//**********************
//获取菜品
getmenuList(shop_id);
//获取菜单
//getdishesList(shop_id)
//conditiondishesList();
//默认首页
toconditiondishesList(1);
//推荐菜品
RecommenddishesList(shop_id);



/**********************/
//获取菜品
function getmenuList(shop_id){
	$.ajax({
        async:false,
        type : "get",
        data:{id:shop_id},
        url: "/menu/getmenuList",
        dataType:'json',
        success: function(data){
        	var menuList = document.getElementById("menuList");
        	var menuList_text ="<span>全部</span>";
        	for(var i=0;i<data.length;i++){
        		menuList_text+='<a href="javascript:void(0);" data="'+data[i].id+'"  class="bytype"   >'+data[i].name+'</a>';
        	}
        	menuList.innerHTML=menuList_text;
        }
   });
}
//获取菜单
function getdishesList(shop_id){
	$.ajax({
        async:false,
        type : "get",
        data:{id:shop_id},
        url: "/menu/getdishesList",
        dataType:'json',
        success: function(data){
        	
        	var dishesList = document.getElementById("dishesList");
        	var dishesListlength = document.getElementById("dishesListlength");
        	var dishesList_text ="";
        	for(var i=0;i<data.length;i++){
        		dishesList_text+='<div class="myvideo">'
                    +'<div class="myvideoimg"><img src="'+data[i].pic+'" />'
                    +'   <h3><a href="shopss.html">'+data[i].name+'</a></h3>'
                    +'  <span class="play1"></span></div>'
                    +' <div class="title3">'
                    +'   <div class="jiage"><a href="shopss.html">￥'+data[i].price+'</a></div>'
                    +'   <div class="playtime"></div>'
                    +'  </div>'
                    +' </div>';
        	}
        	dishesList.innerHTML=dishesList_text;
        	dishesListlength.innerHTML ='共'+data.length+'个筛选结果';
        }
   });
}
//推荐菜品
function RecommenddishesList(shop_id){
	$.ajax({
        async:false,
        type : "get",
        data:{id:shop_id},
        url: "/menu/getRecommenddishesList",
        dataType:'json',
        success: function(data){
        	var RecommenddishesList = document.getElementById("RecommenddishesList");
        	var RecommenddishesList_text ="";
        	for(var i=0;i<data.length;i++){
        		RecommenddishesList_text+='<div class="likevideo">'
        	         +' <div class="videoimg"><img src="'+data[i].pic+'" /><span class="time">￥'+data[i].price+'</span></div>'
        	         +' <div class="videotitle"><a href="shopss.html" target="_blank">'+data[i].name+'</a></div>'
        	         +'</div>';
        	}
        	RecommenddishesList.innerHTML=RecommenddishesList_text;
        }
   });
}


///////////////////////////////////////

//根据菜品种类进行分页
/**********************/
$(".bytype").click(function(){
	var type = $(this).attr("data")
	typename = type;
	$(".bytype").removeAttr("style");
	$(this).css('color','#3db1ea');
	disheslistbytype(type,1);
	
});

//传入需要跳转的对应页数
function disheslistbytype(type,inputpage){
	//var conditiondishes = document.getElementById("conditiondishes").value;
	$.ajax({
        async:false,
        type : "get",
        data:{shop_id:shop_id,type:type,currentpage:inputpage},
        url: "/dishes/disheslistbytype",
        //dataType:'json',
        success: function(data){
        	
        	var dishesList = document.getElementById("dishesList");
        	var dishesListlength = document.getElementById("dishesListlength");
        	var currentandtotal = document.getElementById("currentandtotal");
        	var currentandtotal2 = document.getElementById("currentandtotal2");
        	var showpage = document.getElementById("showpage");
        	var dishesList_text ="";
        	for(var i=0;i<data.data.length;i++){
        		dishesList_text+='<div class="myvideo">'
                    +'<div class="myvideoimg"><img src="'+data.data[i].pic+'" />'
                    +'   <h3><a href="shopss.html">'+data.data[i].name+'</a></h3>'
                    +'  <span class="play1"></span></div>'
                    +' <div class="title3">'
                    +'   <div class="jiage"><a href="shopss.html">￥'+data.data[i].price+'</a></div>'
                    +'   <div class="playtime"></div>'
                    +'  </div>'
                    +' </div>';
        	}
        	
        	dishesList.innerHTML=dishesList_text;
        	dishesListlength.innerHTML ='共'+data.totoldishes+'个筛选结果';
        	
        	//显示每一页  class="on"
        	
        	var showpage_text="";
        	if(data.Totalpage>10){
        		for(var y=1;y<=10;y++){
        			if(y==(data.currentpage+0)){
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" class="on">'+y+'</a>';
        			}else{
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" >'+y+'</a>';
        			}
        		}
        	}else{
        		for(var y=1;y<=data.Totalpage;y++){
        			if(y==(data.currentpage+0)){
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" class="on">'+y+'</a>';
        			}else{
        				showpage_text+='<a href="javascript:void(0);" onclick="toconditiondishesList('+y+')" >'+y+'</a>';
        			}
        			
        		}
        	}
        	showpage.innerHTML = showpage_text;
        	currentandtotal.innerHTML='<font class="f_blue"  id="currentpage1">'+data.currentpage+'</font>/<font id="Totalpage1">'+data.Totalpage+"</font>";
        	currentandtotal2.innerHTML='<font class="f_blue"  id="currentpage2">'+data.currentpage+'</font>/<font   id="Totalpage2">'+data.Totalpage+"</font>";
        }
   });
}

/******************************/