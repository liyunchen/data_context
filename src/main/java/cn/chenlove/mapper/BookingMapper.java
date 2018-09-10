package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.model.Booking;
import cn.chenlove.util.MyMapper;

public interface BookingMapper extends MyMapper<Booking> {

	List<Booking> getAllBooking(Booking booking);
	
	List<Booking> selectAllBooking();
}