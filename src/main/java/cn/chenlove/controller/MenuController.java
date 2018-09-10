package cn.chenlove.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;

import cn.chenlove.mapper.ShopMenuMapper;
import cn.chenlove.model.Dishes;
import cn.chenlove.model.Menu;
import cn.chenlove.model.ShopMenu;
import cn.chenlove.service.DishesService;
import cn.chenlove.service.MenuService;

@Controller
@RequestMapping("/menu")
public class MenuController {
       
	@Resource
	private  MenuService menuService;
	@Resource
	private ShopMenuMapper shopMenuMapper;
	@Resource
	private DishesService dishesService;
	
	
	//列表查询
	@ResponseBody
	@RequestMapping(value="/getAllList")
    public Map<String,Object> getAllList(Menu menu, String draw,
                                     @RequestParam(required = false, defaultValue = "1") int start,
                                     @RequestParam(required = false, defaultValue = "10") int length){
        Map<String,Object> map = new HashMap<>();
        PageInfo<Menu> pageInfo = menuService.selectMenuByPage(menu, start, length);
        System.out.println("pageInfo.getTotal():"+pageInfo.getTotal());
        map.put("draw",draw);
        map.put("recordsTotal",pageInfo.getTotal());
        map.put("recordsFiltered",pageInfo.getTotal());
        map.put("data", pageInfo.getList());
        return map;
    }
	
	//添加
	@RequestMapping(value="/addmenu")
	@ResponseBody
	public String addmenu(Menu menu) {
		System.err.println("menu="+menu.toString());
		String string = "";
		if(menu.getId()!=null && !menu.getId().equals("")) {
		    string = menuService.updateMenu(menu);
		}else {
			string = menuService.addMenu(menu);
		}
		return string;
	}
	
	
	//获取当前
	@RequestMapping(value="/getmenu")
	@ResponseBody
	public Menu getmenu(String id) {
		Menu  menu  = menuService.getMenu(id);
		return menu;
	}
	//删除
	@RequestMapping(value="/delmenu")
	@ResponseBody
	public String delMenu(String id) {
		String string = menuService.delMenu(id);
		return string;
	}
	
	//获取所有的菜品
	@RequestMapping(value="/getmenuList")
	@ResponseBody
	public List<Menu> getmenuList(String id) {
		List<ShopMenu> shopMenuList = shopMenuMapper.getShopMenuByid(id);
		if(shopMenuList!=null && shopMenuList.size()>0) {
			List<Menu>  list = new ArrayList<Menu>();
            for(ShopMenu shopMenu:shopMenuList) {
            	Menu menu= menuService.getMenu(shopMenu.getMenuId());
            	list.add(menu);
            }
            return list;
		}
		return null;
	}
	@RequestMapping(value="/getdishesList")
	@ResponseBody
	public List<Dishes> getdishesList(String id) {
		List<ShopMenu> shopMenuList = shopMenuMapper.getShopMenuByid(id);
		if(shopMenuList!=null && shopMenuList.size()>0) {
			List<Dishes>  list = new ArrayList<Dishes>();
            for(ShopMenu shopMenu:shopMenuList) {
            	List<Dishes> disheslist= dishesService.getByType(shopMenu.getMenuId());
            	if(disheslist!=null && disheslist.size()>0) {
            		for(Dishes dishes:disheslist) {
            			list.add(dishes);
            		}	
            	}
            }
            return list;
		}
		return null;
	}
}
