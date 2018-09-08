package cn.chenlove.controller;

import java.io.File;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import cn.chenlove.model.User;

@Controller
public class TestController {
    
	
	
	
    
	
	
	@PostMapping("/upload") // 等价于 @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public ModelAndView uplaod(HttpServletRequest req, @RequestParam("file") List<MultipartFile> pictureFiles, Model m) throws IllegalStateException, IOException {//1. 接受上传的文件  @RequestParam("file") MultipartFile file
		// 图片上传
        // 设置图片名称，不能重复，可以使用uuid
        ModelAndView model  = new ModelAndView();
        List<User> list  =new ArrayList<User>();
        //int count = pictureFiles.size();
        for(MultipartFile pictureFile:pictureFiles){
            User user = new User();
            System.err.println(pictureFiles.size());
            if(pictureFile.getOriginalFilename()==null||pictureFile.getOriginalFilename().equals("")){
                System.err.println("为空++++");
            }else{
            String picName = UUID.randomUUID().toString();
            // 获取文件名
            String oriName = pictureFile.getOriginalFilename();
                System.err.println(oriName+"图片名字");
            // 获取图片后缀
            String extName = oriName.substring(oriName.lastIndexOf("."));
                System.err.println("后缀名字"+extName);
            if(extName.equals(".jpg") || extName.equals(".JPG")  ||extName.equals(".png") ||  extName.equals(".PNG")){
            	String path = req.getSession().getServletContext().getRealPath("/");
                System.out.println("path="+path);
            	
                pictureFile.transferTo(new File(path+"upload/"+picName + extName));
                user.setUsername(picName + extName);
                //m.addAttribute("fileName"+count, picName + extName);
                //count--;
                list.add(user);
                
                // 设置图片名到商品中
                System.err.println("上传图片完成");
            }else {
                System.err.println("格式不对");
            }
 
            }
        }
        m.addAttribute("list", list);
        model.setViewName("common/upload");

        return model;
    }
	
	/**
     * 实现文件上传
	 * @throws IOException 
	 * @throws IllegalStateException 
     * */
    @RequestMapping(value="fileUpload",method = RequestMethod.POST)
    @ResponseBody 
    public String fileUpload(HttpServletRequest req,MultipartFile file) throws IllegalStateException, IOException{
    	if(file.getOriginalFilename()==null||file.getOriginalFilename().equals("")){
            System.err.println("为空++++");
            return null;
        }else{
	        String picName = UUID.randomUUID().toString().replace("-", "").toLowerCase();
	        // 获取文件名
	        String oriName = file.getOriginalFilename();
	            System.err.println(oriName+"图片名字");
	        // 获取图片后缀
	        String extName = oriName.substring(oriName.lastIndexOf("."));
	            System.err.println("后缀名字"+extName);
	        if(extName.equals(".jpg") || extName.equals(".JPG")  ||extName.equals(".png") ||  extName.equals(".PNG")){
	        	String path = req.getSession().getServletContext().getRealPath("/");
	            System.out.println("path="+path);
	        	
	            file.transferTo(new File(path+"upload/"+picName + oriName));
	            //user.setUsername(picName + extName);
	            //m.addAttribute("fileName"+count, picName + extName);
	            //count--;
	            //list.add(user);
	           
	            // 设置图片名到商品中
	            System.err.println("上传图片完成");
	            return picName+oriName;
	        }else {
	        	System.err.println("格式不对");
	        	return "格式不对"; 
	           
	        }
        }
        /*if(file.isEmpty()){
            return "false";
        }
        String fileName = file.getOriginalFilename();
        
        String path = System.getProperty("user.dir") + "/uploadFile" ;
        File dest = new File(path + "/" + fileName);
        if(!dest.getParentFile().exists()){ //判断文件父目录是否存在
            dest.getParentFile().mkdir();
        }
        try {
            file.transferTo(dest); //保存文件
            return "true";
        } catch (IllegalStateException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return "false";
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return "false";
        }*/
    }

	
	
	@RequestMapping(value="/up_load")
	 public ModelAndView test2() {
		 ModelAndView  model  = new ModelAndView();
		 model.setViewName("common/upload");
		 return model;
	 }
	 @RequestMapping(value="/test")
	 public ModelAndView test1() {
		 ModelAndView  model  = new ModelAndView();
		 model.addObject("name", "张三");
		 model.addObject("age", 13);
		 User user0 = new User();
		 user0.setId(0);
		 user0.setUsername("张三");
		 model.addObject("user", user0);
		 List<User> list = new ArrayList<User>();
		 for(int i =1;i<=5;i++) {
			 User user = new User();
			 user.setId(i);
			 user.setUsername("张三"+i);
			 list.add(user);
	     }
		 model.addObject("prods", list);
		 model.setViewName("test/test1");
		 return model;
	 }
	 
}
