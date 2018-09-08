package cn.chenlove.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.github.pagehelper.util.StringUtil;

import cn.chenlove.mapper.UserRoleMapper;
import cn.chenlove.model.User;
import cn.chenlove.model.UserRole;
import cn.chenlove.service.UserService;
import cn.chenlove.util.PasswordHelper;
import tk.mybatis.mapper.entity.Example;

@Service("userService")
public class UserServiceImpl extends BaseService<User> implements UserService{
    
	@Resource
	private UserRoleMapper userRoleMapper;
	
	@Override
    public PageInfo<User> selectByPage(User user, int start, int length) {
        int page = start/length+1;
        Example example = new Example(User.class);
        Example.Criteria criteria = example.createCriteria();
        if (StringUtil.isNotEmpty(user.getUsername())) {
            criteria.andLike("username", "%" + user.getUsername() + "%");
        }
        if (user.getId() != null) {
            criteria.andEqualTo("id", user.getId());
        }
        if (user.getEnable() != null) {
            criteria.andEqualTo("enable", user.getEnable());
        }
        //分页查询
        PageHelper.startPage(page, length);
        List<User> userList = selectByExample(example);
        return new PageInfo<>(userList);
    }

    @Override
    public User selectByUsername(String username) {
        Example example = new Example(User.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("username",username);
        List<User> userList = selectByExample(example);
        if(userList.size()>0){
            return userList.get(0);
        }
            return null;
    }
    //更新信息
    public String updateuser(User user ,String opassword) {
    	//验证旧密码
    	User olduser = (User)SecurityUtils.getSubject().getPrincipal();
    	PasswordHelper passwordHelper = new PasswordHelper();
    	User confrimuser = new  User();
    	confrimuser.setUsername(olduser.getUsername());
    	confrimuser.setPassword(opassword);
    	passwordHelper.encryptPassword(confrimuser);
    	//System.out.println(confrimuser);
    	if(olduser.getPassword().equals(confrimuser.getPassword())) {
    		//更新账号信息
        	//userService.updateuser(user);
    		PasswordHelper newpasswordHelper = new PasswordHelper();
        	User newuser = new  User();
        	newuser.setId(user.getId());
        	newuser.setUsername(user.getUsername());
        	newuser.setPassword(user.getPassword());
        	newuser.setEnable(1);
        	newpasswordHelper.encryptPassword(newuser);
    		mapper.updateByPrimaryKey(newuser);
    		return "ok";
    	}else {
    		return "旧密码不正确";
    	}
    }
    @Override
    @Transactional(propagation= Propagation.REQUIRED,readOnly=false,rollbackFor={Exception.class})
    public void delUser(Integer userid) {
        //删除用户表
        mapper.deleteByPrimaryKey(userid);
        //删除用户角色表
        Example example = new Example(UserRole.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andEqualTo("userid",userid);
        userRoleMapper.deleteByExample(example);
    }

}
