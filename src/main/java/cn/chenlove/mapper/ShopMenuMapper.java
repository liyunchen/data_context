package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.model.ShopMenu;
import cn.chenlove.util.MyMapper;

public interface ShopMenuMapper extends MyMapper<ShopMenu> {

	ShopMenu selectByMenuid(String id);

	List<ShopMenu> getShopMenuByid(String id);
}