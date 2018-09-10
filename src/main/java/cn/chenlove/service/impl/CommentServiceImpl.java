package cn.chenlove.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;

import cn.chenlove.mapper.BookingMapper;
import cn.chenlove.mapper.CommentMapper;
import cn.chenlove.mapper.MenuMapper;
import cn.chenlove.mapper.SeatMapper;
import cn.chenlove.mapper.ShopMenuMapper;
import cn.chenlove.mapper.ShopSeatMapper;
import cn.chenlove.mapper.UserShopMapper;
import cn.chenlove.model.Booking;
import cn.chenlove.model.Comment;
import cn.chenlove.model.Menu;
import cn.chenlove.model.Seat;
import cn.chenlove.model.ShopMenu;
import cn.chenlove.model.ShopSeat;
import cn.chenlove.model.User;
import cn.chenlove.model.UserShop;
import cn.chenlove.service.BookingService;
import cn.chenlove.service.CommentService;
import cn.chenlove.service.MenuService;
import cn.chenlove.service.SeatService;
import cn.chenlove.util.uuid_util;
import tk.mybatis.mapper.entity.Example;
@Service("commentService")
public class CommentServiceImpl extends BaseService<Comment> implements CommentService {

	@Resource
	private CommentMapper commentMapper;
	@Resource
	private UserShopMapper userShopMapper;
	
	/*@Override
	public List<Comment> getAllComment(String shopid) {
		List<Comment> list=commentMapper.getAllComment(String shopid);
		if(list!=null && list.size()>0) {
			for(Comment bk:list) {
				System.err.println(bk.toString());
			}
			return list;
		}
		return null;
	}
*/
	@Override
	public PageInfo<Comment> selectCommentByPage(Comment comment, int start, int length) {
			int page = start/length+1;
	        //System.err.println(comment.toString());
	        /*Example example = new Example(Booking.class);
	        Example.Criteria criteria = example.createCriteria();
	        if (StringUtil.isNotEmpty(booking.getName())  && !booking.getName().equals("")) {
	            criteria.andLike("name", "%" + booking.getName() + "%");
	        }*/
	        
			User user = (User)SecurityUtils.getSubject().getPrincipal();
			UserShop userShop = userShopMapper.selectbyuserid(user.getId());
			comment.setShopid(userShop.getShopId());
	        //分页查询
	        PageHelper.startPage(page, length);
	        List<Comment> list= commentMapper.getAllComment(comment);
	        //List<Booking> list = selectByExample(example);
	        return new PageInfo<>(list);
		
	}

	@Override
	public Comment getComment(String id) {
		Comment comment = commentMapper.getComment(id);
		if(comment!=null) {
			return comment;
		}
		return null;
	}

	@Override
	public List<Comment> getnearbycomment() {
		// TODO Auto-generated method stub
		return commentMapper.getnearbycomment();
	}

	

	

}
