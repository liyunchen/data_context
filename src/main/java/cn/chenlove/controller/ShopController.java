package cn.chenlove.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.chenlove.model.Shop;
import cn.chenlove.model.User;
import cn.chenlove.service.ShopService;

@Controller
@RequestMapping("/shop")
public class ShopController {
       
	@Resource
	private  ShopService shopService;
	
	//添加
	@RequestMapping(value="/addshop")
	@ResponseBody
	public String addshop(Shop shop) {
		if(shop.getId()!=null && !shop.getId().equals("")) {
			shopService.updateshop(shop);
		}else {
			shopService.addshop(shop);
		}
		
		return "ok";
	}
	
	//获取当前
	@RequestMapping(value="/getshop")
	@ResponseBody
	public Shop getshop() {
		Shop  shop  = shopService.getshop();
		return shop;
	}
}
