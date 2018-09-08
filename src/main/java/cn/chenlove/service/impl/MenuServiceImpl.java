package cn.chenlove.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;

import cn.chenlove.mapper.MenuMapper;
import cn.chenlove.mapper.ShopMenuMapper;
import cn.chenlove.mapper.UserShopMapper;
import cn.chenlove.model.Menu;
import cn.chenlove.model.ShopMenu;
import cn.chenlove.model.User;
import cn.chenlove.model.UserShop;
import cn.chenlove.service.MenuService;
import cn.chenlove.util.uuid_util;
import tk.mybatis.mapper.entity.Example;
@Service("menuService")
public class MenuServiceImpl extends BaseService<Menu> implements MenuService {

	@Resource
	private MenuMapper menuMapper;
	@Resource
	private ShopMenuMapper shopMenuMapper;
	@Resource
	private UserShopMapper userShopMapper;
	
	//添加
	public String addMenu(Menu menu) {
		User user = (User)SecurityUtils.getSubject().getPrincipal();
		String id = new uuid_util().getuuid();
		menu.setId(id);
		menu.setEnable(1);
		UserShop userShop = userShopMapper.selectbyuserid(user.getId());
		if(userShop!=null) {
			ShopMenu sm = new ShopMenu();
			sm.setMenuId(id);
			sm.setShopId(userShop.getShopId());
			//插入
			menuMapper.insert(menu);
			shopMenuMapper.insert(sm);
			return "ok";
		}
		return "";
	}

	//获取当前
	public Menu getMenu(String id) {
		Menu menu = menuMapper.selectByPrimaryKey(id);		
		return menu;
	}
	@Override
	public String updateMenu(Menu menu) {
		int i = menuMapper.updateByPrimaryKey(menu);
		if(i==1) {
			return "ok";
		}else {
			return "";
		}
		
	}

	@Override
	public PageInfo<Menu> selectMenuByPage(Menu menu, int start, int length) {
		int page = start/length+1;
       
        Example example = new Example(Menu.class);
        Example.Criteria criteria = example.createCriteria();
        if (StringUtil.isNotEmpty(menu.getName())  && !menu.getName().equals("")) {
            criteria.andLike("name", "%" + menu.getName() + "%");
        }
        if ((menu.getSort()!=null) && !menu.getSort().equals("")) {
            criteria.andLike("sort", "%" + menu.getSort() + "%");
        }
        if ((menu.getEnable()!=null)  && !menu.getEnable().equals("")) {
            criteria.andLike("num", "%" + menu.getEnable() + "%");
        }
        //分页查询
        PageHelper.startPage(page, length);
        List<Menu> list = selectByExample(example);
        return new PageInfo<>(list);
	}

	//删除
	public String delMenu(String id) {
		int i = menuMapper.deleteByPrimaryKey(id);
		if(i==1) {
		    return "ok";
		}else {
			return "";
		}
	    
	}

	@Override
	public List<Menu> getMenuList() {
		List<Menu> list  = menuMapper.getMenuList();
		return list;
	}


}
