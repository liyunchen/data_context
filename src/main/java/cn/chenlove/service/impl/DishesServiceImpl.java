package cn.chenlove.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;

import cn.chenlove.entity.SelectDishesList;
import cn.chenlove.mapper.DishesMapper;
import cn.chenlove.mapper.MenuMapper;
import cn.chenlove.mapper.ShopMenuMapper;
import cn.chenlove.mapper.UserShopMapper;
import cn.chenlove.model.Dishes;
import cn.chenlove.model.Menu;
import cn.chenlove.model.ShopMenu;
import cn.chenlove.model.User;
import cn.chenlove.model.UserShop;
import cn.chenlove.service.DishesService;
import cn.chenlove.service.MenuService;
import cn.chenlove.util.uuid_util;
import tk.mybatis.mapper.entity.Example;
@Service("dishesService")
public class DishesServiceImpl extends BaseService<Dishes> implements DishesService {

	@Resource
	private DishesMapper dishesMapper;
	
	
	//添加
	public String addDishes(Dishes dishes) {
		String id = new uuid_util().getuuid();
		dishes.setId(id);
		dishes.setEnable(1);
		int i = dishesMapper.insert(dishes);
		if(i==1) {
			return "ok";
		}else {
			return "";
		}
	}

	//获取当前
	public Dishes getDishes(String id) {
		Dishes dishes = dishesMapper.selectByPrimaryKey(id);		
		return dishes;
	}
	@Override
	public String updateDishes(Dishes dishes) {
		int i = dishesMapper.updateByPrimaryKey(dishes);
		if(i==1) {
			return "ok";
		}else {
			return "";
		}
		
	}

	@Override
	public PageInfo<Dishes> selectDishesByPage(Dishes dishes, int start, int length) {
		int page = start/length+1;
       
        Example example = new Example(Menu.class);
        Example.Criteria criteria = example.createCriteria();
        if (StringUtil.isNotEmpty(dishes.getName())  && !dishes.getName().equals("")) {
            criteria.andLike("name", "%" + dishes.getName() + "%");
        }
        if ((dishes.getSort()!=null) && !dishes.getSort().equals("")) {
            criteria.andLike("sort", "%" + dishes.getSort() + "%");
        }
        if ((dishes.getEnable()!=null)  && !dishes.getEnable().equals("")) {
            criteria.andLike("num", "%" + dishes.getEnable() + "%");
        }
        //分页查询
        PageHelper.startPage(page, length);
        List<Dishes> list = selectByExample(example);
        return new PageInfo<>(list);
	}

	//删除
	public String delDishes(String id) {
		int i = dishesMapper.deleteByPrimaryKey(id);
		if(i==1) {
		    return "ok";
		}else {
			return "";
		}
	    
	}

	@Override
	public List<Dishes> getDishesList() {
		// TODO Auto-generated method stub
		return dishesMapper.selectAll();
	}

	@Override
	public List<Dishes> getByType(String type) {
		
		return dishesMapper.getByType(type);
	}
	/***********推荐菜单***********/
    public List<Dishes> getRecommenddishesList(String type) {
		
		return dishesMapper.getRecommenddishesList(type);
	}

	//菜单关键字条件列表查询
	public PageInfo<Dishes> selectDishesListByPage(String shop_id, String conditiondishes, int currentpage, int length) {
		//int page = currentpage/length+1;
		/*
		 * 1   0~11
		 * 2   12~23
		 * 3   24~19
		 * 
		 * */
		
		SelectDishesList sd =new SelectDishesList();
	    sd.setShop_id(shop_id);
	    sd.setConditiondishes(conditiondishes);
	    sd.setStartrows((currentpage-1)*length);
	    sd.setEndrows(length);
        //分页查询
        //PageHelper.startPage(page, length);
	    System.err.println(conditiondishes);
        List<Dishes> list = dishesMapper.selectDishesByCondition(sd);
        return new PageInfo<>(list);
	}

	@Override
	public int selectcountDishes(String shop_id, String conditiondishes, int currentpage, int length) {
		SelectDishesList sd =new SelectDishesList();
	    sd.setShop_id(shop_id);
	    sd.setConditiondishes(conditiondishes);
	    sd.setStartrows((currentpage-1)*length);
	    sd.setEndrows(length);
		return dishesMapper.selectcountDishes(sd);
	}

	//菜品关键字条件列表查询
	public PageInfo<Dishes> pselectDishesListByPage(String shop_id, String type, int currentpage, int length) {
		SelectDishesList sd =new SelectDishesList();
	    sd.setShop_id(shop_id);
	    sd.setConditiondishes(type);
	    sd.setStartrows((currentpage-1)*length);
	    sd.setEndrows(length);
        //分页查询

	    
        List<Dishes> list = dishesMapper.pselectDishesByCondition(sd);
        return new PageInfo<>(list);
	}

	@Override
	public int pselectcountDishes(String shop_id, String type, int currentpage, int length) {
		SelectDishesList sd =new SelectDishesList();
	    sd.setShop_id(shop_id);
	    sd.setConditiondishes(type);
	    sd.setStartrows((currentpage-1)*length);
	    sd.setEndrows(length);
		return dishesMapper.pselectcountDishes(sd);
	}


}
