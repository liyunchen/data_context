package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.model.Dishes;
import cn.chenlove.util.MyMapper;

public interface DishesMapper extends MyMapper<Dishes> {

	List<Dishes> getByType(String type);
}