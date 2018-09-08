//上传附件

$('input[id="uploadcyefuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uploadcyefuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#insertcyefuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uploadcyifuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uploadcyifuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#insertcyifuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uploadonefuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uploadonefuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#insertonefuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uploadtwofuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uploadtwofuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#inserttwofuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uploadthreefuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uploadthreefuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#insertthreefuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
    				}
    				
    			}).fail(function(res) {
    				alert(res);
    				
    			});
     
  	  })
   
  	  
 //更新附件
  $('input[id="uuploadcyefuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uuploadcyefuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#updatecyefuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uuploadcyifuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uuploadcyifuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#updatecyifuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uuploadonefuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uuploadonefuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#updateonefuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uuploadtwofuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uuploadtwofuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#updatetwofuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  $('input[id="uuploadthreefuji"]').change(function(e){
	      var formData = new FormData();
			formData.append('file', $('#uuploadthreefuji')[0].files[0]);
			$.ajax({
			    url: '/fileUpload',
			    type: 'POST',
			    cache: false,
			    data: formData,
			    processData: false,
			    contentType: false
			}).done(function(res) {
				
				
				if(res!=null && res!="格式不对"){
					$('#updatethreefuji').val(res);
    				alert("上传成功---")
				}else{
					alert("上传失败---");
				}
				
			}).fail(function(res) {
				alert(res);
				
			});
 
  })
  
  function insertcye(){
	 var cfmcyetitle = $("#cfmcyetitle").val();
     var cfmcyeteacher = $("#cfmcyeteacher").val();
     var cfmcyejs = $("#cfmcyejs").val();
     var cfmcyecx = $("#cfmcyecx").val();
     var cfmcyekx = $("#cfmcyekx").val();
     var cfmcyeys = $("#cfmcyeys").val();
     if(cfmcyetitle == "" || cfmcyetitle == undefined || cfmcyetitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyeteacher == "" || cfmcyeteacher == undefined || cfmcyeteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyejs == "" || cfmcyejs == undefined || cfmcyejs == null){
         return layer.msg('js不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyecx == "" || cfmcyecx == undefined || cfmcyecx == null){
         return layer.msg('cx不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyekx == "" || cfmcyekx == undefined || cfmcyekx == null){
         return layer.msg('kx不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyeys == "" || cfmcyeys == undefined || cfmcyeys == null){
         return layer.msg('ys不能为空', function(){
             //关闭后的操作
         });
     }
     
	 $.ajax({
	  async:false,
         type: "post",
         url:'/tcye/ptcye',
         data:$('#tcyefrom').serialize(),// 你的formid
         success: function(data) {
        	 
             if(data=="ok"){
                 layer.msg('添加成功');
                 window.location.reload();
                 //$('#addttwomem').modal('hide');
             }else{
                 layer.msg('添加失败');
                // $('#addttwomem').modal('hide');
             } 
         }
     });
 }
 function insertcyi(){
	 var cfmcyititle = $("#cfmcyititle").val();
     var cfmcyiteacher = $("#cfmcyiteacher").val();
     var cfmcyicybj = $("#cfmcyicybj").val();
     var cfmcyisjwt = $("#cfmcyisjwt").val();
     var cfmcyikxls = $("#cfmcyikxls").val();

     if(cfmcyititle == "" || cfmcyititle == undefined || cfmcyititle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyiteacher == "" || cfmcyiteacher == undefined || cfmcyiteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyicybj == "" || cfmcyicybj == undefined || cfmcyicybj == null){
         return layer.msg('cybj不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyisjwt == "" || cfmcyisjwt == undefined || cfmcyisjwt == null){
         return layer.msg('sjwt不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmcyikxls == "" || cfmcyikxls == undefined || cfmcyikxls == null){
         return layer.msg('kxls不能为空', function(){
             //关闭后的操作
         });
     }
    
	 $.ajax({
	  async:false,
         type: "post",
         url:'/tcyi/ptcyi',
         data:$('#tcyifrom').serialize(),// 你的formid
         success: function(data) {
        	 if(data=="ok"){
                 layer.msg('添加成功');
                 window.location.reload();
                 //$('#addttwomem').modal('hide');
             }else{
                 layer.msg('添加失败');
                // $('#addttwomem').modal('hide');
             } 
         }
     });
 }
 function insertone(){
	 var cfmonetitle = $("#cfmonetitle").val();
     var cfmoneteacher = $("#cfmoneteacher").val();
     var cfmoneone = $("#cfmoneone").val();
     var cfmonetwo = $("#cfmonetwo").val();
     var cfmonethree = $("#cfmonethree").val();
     var cfmonefour = $("#cfmonefour").val();
     var cfmonefive = $("#cfmonefive").val();
     var cfmonesix = $("#cfmonesix").val();
     var cfmoneserven = $("#cfmoneserven").val();

     if(cfmonetitle == "" || cfmonetitle == undefined || cfmonetitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmoneteacher == "" || cfmoneteacher == undefined || cfmoneteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmoneone == "" || cfmoneone == undefined || cfmoneone == null){
         return layer.msg('one不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmonetwo == "" || cfmonetwo == undefined || cfmonetwo == null){
         return layer.msg('two不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmonethree == "" || cfmonethree == undefined || cfmonethree == null){
         return layer.msg('three不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmonefour == "" || cfmonefour == undefined || cfmonefour == null){
         return layer.msg('four不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmonefive == "" || cfmonefive == undefined || cfmonefive == null){
         return layer.msg('five不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmonesix == "" || cfmonesix == undefined || cfmonesix == null){
         return layer.msg('six不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmoneserven == "" || cfmoneserven == undefined || cfmoneserven == null){
         return layer.msg('serven不能为空', function(){
             //关闭后的操作
         });
     }
	 $.ajax({
	  async:false,
         type: "post",
         url:'/tone/ptone',
         data:$('#tonefrom').serialize(),// 你的formid
         success: function(data) {
        	 if(data=="ok"){
                 layer.msg('添加成功');
                 window.location.reload();
                 //$('#addttwomem').modal('hide');
             }else{
                 layer.msg('添加失败');
                // $('#addttwomem').modal('hide');
             } 
         }
     });
 }
 function inserttwo(){
	 var cfmtwotitle = $("#cfmtwotitle").val();
     var cfmtwoteacher = $("#cfmtwoteacher").val();
     var cfmtwoone = $("#cfmtwoone").val();
     var cfmtwotwo = $("#cfmtwotwo").val();
     var cfmtwothree = $("#cfmtwothree").val();
     var cfmtwofour = $("#cfmtwofour").val();
     var cfmtwofive = $("#cfmtwofive").val();
     var cfmtwocheckbox = $("#cfmtwocheckbox").val();
     var cfmtwosix = $("#cfmtwosix").val();
     

     if(cfmtwotitle == "" || cfmtwotitle == undefined || cfmtwotitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwoteacher == "" || cfmtwoteacher == undefined || cfmtwoteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwoone == "" || cfmtwoone == undefined || cfmtwoone == null){
         return layer.msg('one不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwotwo == "" || cfmtwotwo == undefined || cfmtwotwo == null){
         return layer.msg('two不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwothree == "" || cfmtwothree == undefined || cfmtwothree == null){
         return layer.msg('three不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwofour == "" || cfmtwofour == undefined || cfmtwofour == null){
         return layer.msg('four不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwofive == "" || cfmtwofive == undefined || cfmtwofive == null){
         return layer.msg('five不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwocheckbox == "" || cfmtwocheckbox == undefined || cfmtwocheckbox == null){
         return layer.msg('checkbox不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmtwosix == "" || cfmtwosix == undefined || cfmtwosix == null){
         return layer.msg('six不能为空', function(){
             //关闭后的操作
         });
     }
     
	 $.ajax({
	  async:false,
         type: "post",
         url:'/ttwo/pttwo',
         data:$('#ttwofrom').serialize(),// 你的formid
         success: function(data) {
        	 if(data=="ok"){
                 layer.msg('添加成功');
                 window.location.reload();
                 //$('#addttwomem').modal('hide');
             }else{
                 layer.msg('添加失败');
                // $('#addttwomem').modal('hide');
             } 
         }
     });
 }
 function insertthree(){
	 var cfmthreetitle = $("#cfmthreetitle").val();
     var cfmthreeteacher = $("#cfmthreeteacher").val();
     var cfmthreeone = $("#cfmthreeone").val();
     var cfmthreetwo = $("#cfmthreetwo").val();
     var cfmthreethree = $("#cfmthreethree").val();
     var cfmthreefour = $("#cfmthreefour").val();
     var cfmthreefive = $("#cfmthreefive").val();
     var cfmthreecheckbox = $("#cfmthreecheckbox").val();
     var cfmthreesix = $("#cfmthreesix").val();
     

     if(cfmthreetitle == "" || cfmthreetitle == undefined || cfmthreetitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreeteacher == "" || cfmthreeteacher == undefined || cfmthreeteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreeone == "" || cfmthreeone == undefined || cfmthreeone == null){
         return layer.msg('one不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreetwo == "" || cfmthreetwo == undefined || cfmthreetwo == null){
         return layer.msg('two不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreethree == "" || cfmthreethree == undefined || cfmthreethree == null){
         return layer.msg('three不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreefour == "" || cfmthreefour == undefined || cfmthreefour == null){
         return layer.msg('four不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreefive == "" || cfmthreefive == undefined || cfmthreefive == null){
         return layer.msg('five不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreecheckbox == "" || cfmthreecheckbox == undefined || cfmthreecheckbox == null){
         return layer.msg('checkbox不能为空', function(){
             //关闭后的操作
         });
     }
     if(cfmthreesix == "" || cfmthreesix == undefined || cfmthreesix == null){
         return layer.msg('six不能为空', function(){
             //关闭后的操作
         });
     }
	 $.ajax({
	  async:false,
         type: "post",
         url:'/tthree/ptthree',
         data:$('#tthreefrom').serialize(),// 你的formid
         success: function(data) {
        	 if(data=="ok"){
                 layer.msg('添加成功');
                 window.location.reload();
                 //$('#addttwomem').modal('hide');
             }else{
                 layer.msg('添加失败');
                // $('#addttwomem').modal('hide');
             } 
         }
     });
 }
 ////////////////////////////////
 function about(){
	 document.getElementById('about').style.display='block';
	 document.getElementById('cyefrom').style.display='none';
	 //document.getElementById('cyefrom').focus();
	 document.getElementById('cyifrom').style.display='none';
	 document.getElementById('onefrom').style.display='none';
	 document.getElementById('twofrom').style.display='none';
	 document.getElementById('threefrom').style.display='none';
	 document.getElementById('morelist').style.display='none';
   
     }
     function cye(){
    	 document.getElementById('about').style.display='none';
	 document.getElementById('cyefrom').style.display='block';
	 //document.getElementById('cyefrom').focus();
	 document.getElementById('cyifrom').style.display='none';
	 document.getElementById('onefrom').style.display='none';
	 document.getElementById('twofrom').style.display='none';
	 document.getElementById('threefrom').style.display='none';
	 document.getElementById('morelist').style.display='none';
   
     }
     function cyi(){
    	 document.getElementById('about').style.display='none';
	 document.getElementById('cyefrom').style.display='none';
	 document.getElementById('cyifrom').style.display='block';
	 //document.getElementById('cyifrom').focus();
	 document.getElementById('onefrom').style.display='none';
	 document.getElementById('twofrom').style.display='none';
	 document.getElementById('threefrom').style.display='none';
	 document.getElementById('morelist').style.display='none';
 }
 function one(){
	 document.getElementById('about').style.display='none';
	 document.getElementById('cyefrom').style.display='none';
	 document.getElementById('cyifrom').style.display='none';
	 document.getElementById('onefrom').style.display='block';
	 //document.getElementById('onefrom').focus();
	 document.getElementById('twofrom').style.display='none';
	 document.getElementById('threefrom').style.display='none';
	 document.getElementById('morelist').style.display='none';
 }
 function two(){
	 document.getElementById('about').style.display='none';
	 document.getElementById('cyefrom').style.display='none';
	 document.getElementById('cyifrom').style.display='none';
	 document.getElementById('onefrom').style.display='none';
	 document.getElementById('twofrom').style.display='block';
	 //document.getElementById('twofrom').focus();
	 document.getElementById('threefrom').style.display='none';
	 document.getElementById('morelist').style.display='none';
 }
 function three(){
	 document.getElementById('about').style.display='none';
	 document.getElementById('cyefrom').style.display='none';
	 document.getElementById('cyifrom').style.display='none';
	 document.getElementById('onefrom').style.display='none';
	 document.getElementById('twofrom').style.display='none';
	 document.getElementById('threefrom').style.display='block';
	 document.getElementById('morelist').style.display='none';
	 //document.getElementById('threefrom').focus();
 }
 //获取当前用户所有的作品
 $("#buttonfrom").on("click",function(){
	
     var listtable = document.getElementById("listtable");
	 var text ='<tr align="center" >            '
		       +' <th>作品名称</t>'
		       +' <th>队员1</th> '
		       +' <th>手机</th>  '
		       +' <th>队员2</th> '
		       +' <th>手机</th>  '     
		       +' <th>队员3</th> '
		       +' <th>手机</th>  '
		       +' <th>队员4</th> '
		       +' <th>手机</th>  '
		       +' <th>队员5</th> '
		       +' <th>手机</th>  '
		       +' <th>队员6</th> '
		       +' <th>手机</th>  '
		       +' <th  >操作</th>  '
		       +'</tr>            ';
   
	 var a =$('#wherefrom').val();
	
	 if(a!="请选择比赛"){
		 $.ajax({
             async:false,
             type : "get",	
             url: "/cont/gettitle",
             data:{"type":a},
             dataType:'json',
             success: function(data){
            	 var b="(\"";
    
            	 //alert(data.tCyelist[0].id);
            	 if(data!=null && data.tlist.length>0){
            		 for(var k =0;k<data.tlist.length;k++){
            		     
	            		 text+='<tr class="success" >'
				               +'<td >'+data.tlist[k].title+'</td>  '
				               +'<td >'+data.memberlist[k].name1+'</td>  '
				               +'<td >'+data.memberlist[k].phone1+'</td> '
				               +'<td >'+data.memberlist[k].name2+'</td>  '
				               +'<td >'+data.memberlist[k].phone2+'</td> '
				               +'<td >'+data.memberlist[k].name3+'</td>  '
				               +'<td >'+data.memberlist[k].phone3+'</td> '
				               +'<td >'+data.memberlist[k].name4+'</td>  '
				               +'<td >'+data.memberlist[k].phone4+'</td> '
				               +'<td >'+data.memberlist[k].name5+'</td>  '
				               +'<td >'+data.memberlist[k].phone5+'</td> '
				               +'<td >'+data.memberlist[k].name6+'</td>  '
				               +'<td >'+data.memberlist[k].phone6+'</td> '
				               +'<td >                                '
				               +'   <input type="button" class="btn btn-info"   onclick=updatemem'+b+''+data.memberlist[k].id+'");    value="修改队员"/>'
				               +'   <input type="button"  class="btn btn-success"  onclick=updatet'+a+'("'+data.tlist[k].id+'");   value="修改作品"/>'
				               +'   <input type="button" class="btn btn-danger"  onclick=delt'+a+'("'+data.tlist[k].id+'");   value="删除"/>'
				               +'</td>'
				               +'</tr>';
	            	 }
            	 }
            	listtable.innerHTML=text; 
             }
         });
	 }   
 });
 //显示隐藏的首页
 function hiddenboxone(){
	 var showbox = document.getElementById("showbox");
     showbox.style.display='block';
     }
   //更新信息
 function addmem(){
   $.ajax({
	   async:false,
         type: "post",
         url:'/mem/updatemem',
         data:$('#memForm').serialize(),// 你的formid
         success: function(data) {
             if(data=="Ok"){
                 layer.msg('修改成功');
                 hiddenboxone();
                 window.location.reload();
                 $('#addmem').modal('hide');
             }else{
                 layer.msg('修改失败');
                 hiddenboxone();
                 $('#addmem').modal('hide');
                 }
             }
         });
     }
   //去更新页面
 function updatemem(id){

   //id =  id.replace(/\s|\xA0/g,"");
   //alert(id); 
    $.ajax({
          async:false,
          type : "get",
          data:{id:id},
          url: "/mem/getonemem",
          dataType:'json',
          success: function(data){
              $("#memid").val(data.id);
              $("#name1").val(data.name1);
              $("#phone1").val(data.phone1);
              $("#name2").val(data.name2);
              $("#phone2").val(data.phone2);
              $("#name3").val(data.name3);
              $("#phone3").val(data.phone3);
              $("#name4").val(data.name4);
              $("#phone4").val(data.phone4);
              $("#name5").val(data.name5);
              $("#phone5").val(data.phone5);
              $("#name6").val(data.name6);
              $("#phone6").val(data.phone6);
              var showbox = document.getElementById("showbox");
              showbox.style.display='none';
          	  $('#addmem').modal();
          }
      });
 }
 
 function morelist(){
	 document.getElementById('about').style.display='none';
	 document.getElementById('cyefrom').style.display='none';
	 document.getElementById('cyifrom').style.display='none';
	 document.getElementById('onefrom').style.display='none';
	 document.getElementById('twofrom').style.display='none';
	 document.getElementById('threefrom').style.display='nono';
	 document.getElementById('morelist').style.display='block';
     }
     
   //作品更新与删除
 //------------作品----------
 //更新信息
 function addtcye(){
  var cyetitle = $("#cyetitle").val();
     var cyeteacher = $("#cyeteacher").val();
     var cyejs = $("#cyejs").val();
     var cyecx = $("#cyecx").val();
     var cyekx = $("#cyekx").val();
     var cyeys = $("#cyeys").val();
     if(cyetitle == "" || cyetitle == undefined || cyetitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyeteacher == "" || cyeteacher == undefined || cyeteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyejs == "" || cyejs == undefined || cyejs == null){
         return layer.msg('js不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyecx == "" || cyecx == undefined || cyecx == null){
         return layer.msg('cx不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyekx == "" || cyekx == undefined || cyekx == null){
         return layer.msg('kx不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyeys == "" || cyeys == undefined || cyeys == null){
         return layer.msg('ys不能为空', function(){
             //关闭后的操作
         });
     }
   $.ajax({
	   async:false,
         type: "post",
         url:'/tcye/updatetcye',
         data:$('#tcyeForm').serialize(),// 你的formid
         success: function(data) {
             if(data=="Ok"){
                 layer.msg('修改成功');
                 hiddenboxone();
                 window.location.reload();
                 $('#addtcye').modal('hide');
             }else{
                 layer.msg('修改失败');
                 hiddenboxone();
                 $('#addtcye').modal('hide');
             }
         }
     });
 }
 //去更新页面
 function updatetcye(id){
  
    $.ajax({
          async:false,
          type : "get",
          data:{id:id},
          url: "/tcye/getonetcyelogin",
          dataType:'json',
          success: function(data){
       	 
              $("#cyeid").val(data.id);
              $("#cyetitle").val(data.title);
              $("#cyeteacher").val(data.teacher);
              $("#cyetphone").val(data.tphone);
              $("#cyejs").val(data.js);
              $("#cyecx").val(data.cx);
              $("#cyekx").val(data.kx);
              $("#cyeys").val(data.ys);
              //$("#cyefuji").val(data.fuji);
              $('#cyefuji').attr('href',"/upload/"+data.fuji);
              $("#cyefuji").text(data.fuji);
              var showbox = document.getElementById("showbox");
              showbox.style.display='none';
          	   $("#addtcye").modal();
          }
      });
 }
 //删除
 function deltcye(id){
   layer.confirm('您确定要删除信息吗？', {
         btn: ['确认','取消'] //按钮
     }, function(){
         $.ajax({
             cache: true,
             type: "POST",
             url:'/tcye/del',
             data:{id:id},
             async: false,
             success: function(data) {
                 if(data=="Ok"){
                     layer.msg('删除成功');
                     window.location.reload();
                 }else{
                     layer.msg('删除失败');
                     }
                 }
             });
         });
     }
   //------------作品----------
 //更新信息
 function addtcyi(){
  var cyititle = $("#cyititle").val();
     var cyiteacher = $("#cyiteacher").val();
     var cyicybj = $("#cyicybj").val();
     var cyisjwt = $("#cyisjwt").val();
     var cyikxls = $("#cyikxls").val();

     if(cyititle == "" || cyititle == undefined || cyititle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyiteacher == "" || cyiteacher == undefined || cyiteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyicybj == "" || cyicybj == undefined || cyicybj == null){
         return layer.msg('cybj不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyisjwt == "" || cyisjwt == undefined || cyisjwt == null){
         return layer.msg('sjwt不能为空', function(){
             //关闭后的操作
         });
     }
     if(cyikxls == "" || cyikxls == undefined || cyikxls == null){
         return layer.msg('kxls不能为空', function(){
             //关闭后的操作
         });
     }
   $.ajax({
	   async:false,
         type: "post",
         url:'/tcyi/updatetcyi',
         data:$('#tcyiForm').serialize(),// 你的formid
         success: function(data) {
             if(data=="Ok"){
                 layer.msg('修改成功');
                 window.location.reload();
                 hiddenboxone();
                 $('#addtcyi').modal('hide');
             }else{
                 layer.msg('修改失败');
                 hiddenboxone();
                 $('#addtcyi').modal('hide');
             }
         }
     });
 }
 //去更新页面
 function updatetcyi(id){

    $.ajax({
          async:false,
          type : "get",
          data:{id:id},
          url: "/tcyi/getonetcyilogin",
          dataType:'json',
          success: function(data){
              $("#cyiid").val(data.id);
              $("#cyititle").val(data.title);
              $("#cyiteacher").val(data.teacher);
              $("#cyitphone").val(data.tphone);
              $("#cyicybj").val(data.cybj);
              $("#cyisjwt").val(data.sjwt);
              $("#cyikxls").val(data.kxls);
              //$("#cyifuji").val(data.fuji);
              $('#cyifuji').attr('href',"/upload/"+data.fuji);
              $("#cyifuji").text(data.fuji);
              var showbox = document.getElementById("showbox");
              showbox.style.display='none';
          	   $('#addtcyi').modal();
          }
      });
 }
 //删除
 function deltcyi(id){
   layer.confirm('您确定要删除信息吗？', {
         btn: ['确认','取消'] //按钮
     }, function(){
         $.ajax({
             cache: true,
             type: "POST",
             url:'/tcyi/del',
             data:{id:id},
             async: false,
             success: function(data) {
                 if(data=="Ok"){
                     layer.msg('删除成功');
                     window.location.reload();
                 }else{
                     layer.msg('删除失败');
                     }
                 }
             });
         });
     }
   //------------作品----------
 //更新信息
 function addtone(){
  var onetitle = $("#onetitle").val();
     var oneteacher = $("#oneteacher").val();
     var oneone = $("#oneone").val();
     var onetwo = $("#onetwo").val();
     var onethree = $("#onethree").val();
     var onefour = $("#onefour").val();
     var onefive = $("#onefive").val();
     var onesix = $("#onesix").val();
     var oneserven = $("#oneserven").val();

     if(onetitle == "" || onetitle == undefined || onetitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(oneteacher == "" || oneteacher == undefined || oneteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(oneone == "" || oneone == undefined || oneone == null){
         return layer.msg('one不能为空', function(){
             //关闭后的操作
         });
     }
     if(onetwo == "" || onetwo == undefined || onetwo == null){
         return layer.msg('two不能为空', function(){
             //关闭后的操作
         });
     }
     if(onethree == "" || onethree == undefined || onethree == null){
         return layer.msg('three不能为空', function(){
             //关闭后的操作
         });
     }
     if(onefour == "" || onefour == undefined || onefour == null){
         return layer.msg('four不能为空', function(){
             //关闭后的操作
         });
     }
     if(onefive == "" || onefive == undefined || onefive == null){
         return layer.msg('five不能为空', function(){
             //关闭后的操作
         });
     }
     if(onesix == "" || onesix == undefined || onesix == null){
         return layer.msg('six不能为空', function(){
             //关闭后的操作
         });
     }
     if(oneserven == "" || oneserven == undefined || oneserven == null){
         return layer.msg('serven不能为空', function(){
             //关闭后的操作
         });
     }
   $.ajax({
	   async:false,
         type: "post",
         url:'/tone/updatetone',
         data:$('#toneForm').serialize(),// 你的formid
         success: function(data) {
             if(data=="Ok"){
                 layer.msg('修改成功');
                 hiddenboxone();
                 window.location.reload();
                 $('#addtone').modal('hide');
             }else{
                 layer.msg('修改失败');
                 hiddenboxone();
                 $('#addtone').modal('hide');
             }
         }
     });
 }
 //去更新页面
 function updatetone(id){
    $.ajax({
          async:false,
          type : "get",
          data:{id:id},
          url: "/tone/getonetonelogin",
          dataType:'json',
          success: function(data){
              $("#oneid").val(data.id);
              $("#onetitle").val(data.title);
              $("#oneteacher").val(data.teacher);
              $("#onetphone").val(data.tphone);
              $("#oneone").val(data.one);
              $("#onetwo").val(data.two);
              $("#onethree").val(data.three);
              $("#onefour").val(data.four);
              $("#onefive").val(data.five);
              $("#onesix").val(data.six);
              $("#oneserven").val(data.serven);
              //$("#onefuji").val(data.fuji);
              $('#onefuji').attr('href',"/upload/"+data.fuji);
              $("#onefuji").text(data.fuji);
              var showbox = document.getElementById("showbox");
              showbox.style.display='none';
          	$('#addtone').modal();
          }
      });
 }
 //删除
 function deltone(id){
   layer.confirm('您确定要删除信息吗？', {
         btn: ['确认','取消'] //按钮
     }, function(){
         $.ajax({
             cache: true,
             type: "POST",
             url:'/tone/del',
             data:{id:id},
             async: false,
             success: function(data) {
                 if(data=="Ok"){
                     layer.msg('删除成功');
                     window.location.reload();
                 }else{
                     layer.msg('删除失败');
                     }
                 }
             });
         });
     }
   //------------作品----------
 //更新信息
 function addttwo(){
  var twotitle = $("#twotitle").val();
     var twoteacher = $("#twoteacher").val();
     var twoone = $("#twoone").val();
     var twotwo = $("#twotwo").val();
     var twothree = $("#twothree").val();
     var twofour = $("#twofour").val();
     var twofive = $("#twofive").val();
     var twocheckbox = $("#twocheckbox").val();
     var twosix = $("#twosix").val();
     

     if(twotitle == "" || twotitle == undefined || twotitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(twoteacher == "" || twoteacher == undefined || twoteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(twoone == "" || twoone == undefined || twoone == null){
         return layer.msg('one不能为空', function(){
             //关闭后的操作
         });
     }
     if(twotwo == "" || twotwo == undefined || twotwo == null){
         return layer.msg('two不能为空', function(){
             //关闭后的操作
         });
     }
     if(twothree == "" || twothree == undefined || twothree == null){
         return layer.msg('three不能为空', function(){
             //关闭后的操作
         });
     }
     if(twofour == "" || twofour == undefined || twofour == null){
         return layer.msg('four不能为空', function(){
             //关闭后的操作
         });
     }
     if(twofive == "" || twofive == undefined || twofive == null){
         return layer.msg('five不能为空', function(){
             //关闭后的操作
         });
     }
     if(twocheckbox == "" || twocheckbox == undefined || twocheckbox == null){
         return layer.msg('checkbox不能为空', function(){
             //关闭后的操作
         });
     }
     if(twosix == "" || twosix == undefined || twosix == null){
         return layer.msg('six不能为空', function(){
             //关闭后的操作
         });
     }
   $.ajax({
	   async:false,
         type: "post",
         url:'/ttwo/updatettwo',
         data:$('#ttwoForm').serialize(),// 你的formid
         success: function(data) {
             if(data=="Ok"){
                 layer.msg('修改成功');
                 hiddenboxone();
                 window.location.reload();
                 $('#addttwo').modal('hide');
             }else{
                 layer.msg('修改失败');
                 hiddenboxone();
                 $('#addttwo').modal('hide');
             }
         }
     });
 }
 //去更新页面
 function updatettwo(id){
    $.ajax({
          async:false,
          type : "get",
          data:{id:id},
          url: "/ttwo/getonettwologin",
          dataType:'json',
          success: function(data){
              $("#twoid").val(data.id);
              $("#twotitle").val(data.title);
              $("#twoteacher").val(data.teacher);
              $("#twotphone").val(data.tphone);
              $("#twoone").val(data.one);
              $("#twotwo").val(data.two);
              $("#twothree").val(data.three);
              $("#twofour").val(data.four);
              $("#twofive").val(data.five);
              $("#twosix").val(data.six);
              $("#twocheckbox").val(data.checkbox);
              //$("#twofuji").val(data.fuji);
              $('#twofuji').attr('href',"/upload/"+data.fuji);
              $("#twofuji").text(data.fuji);
              var showbox = document.getElementById("showbox");
              showbox.style.display='none';
          	$('#addttwo').modal();
          }
      });
 }
 //删除
 function delttwo(id){
   layer.confirm('您确定要删除信息吗？', {
         btn: ['确认','取消'] //按钮
     }, function(){
         $.ajax({
             cache: true,
             type: "POST",
             url:'/ttwo/del',
             data:{id:id},
             async: false,
             success: function(data) {
                 if(data=="Ok"){
                     layer.msg('删除成功');
                     window.location.reload();
                 }else{
                     layer.msg('删除失败');
                     }
                 }
             });
         });
     }
   //------------作品----------
 //更新信息
 function addtthree(){
  var threetitle = $("#threetitle").val();
     var threeteacher = $("#threeteacher").val();
     var threeone = $("#threeone").val();
     var threetwo = $("#threetwo").val();
     var threethree = $("#threethree").val();
     var threefour = $("#threefour").val();
     var threefive = $("#threefive").val();
     var threecheckbox = $("#threecheckbox").val();
     var threesix = $("#threesix").val();
     

     if(threetitle == "" || threetitle == undefined || threetitle == null){
         return layer.msg('作品名称不能为空', function(){
             //关闭后的操作
         });
     }
     if(threeteacher == "" || threeteacher == undefined || threeteacher == null){
         return layer.msg('指导老师不能为空', function(){
             //关闭后的操作
         });
     }
     if(threeone == "" || threeone == undefined || threeone == null){
         return layer.msg('one不能为空', function(){
             //关闭后的操作
         });
     }
     if(threetwo == "" || threetwo == undefined || threetwo == null){
         return layer.msg('two不能为空', function(){
             //关闭后的操作
         });
     }
     if(threethree == "" || threethree == undefined || threethree == null){
         return layer.msg('three不能为空', function(){
             //关闭后的操作
         });
     }
     if(threefour == "" || threefour == undefined || threefour == null){
         return layer.msg('four不能为空', function(){
             //关闭后的操作
         });
     }
     if(threefive == "" || threefive == undefined || threefive == null){
         return layer.msg('five不能为空', function(){
             //关闭后的操作
         });
     }
     if(threecheckbox == "" || threecheckbox == undefined || threecheckbox == null){
         return layer.msg('checkbox不能为空', function(){
             //关闭后的操作
         });
     }
     if(threesix == "" || threesix == undefined || threesix == null){
         return layer.msg('six不能为空', function(){
             //关闭后的操作
         });
     }
   $.ajax({
	   async:false,
         type: "post",
         url:'/tthree/updatetthree',
         data:$('#tthreeForm').serialize(),// 你的formid
         success: function(data) {
             if(data=="Ok"){
                 layer.msg('修改成功');
                 hiddenboxone();
                 window.location.reload();
                 $('#addtthree').modal('hide');
             }else{
                 layer.msg('修改失败');
                 hiddenboxone();
                 $('#addtthree').modal('hide');
             }
         }
     });
 }
 //去更新页面
 function updatetthree(id){
    $.ajax({
          async:false,
          type : "get",
          data:{id:id},
          url: "/tthree/getonetthreelogin",
          dataType:'json',
          success: function(data){
              $("#threeid").val(data.id);
              $("#threetitle").val(data.title);
              $("#threeteacher").val(data.teacher);
              $("#threetphone").val(data.tphone);
              $("#threeone").val(data.one);
              $("#threetwo").val(data.two);
              $("#threethree").val(data.three);
              $("#threefour").val(data.four);
              $("#threefive").val(data.five);
              $("#threesix").val(data.six);
              $("#threecheckbox").val(data.checkbox);
              //$("#threefuji").val(data.fuji);
              $('#threefuji').attr('href',"/upload/"+data.fuji);
              $("#threefuji").text(data.fuji);
              var showbox = document.getElementById("showbox");
              showbox.style.display='none';
          	$('#addtthree').modal();
          }
      });
 }
 //删除
 function deltthree(id){
   layer.confirm('您确定要删除信息吗？', {
         btn: ['确认','取消'] //按钮
     }, function(){
         $.ajax({
             cache: true,
             type: "POST",
             url:'/tthree/del',
             data:{id:id},
             async: false,
             success: function(data) {
                 if(data=="Ok"){
                     layer.msg('删除成功');
                     window.location.reload();
                 }else{
                     layer.msg('删除失败');
                 }
             }
         });
     });
 }