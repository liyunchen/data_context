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

import cn.chenlove.model.Booking;
import cn.chenlove.model.Comment;
import cn.chenlove.model.Menu;
import cn.chenlove.model.Seat;
import cn.chenlove.service.BookingService;
import cn.chenlove.service.CommentService;
import cn.chenlove.service.MenuService;
import cn.chenlove.service.SeatService;

@Controller
@RequestMapping("/comment")
public class CommentController {
       
	@Resource
	private  CommentService commentService;
	
	
	/*@ResponseBody
	@RequestMapping(value="/addseat")
	public String  addseat(HttpServletRequest request,String[] selects,int cell){
		String string="";
		if(selects!=null) {
			for(String s :selects) {
				System.err.println(s);
			}
			string= seatService.addseat(selects,cell);	
		}
		
		
		
		return string;
	}*/
	
	
	
	//列表查询
	@ResponseBody
	@RequestMapping(value="/getAllList")
    public Map<String,Object> getAllList(Comment comment, String draw,
                                     @RequestParam(required = false, defaultValue = "1") int start,
                                     @RequestParam(required = false, defaultValue = "10") int length){
        Map<String,Object> map = new HashMap<>();
        PageInfo<Comment> pageInfo = commentService.selectCommentByPage(comment, start, length);
        System.out.println("pageInfo.getTotal():"+pageInfo.getTotal());
        map.put("draw",draw);
        map.put("recordsTotal",pageInfo.getTotal());
        map.put("recordsFiltered",pageInfo.getTotal());
        map.put("data", pageInfo.getList());
        return map;
    }
	//查看
	@RequestMapping(value="/getComment")
	@ResponseBody
	public Comment getComment(String id) {
		Comment comment  = commentService.getComment(id);
		return comment;
	}
	/*
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
	}*/
}
