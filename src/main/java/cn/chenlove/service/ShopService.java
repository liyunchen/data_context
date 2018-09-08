package cn.chenlove.service;

import cn.chenlove.model.Shop;

public interface ShopService   extends IService<Shop> {
    //添加
	void addshop(Shop shop);
    //获取当前
	Shop getshop();
	//更新
	void updateshop(Shop shop);

}
