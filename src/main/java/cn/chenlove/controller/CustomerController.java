package cn.chenlove.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.chenlove.model.Booking;
import cn.chenlove.model.Comment;
import cn.chenlove.model.Dishes;
import cn.chenlove.model.Menu;
import cn.chenlove.model.Shop;
import cn.chenlove.service.BookingService;
import cn.chenlove.service.CommentService;
import cn.chenlove.service.DishesService;
import cn.chenlove.service.MenuService;
import cn.chenlove.service.ShopService;

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
	
	@Resource
	private DishesService dishesService;
	@Resource
	private ShopService  shopService;
	@Resource
	private BookingService bookingService;
	@Resource
	private CommentService commentService;
	
	
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
	@RequestMapping(value="/seatlist")
	public String t5() {
		return "customer/seatlist";
	}
    
	
	
	//进入店铺
	@ResponseBody
	@RequestMapping(value="/goshopss")
	public ModelAndView goshopss(String id) {
		Shop  shop = shopService.getshopbyid(id);
		ModelAndView model = new ModelAndView();
		model.setViewName("customer/shopss");
		model.addObject("shop",shop);
		return model;
	}
	
	
	
	
	//导航栏
	@ResponseBody
	@RequestMapping(value="/DishesList")
	public List<Dishes> DishesList(){
		return dishesService.getDishesList();
	}
	//预约店铺记录
	@ResponseBody
	@RequestMapping(value="/BookingShopList")
	public List<Shop> BookingShopList(){
		return shopService.getShopList();
	}
	
	//附近预约
	@ResponseBody
	@RequestMapping(value="/nearbybooking")
	public List<Booking> nearbybooking() {
		return bookingService.getbooking();
	}
	
	//附近预约
	@ResponseBody
	@RequestMapping(value="/nearbycomment")
	public List<Comment> nearbycomment() {
		return commentService.getnearbycomment();
	}
	
}
