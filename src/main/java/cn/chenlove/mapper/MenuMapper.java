package cn.chenlove.mapper;

import java.util.List;

import cn.chenlove.model.Menu;
import cn.chenlove.util.MyMapper;

public interface MenuMapper extends MyMapper<Menu> {

	List<Menu> getMenuList();
}