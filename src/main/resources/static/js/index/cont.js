//strat --个人信息
  function indexself(){
	  var showbox = document.getElementById("showbox");
      showbox.style.display='none';
	  $('#addcon').modal();
  }
  function addcon(){
		   var contname = $("#contname").val();
	       var contemail = $("#contemail").val();
	       var contnum = $("#contnum").val();
	       var contacademy = $("#contacademy").val();
	       var contclassname = $("#contclassname").val();
	       var contphone = $("#contphone").val();
	       
	       if(contname == "" || contname == undefined || contname == null){
		          return layer.msg('姓名不能为空', function(){
		              //关闭后的操作
		          });
		       }
	       if(contemail.indexOf("@")==-1){
		          return layer.msg('请填写正确的邮箱', function(){
		              //关闭后的操作
		          });
		       }
	       if(contnum == "" || contnum == undefined || contnum == null){
		          return layer.msg('学号不能为空', function(){
		              //关闭后的操作
		          });
		       }
	       
	       if(contacademy == "" || contacademy == undefined || contacademy == null){
		          return layer.msg('请选择学院', function(){
		              //关闭后的操作
		          });
		       }
	       if(contclassname == "" || contclassname == undefined || contclassname == null){
		          return layer.msg('班级不能为空', function(){
		              //关闭后的操作
		          });
		       }
	       if(contphone.length!=11){
	          return layer.msg('请填写正确的手机号', function(){
	              //关闭后的操作
	          });
	       } 
    	   $.ajax({
    		   async:false,
               type: "post",
               url:'/cont/pcontestant',
               data:$('#contForm').serialize(),// 你的formid
               success: function(data) {
            	   
                   if(data=="Ok"){
                       layer.msg('添加成功');
                       hiddenboxone();
                       window.location.reload();
                       $('#addcon').modal('hide');
                   }else{
                       layer.msg(data);
                       hiddenboxone();
                       $('#addcon').modal('hide');
                   }
               }
           });
       }
//去更新页面
  function updatecon(){
	    $.ajax({
           async:false,
           type : "get",
           url: "/cont/getoneconlogin",
           dataType:'json',
           success: function(data){
        	   if(data!=null && data!=""){
        		   $("#contid").val(data.id);
                   $("#contname").val(data.name);
                  
                   if(data.sex=="男"){
                	   document.getElementById('contsex1').checked = true;
                   }
                   if(data.sex=="女"){
                	   document.getElementById('contsex2').checked = true;
                   }
                   
                   $("#contemail").val(data.email);
                   $("#contnum").val(data.num);
                   document.getElementById("contacademy").value = data.academy;
                   //$("#contacademy").val(data.academy);
                   $("#contclassname").val(data.classname);
                   $("#contphone").val(data.phone);
                   $("#contqq").val(data.qq);
                   $("#contwechat").val(data.wechat);
               	   $('#addcon').modal();
        	   }else{
        		   layer.msg('请先填写个人信息！');
        	   }
              
           }
       });
  }
  //end --个人信息