package cn.chenlove.service;

import java.util.List;

import com.github.pagehelper.PageInfo;

import cn.chenlove.model.Booking;
import cn.chenlove.model.Comment;
import cn.chenlove.model.Menu;
import cn.chenlove.model.Seat;

public interface CommentService   extends IService<Comment> {

	//List<Comment> getAllComment(String shopid);
	PageInfo<Comment> selectCommentByPage(Comment comment, int start, int length);
	//String addseat(String[] selects,int cell);
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
	//String delBooking(String id);

	Comment getComment(String id);

	//List<Seat> getAllSeat(int cell);

}
