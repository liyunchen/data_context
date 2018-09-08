package cn.chenlove.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;

import cn.chenlove.mapper.BookingMapper;
import cn.chenlove.mapper.MenuMapper;
import cn.chenlove.mapper.SeatMapper;
import cn.chenlove.mapper.ShopMenuMapper;
import cn.chenlove.mapper.ShopSeatMapper;
import cn.chenlove.mapper.UserShopMapper;
import cn.chenlove.model.Booking;
import cn.chenlove.model.Menu;
import cn.chenlove.model.Seat;
import cn.chenlove.model.ShopMenu;
import cn.chenlove.model.ShopSeat;
import cn.chenlove.model.User;
import cn.chenlove.model.UserShop;
import cn.chenlove.service.BookingService;
import cn.chenlove.service.MenuService;
import cn.chenlove.service.SeatService;
import cn.chenlove.util.uuid_util;
import tk.mybatis.mapper.entity.Example;
@Service("bookingService")
public class BookingServiceImpl extends BaseService<Booking> implements BookingService {

	@Resource
	private BookingMapper bookingMapper;
	
	/*@Override
	public List<Booking> getAllBooking() {
		List<Booking> list= bookingMapper.getAllBooking();
		if(list!=null && list.size()>0) {
			for(Booking bk:list) {
				System.err.println(bk.toString());
			}
			return list;
		}
		return null;
	}
*/
	@Override
	public PageInfo<Booking> selectBookingByPage(Booking booking, int start, int length) {
			int page = start/length+1;
	       
	       /* Example example = new Example(Booking.class);
	        Example.Criteria criteria = example.createCriteria();
	        if (StringUtil.isNotEmpty(booking.getName())  && !booking.getName().equals("")) {
	            criteria.andLike("name", "%" + booking.getName() + "%");
	        }
	      */
	        //分页查询
	        PageHelper.startPage(page, length);
	        List<Booking> list= bookingMapper.getAllBooking(booking);
	        //List<Booking> list = selectByExample(example);
	        return new PageInfo<>(list);
		
	}

	@Override
	public String delBooking(String id) {
		int key = bookingMapper.deleteByPrimaryKey(id);
		if(key==1) {
			return "ok";
		}
		return null;
	}

	

}
