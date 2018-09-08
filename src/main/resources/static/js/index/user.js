//页面自动执行
var username ="请登录";
  window.onload = function(){
	  $.ajax({
		  async:false,
          type: "get",
          url:'/getlogin',
          //data:$('#ttwomemForm').serialize(),// 你的formid
          success: function(data) {
        	  //alert(data.username);
        	  if(data.username!=null  && data.username!="" ){
        		  username = data.username;
        		  var dropdown = document.getElementById("dropdown");
        		  var text = '<ul class="menulist" >'
	                +'<li  onclick="morelist();">已申报比赛</li><br>'
	                +'<li  onclick="updatecon();">修改个人信息</li><br>'
	                +'<li  onclick="updatelogin();">修改账号信息</li><br>'
	                +'<li id="logout"  onclick="logoutuser();">退出</li><br>'
	                +'</ul>';
	                dropdown.innerHTML =dropdown.innerHTML+text; 
        	  }
        	  
        	  document.getElementById("loginname").innerText  =username;
              /* if(data=="Ok"){
                  layer.msg('修改成功');
                  window.location.reload();
                  $('#addttwomem').modal('hide');
              }else{
                  layer.msg('修改失败');
                  $('#addttwomem').modal('hide');
              } */
          }
      });
  }
  
//strar ---注册
  $("#resuseruser").on("click",function(){
	   $('#loginuser').modal('hide');
	   $('#resuser').modal();
   });
  $("#tologin").on("click",function(){
	   $('#loginuser').modal();
	   $('#resuser').modal('hide');
  });
  function addUser() {
      var username = $("#resusername").val();
      var password = $("#respassword").val();
      var conpassword = $("#conpassword").val();
      
      if(username == "" || username == undefined || username == null){
          return layer.msg('用户名不能为空', function(){
              //关闭后的操作
          });
      }
      if(password.length<6||password.length>=16){
          return layer.msg('密码长度为6-16', function(){
              //关闭后的操作
          });
      }
      if(password!=conpassword){
    	  return layer.msg('两次密码不一样', function(){
              //关闭后的操作
          });
      }

      $.ajax({
          cache: true,
          type: "POST",
          url:'users/resadd',
          data:$('#resForm').serialize(),// 你的formid
          async: false,
          success: function(data) {
              if(data=="success"){
                  layer.msg('注册成功');
                  $('#loginuser').modal();
           	      $('#resuser').modal('hide');
                  
              }else if(data="error"){
                  layer.msg('该用户已存在');
                  //$('#addUser').modal('hide');
              }else{
                  layer.msg('注册失败');
                  //$('#addUser').modal('hide');
              }
          }
      });
  }
  //end   ---注册
  //start  --修改账号信息
  //获取账号信息
  function updatelogin(){
	  $.ajax({
          async:false,
          type : "get",
          url: "/users/getuser",
          dataType:'json',
          success: function(data){
       	      if(data!=null && data!=""){
       		      $("#uid").val(data.id);
                  $("#uusername").val(data.username);
                  $('#updateuser').modal();
       	      } 
          }
      });
  }
  //更新账号信息
  function updateUser(){
	  var uusername = $("#uusername").val();
      var opassword = $("#opassword").val();
      var upassword = $("#upassword").val();
      if(uusername == "" || uusername == undefined || uusername == null){
          return layer.msg('用户名不能为空', function(){
              //关闭后的操作
          });
      }
      if(opassword == "" || opassword == undefined || opassword == null){
          return layer.msg('密码不能为空', function(){
              //关闭后的操作
          });
      }
      if(upassword.length<6||upassword.length>=16){
          return layer.msg('新密码长度为6-16', function(){
              //关闭后的操作
          });
      }
	  $.ajax({
		   async:false,
          type: "post",
          url:'/users/updateuser',
          data:$('#updateuserForm').serialize(),// 你的formid
          success: function(data) {
              if(data=="ok"){
            	  $.ajax({
           		   async:false,
                      type: "post",
                      url:'/logout',
                      success: function(data) {
                              layer.msg('退出成功');                   
                              window.location.reload();
                      }
                  });
              }else{
                  layer.msg(data);
                  //$('#loginuser').modal('hide');
              }
          }
      });
  }
 /*  $("#updatelogin").on("click",function(){
	   
   }); */
  //end    --修改账号信息  
  //start ---登录
   $("#loginname").on("click",function(){
	   $('#loginuser').modal();
   });
   function loginuser(){
	   
	    var loginusername = $("#loginusername").val();
	    var loginpassword = $("#loginpassword").val();
	    if(loginusername == "" || loginusername == undefined || loginusername == null){
	          return layer.msg('用户名不能为空', function(){
	              //关闭后的操作
	          });
	    }
	    if(loginpassword == "" || loginpassword == undefined || loginpassword == null){
	          return layer.msg('密码不能为空', function(){
	              //关闭后的操作
	          });
	    }
	   $.ajax({
		   async:false,
           type: "post",
           url:'/loginuser',
           data:$('#userForm').serialize(),// 你的formid
           success: function(data) {
               if(data=="ok"){
                   layer.msg('登录成功');                   
                   $('#loginuser').modal('hide');
                   window.location.reload();
               }else{
                   layer.msg(data);
                   //$('#loginuser').modal('hide');
               }
           }
       });
   }
   //退出登录
   function logoutuser(){
	   $.ajax({
		   async:false,
           type: "post",
           url:'/logout',
           success: function(data) {
                   layer.msg('退出成功');                   
                   window.location.reload();
           }
       });
   } 
    //end ---登录  
 