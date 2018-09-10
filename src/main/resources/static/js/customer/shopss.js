var shop_id = document.getElementById("shop_id").value;


//**********************
//获取菜品
getmenuList(shop_id);
//获取菜单
getdishesList(shop_id);
//推荐菜品
RecommenddishesList(shop_id);



//**********************
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
        		menuList_text+='<a href="'+data[i].id+'">'+data[i].name+'</a>';
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
        url: "/menu/getdishesList",
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