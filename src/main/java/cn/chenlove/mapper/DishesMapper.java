package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.entity.SelectDishesList;
import cn.chenlove.model.Dishes;
import cn.chenlove.util.MyMapper;

public interface DishesMapper extends MyMapper<Dishes> {

	List<Dishes> getByType(String type);

	List<Dishes> selectDishesByCondition(SelectDishesList selectDishesList);
	int  selectcountDishes(SelectDishesList selectDishesList);

	List<Dishes> pselectDishesByCondition(SelectDishesList sd);
	int pselectcountDishes(SelectDishesList sd);
	/***********推荐菜单***********/
	List<Dishes> getRecommenddishesList(String type);
}