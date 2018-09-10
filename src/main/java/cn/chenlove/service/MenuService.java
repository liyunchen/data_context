package cn.chenlove.service;

import java.util.List;

import com.github.pagehelper.PageInfo;

import cn.chenlove.model.Dishes;
import cn.chenlove.model.Menu;

public interface MenuService   extends IService<Menu> {
    //添加
	String addMenu(Menu menu);
    //获取当前
	Menu getMenu(String id);
	//更新
	String updateMenu(Menu menu);
	//列表查询
	PageInfo<Menu> selectMenuByPage(Menu menu, int start, int length);
	//删除
	String delMenu(String id);
	List<Menu> getMenuList();
	

}
