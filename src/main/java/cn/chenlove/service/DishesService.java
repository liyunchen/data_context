package cn.chenlove.service;

import com.github.pagehelper.PageInfo;

import cn.chenlove.model.Dishes;

public interface DishesService   extends IService<Dishes> {
    //添加
	String addDishes(Dishes dishes);
    //获取当前
	Dishes getDishes(String id);
	//更新
	String updateDishes(Dishes dishes);
	//列表查询
	PageInfo<Dishes> selectDishesByPage(Dishes dishes, int start, int length);
	//删除
	String delDishes(String id);

}
