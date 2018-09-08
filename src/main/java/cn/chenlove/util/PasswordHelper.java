package cn.chenlove.util;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;

import cn.chenlove.model.User;

public class PasswordHelper {
	private String algorithmName = "md5";
    private int hashIterations = 2;
    public void encryptPassword(User user) {
    	String newPassword = new SimpleHash(algorithmName, user.getPassword(), ByteSource.Util.bytes(user.getUsername()), hashIterations).toHex();
        user.setPassword(newPassword);
    }
    public static void main(String[] args) {
    	PasswordHelper passwordHelper = new PasswordHelper();
    	User user = new  User();
    	user.setUsername("admin2qq221");
    	user.setPassword("123456");
    	passwordHelper.encryptPassword(user);
    	System.out.println(user);
	}
	
}
