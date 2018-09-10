package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.model.Seat;
import cn.chenlove.util.MyMapper;

public interface SeatMapper extends MyMapper<Seat> {

	void deletebyshop(String shopid);

	List<Seat> getAllSeat(Seat seat);

	void  selectseat(Seat seat);
}