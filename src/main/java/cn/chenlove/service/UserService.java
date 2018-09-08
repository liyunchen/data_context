package cn.chenlove.service;

import com.github.pagehelper.PageInfo;

import cn.chenlove.model.User;

public interface UserService extends IService<User>{
	PageInfo<User> selectByPage(User user, int start, int length);

	String updateuser(User user ,String opassword);
	
    User selectByUsername(String username);

    void delUser(Integer userid);
}
