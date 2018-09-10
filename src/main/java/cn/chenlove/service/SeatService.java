package cn.chenlove.service;

import java.util.List;

import com.github.pagehelper.PageInfo;

import cn.chenlove.model.Menu;
import cn.chenlove.model.Seat;

public interface SeatService   extends IService<Seat> {

	String addseat(String[] selects,int cell);
    /*//添加
	String addSeat(Menu menu);
    //获取当前
	Menu getMenu(String id);
	//更新
	String updateMenu(Menu menu);
	//列表查询
	PageInfo<Menu> selectMenuByPage(Menu menu, int start, int length);
	//删除
	String delMenu(String id);
	List<Menu> getMenuList();*/

	List<Seat> getAllSeat(int cell);

	String selectseat(String[] selects, String shop_id,String start, String end, int cell);

}
