package cn.chenlove.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.chenlove.model.User;

@Controller
public class HomeController {
    @RequestMapping(value="/login",method= RequestMethod.GET)
    public String login(){
        return "login";
    }
    @RequestMapping(value="/index")
    public String index() {
    	return "index";
    }
    @RequestMapping(value="/login",method=RequestMethod.POST)
    public String login(HttpServletRequest request, User user, Model model){
        if (StringUtils.isEmpty(user.getUsername()) || StringUtils.isEmpty(user.getPassword())) {
            request.setAttribute("msg", "用户名或密码不能为空！");
            return "login";
        }
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token=new UsernamePasswordToken(user.getUsername(),user.getPassword());
        try {
            subject.login(token);
            return "redirect:usersPage";
        }catch (LockedAccountException lae) {
            token.clear();
            request.setAttribute("msg", "用户已经被锁定不能登录，请与管理员联系！");
            return "login";
        } catch (AuthenticationException e) {
            token.clear();
            request.setAttribute("msg", "用户或密码不正确！");
            return "login";
        }
    }
    
    @ResponseBody
    @RequestMapping(value="/loginuser")
    public String loginuser( User user){
    	System.err.println(user.toString());
        if (StringUtils.isEmpty(user.getUsername()) || StringUtils.isEmpty(user.getPassword())) {
            //request.setAttribute("msg", "用户名或密码不能为空！");
            return "用户名或密码不能为空！";
        }
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token=new UsernamePasswordToken(user.getUsername(),user.getPassword());
        try {
            subject.login(token);
            return "ok";
        }catch (LockedAccountException lae) {
            token.clear();
            //request.setAttribute("msg", "用户已经被锁定不能登录，请与管理员联系！");
            return "用户已经被锁定不能登录，请与管理员联系！";
        } catch (AuthenticationException e) {
            token.clear();
            //request.setAttribute("msg", "用户或密码不正确！");
            return "用户或密码不正确！";
        }
    }
    @RequestMapping(value={"/usersPage",""})
    public String usersPage(){
        return "user/users";
    }

    @RequestMapping("/rolesPage")
    public String rolesPage(){
        return "role/roles";
    }
    //----------------
    @RequestMapping("/menuPage")
    public String menuPage(){
        return "admin/menulist";
    }
    @RequestMapping("/dishesPage")
    public String cyiPage(){
        return "admin/disheslist";
    }
    @RequestMapping("/seatPage")
    public String seatPage(){
        return "admin/seatlist";
    }
    @RequestMapping("/bookingPage")
    public String bookingPage(){
        return "admin/bookinglist";
    }
    @RequestMapping("/commentPage")
    public String commentPage(){
        return "admin/commentlist";
    }
    //----------------
    @RequestMapping("/resourcesPage")
    public String resourcesPage(){
        return "resources/resources";
    }

    @RequestMapping("/403")
    public String forbidden(){
        return "403";
    }
    @ResponseBody
    @RequestMapping(value="/getlogin")
    public User getlogin() {
    	User user = (User)SecurityUtils.getSubject().getPrincipal();
    	return user;
    }
}
