package cn.chenlove.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import cn.chenlove.mapper.ShopMapper;
import cn.chenlove.mapper.ShopMenuMapper;
import cn.chenlove.mapper.UserShopMapper;
import cn.chenlove.model.Shop;
import cn.chenlove.model.ShopMenu;
import cn.chenlove.model.User;
import cn.chenlove.model.UserShop;
import cn.chenlove.service.ShopService;
import cn.chenlove.util.uuid_util;
@Service("shopService")
public class ShopServiceImpl extends BaseService<Shop> implements ShopService {

	@Resource
	private ShopMapper shopMapper;
	@Resource
	private UserShopMapper userShopMapper;
	@Resource
	private ShopMenuMapper shopMenuMapper;
	
	//添加
	public void addshop(Shop shop) {
		User user = (User)SecurityUtils.getSubject().getPrincipal();
		String id = new uuid_util().getuuid();
		shop.setId(id);
		shopMapper.insert(shop);
		UserShop us = new UserShop();
		us.setUserId(user.getId());
		us.setShopId(id);
		userShopMapper.insert(us);
	}

	//获取当前
	public Shop getshop() {
		Shop shop =  new Shop();
		User user = (User)SecurityUtils.getSubject().getPrincipal();
		UserShop us= userShopMapper.selectbyuserid(user.getId());
		if(us!=null && us.getShopId()!=null && !us.getShopId().equals("")) {
			shop = shopMapper.selectByPrimaryKey(us.getShopId());
			
	    }
		return shop;
	}

	@Override
	public void updateshop(Shop shop) {
		shopMapper.updateByPrimaryKey(shop);
		
	}

	@Override
	public List<Shop> getShopList() {
		// TODO Auto-generated method stub
		return shopMapper.selectAll();
	}

	@Override
	public Shop getshopbyid(String id) {
		ShopMenu shopMenu = shopMenuMapper.selectByMenuid(id);
	    if(shopMenu!=null && !shopMenu.getShopId().equals("")){
	    	Shop shop = shopMapper.selectByPrimaryKey(shopMenu.getShopId());
	    	return shop;
	    }
	    return null;
	}

}
