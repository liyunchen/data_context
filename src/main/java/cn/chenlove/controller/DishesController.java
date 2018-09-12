package cn.chenlove.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;

import cn.chenlove.model.Dishes;
import cn.chenlove.model.Menu;
import cn.chenlove.service.DishesService;
import cn.chenlove.service.MenuService;

@Controller
@RequestMapping("/dishes")
public class DishesController {
       
	@Resource
	private  DishesService dishesService;
	@Resource
	private  MenuService menuService;
	
	
	//列表查询
	@ResponseBody
	@RequestMapping(value="/getAllList")
    public Map<String,Object> getAllList(Dishes dishes, String draw,
                                     @RequestParam(required = false, defaultValue = "1") int start,
                                     @RequestParam(required = false, defaultValue = "10") int length){
        Map<String,Object> map = new HashMap<>();
        PageInfo<Dishes> pageInfo = dishesService.selectDishesByPage(dishes, start, length);

        System.out.println("pageInfo.getTotal():"+pageInfo.getTotal());
        map.put("draw",draw);
        map.put("recordsTotal",pageInfo.getTotal());
        map.put("recordsFiltered",pageInfo.getTotal());
        map.put("data", pageInfo.getList());
        return map;
    }
	//菜单关键字条件列表查询
	@ResponseBody
	@RequestMapping(value="/conditiondishes")
    public Map<String,Object> conditiondishes(HttpServletRequest request,String shop_id,String conditiondishes,
                                     @RequestParam(required = false, defaultValue = "1") int currentpage,
                                     @RequestParam(required = false, defaultValue = "12") int length){
        Map<String,Object> map = new HashMap<>();
        PageInfo<Dishes> pageInfo = dishesService.selectDishesListByPage(shop_id,conditiondishes, currentpage, length);
        
        int totoldishes = dishesService.selectcountDishes(shop_id,conditiondishes, currentpage, length);
        int totalpage=0;
        if(totoldishes%length==0) {
        	totalpage = totoldishes/length;
        }else {
        	totalpage = totoldishes/length+1;
        }
        
        
        //System.out.println("pageInfo.getTotal():"+pageInfo.getTotal());
        map.put("currentpage",currentpage);
        map.put("Totalpage",totalpage);
        map.put("recordsFiltered",pageInfo.getTotal());
        map.put("totoldishes", totoldishes);
        map.put("data", pageInfo.getList());
        return map;
    }
	//菜品关键字条件列表查询
	@ResponseBody
	@RequestMapping(value="/disheslistbytype")
    public Map<String,Object> disheslistbytype(HttpServletRequest request,String shop_id,String type,
                                     @RequestParam(required = false, defaultValue = "1") int currentpage,
                                     @RequestParam(required = false, defaultValue = "12") int length){
        Map<String,Object> map = new HashMap<>();
        PageInfo<Dishes> pageInfo = dishesService.pselectDishesListByPage(shop_id,type, currentpage, length);
        
        int totoldishes = dishesService.pselectcountDishes(shop_id,type,currentpage, length);
        int totalpage = totoldishes/length+1;
        
        //System.out.println("pageInfo.getTotal():"+pageInfo.getTotal());
        map.put("currentpage",currentpage);
        map.put("Totalpage",totalpage);
        map.put("recordsFiltered",pageInfo.getTotal());
        map.put("totoldishes", totoldishes);
        map.put("data", pageInfo.getList());
        return map;
    }
	//添加
	@RequestMapping(value="/adddishes")
	@ResponseBody
	public String adddishes(Dishes dishes) {

		String string = "";
		if(dishes.getId()!=null && !dishes.getId().equals("")) {
		    string = dishesService.updateDishes(dishes);
		}else {
			string = dishesService.addDishes(dishes);
		}
		return string;
	}
	//获取种类
	@RequestMapping(value="/getMenuList")
	@ResponseBody
	public List<Menu> getMenuList(){
		List<Menu> list = menuService.getMenuList();
		return list;
	}
	
	//获取当前
	@RequestMapping(value="/getdishes")
	@ResponseBody
	public Dishes getdishes(String id) {
		Dishes  dishes  = dishesService.getDishes(id);
		return dishes;
	}
	//删除
	@RequestMapping(value="/deldishes")
	@ResponseBody
	public String delDishes(String id) {
		String string = dishesService.delDishes(id);
		return string;
	}
}
