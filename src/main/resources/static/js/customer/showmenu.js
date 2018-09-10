//********************
//显示导航栏
DishesList();
//猜你喜欢    --收藏记录
Collectionshop();
//猜你喜欢 --预约店铺记录
bookingshop();
//附近美食
nearbyfood();
//网友推荐
Recommendfood();
//附近预约
nearbybooking();
//最近评论
nearbycomment();
//店家推荐
ShopRecommend();

//********************
//显示导航栏
function DishesList(){
	 $.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/DishesList",
        dataType:'json',
        success: function(data){
        	var ifocus_piclist = document.getElementById("ifocus_piclist");
        	var ifocus_btn = document.getElementById("ifocus_btn");
        	var bigtext ="<ul>";
        	var smalltext="<ul>";
        	for(var i=0;i<5;i++){
        		bigtext+='<li><a href="goshopss?id='+data[i].type+'" ><img border=0  src="'+data[i].pic+'"></a> </li>';
        		smalltext+='<li class="current"><img border=0  src="'+data[i].pic+'"> </li>';
        	}
        	ifocus_piclist.innerHTML=bigtext+"</ul>";
        	ifocus_btn.innerHTML=smalltext+"</ul>";;
        }
   });
}
//猜你喜欢    --收藏记录
function Collectionshop(){
	$.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/BookingShopList",
        dataType:'json',
        success: function(data){
        	var con_one_1 = document.getElementById("con_one_1");
        	var one_1_text ="";
        	for(var i=0;i<data.length;i++){
        		one_1_text+='<div class="likevideo fl ml20">'
        	          +'<div class="videoimg"><img src="'+data[i].pic+'"  width="100%" height="100%"/></div>'
        	          +'<div class="videotitle"><a href="" >'+data[i].name+'</a></div></div>';
        	}
        	con_one_1.innerHTML=one_1_text;
        }
   });
}
//猜你喜欢 --预约店铺记录
function bookingshop(){
	$.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/BookingShopList",
        dataType:'json',
        success: function(data){
        	var con_one_2 = document.getElementById("con_one_2");
        	var one_2_text="";
        	for(var i=0;i<data.length;i++){
        		one_2_text+='<div class="likevideo fl ml20">'
        	          +'<div class="videoimg"><img src="'+data[i].pic+'"  width="100%" height="100%"/></div>'
        	          +'<div class="videotitle"><a href="" >'+data[i].name+'</a></div></div>';
        	}
        	con_one_2.innerHTML=one_2_text;
        }
   });
}
//附近美食
function nearbyfood(){
	$.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/BookingShopList",
        dataType:'json',
        success: function(data){
        	var nearbyshoplist = document.getElementById("nearbyshoplist");
        	var nearbyshoplist_text="";
        	for(var i=0;i<data.length;i++){
        		nearbyshoplist_text+='<li>'
        	          +'<div class="pic"><a href="" target="_blank"><img src="'+data[i].pic+'" /></a></div>'
        	          +'<div class="titlei"><span class="classtitle"><a href="" target="_blank">红烧茄子</a></span><span class="classinfo">'+data[i].name+'<br/>'+data[i].address
        			  +'<a href="">进入</a></span></div></li>';
        	}
        	nearbyshoplist.innerHTML=nearbyshoplist_text;
        }
   });
}
//网友推荐
function Recommendfood(){
	$.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/BookingShopList",
        dataType:'json',
        success: function(data){
        	var recommendfoodlist = document.getElementById("recommendfoodlist");
        	var recommendfoodlistt_text="";
        	for(var i=0;i<data.length;i++){
        		recommendfoodlistt_text+='<li>'
        	          +'<div class="pic"><a href="#" target="_blank"><img src="'+data[i].pic+'" /></a></div>'
        	          +'<div class="titles"><span class="zyname"><a href="#" target="_blank">甜点早餐</a></span><br />'
        	          +' <span class="zyinfo"> '+data[i].name+'<br />'
        	          +data[i].address+'<br />'
        	          +'<a href="#">进入</a></span></div></li>';
        	}
        	recommendfoodlist.innerHTML=recommendfoodlistt_text;
        }
   });
}
//附近预约
function nearbybooking(){
	$.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/nearbybooking",
        dataType:'json',
        success: function(data){
        	var nearbybooking = document.getElementById("nearbybooking");
        	var nearbybooking_text ="";
        	for(var i=0;i<data.length;i++){
        		nearbybooking_text+='<li><span class="icon"><img src="/images/arrow.jpg" /></span>['+data[i].shopid+"] "+data[i].customerid+" 预约"+data[i].seatid+" 座   "+'<span class="jb">['+data[i].starttime+"~"+data[i].endtime+']</span></li>';
        	        
        	}
        	nearbybooking.innerHTML=nearbybooking_text;
        }
   });
}
//最近评论
function nearbycomment(){
	$.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/nearbycomment",
        dataType:'json',
        success: function(data){
        	var nearbycomment = document.getElementById("nearbycomment");
        	var nearbycomment_text ="";
        	for(var i=0;i<data.length;i++){
        		nearbycomment_text+='<li><span class="icon"><img src="/images/arrow.jpg" /></span>['+data[i].shopid+"] "+data[i].name+" :  "+data[i].content+'<span class="jb">['+data[i].contenttime+']</span></li>';
        	        
        	}
        	nearbycomment.innerHTML=nearbycomment_text;
        }
   });
}
//店家推荐
function ShopRecommend(){
	 $.ajax({
        async:false,
        type : "get",
        //data:{id:id},
        url: "/customer/DishesList",
        dataType:'json',
        success: function(data){
        	var ShopRecommendlist = document.getElementById("ShopRecommendlist");
        	var ShopRecommendlist_text="";
        	for(var i=0;i<data.length;i++){
        		ShopRecommendlist_text+='<li>'
        	          +'<div class="pic"><a href="#"  ><img src="'+data[i].pic+'" /></a><span><a href="#" >进入</a></span></div>'
        	          +'</li>';

        	}
        	ShopRecommendlist.innerHTML=ShopRecommendlist_text;
        }
   });
}