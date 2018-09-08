package cn.chenlove.mapper;

import cn.chenlove.model.UserShop;
import cn.chenlove.util.MyMapper;

public interface UserShopMapper extends MyMapper<UserShop> {
    //通过userid查询
	UserShop selectbyuserid(Integer id);
}