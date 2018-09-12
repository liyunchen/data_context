package cn.chenlove.service;

import java.util.List;

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
	
	List<Dishes> getDishesList();

	List<Dishes> getByType(String type);
	/***********推荐菜单***********/
	List<Dishes> getRecommenddishesList(String type);
	
	PageInfo<Dishes> selectDishesListByPage(String shop_id, String conditiondishes, int start, int length);
	int selectcountDishes(String shop_id, String conditiondishes, int currentpage, int length);
	PageInfo<Dishes> pselectDishesListByPage(String shop_id, String type, int currentpage, int length);
	int pselectcountDishes(String shop_id, String type, int currentpage, int length);
}
