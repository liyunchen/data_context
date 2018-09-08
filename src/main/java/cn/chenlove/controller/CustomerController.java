package cn.chenlove.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/** 
* @author  作者 :李运辰 
* @date 创建时间：2018年8月30日 上午10:57:41 
* @Description: TODO(用一句话描述该文件做什么)
* @version 1.0 
* @parameter  
* @since  
* @return  
*/

@Controller
@RequestMapping("/customer")
public class CustomerController {
	
	
	@RequestMapping(value="/index")
	public String t1() {
		return "customer/index";
	}
	@RequestMapping(value="/myself")
	public String t2() {
		return "customer/myself";
	}
	@RequestMapping(value="/shopss")
	public String t3() {
		return "customer/shopss";
	}
	@RequestMapping(value="/ss")
	public String t4() {
		return "customer/ss";
	}

}
