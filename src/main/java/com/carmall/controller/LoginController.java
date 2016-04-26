/**
 * 文件名：com.carmall.controller.LoginController.java<br/>
 * 创建时间：2016年4月22日 下午3:35:35<br/>
 * 创建者：Administrator<br/>
 * 修改者：暂无<br/>
 * 修改简述：暂无<br/>
 * 修改详述：
 * <p>
 * 暂无<br/>
 * </p>
 * 修改时间：暂无<br/>
 */
package com.carmall.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.carmall.core.controller.BaseController;

/**
 * TODO 登录控制器<br/>
 * <p>
 * TODO 该类的详细描述<br/>
 * <p>
 * @author Administrator
 * @date 2016年4月22日 下午3:35:35
 * @version 1.0.0
 * @since 1.0.0
 */
@RequestMapping(name="/login/")
public class LoginController extends BaseController {
	//TODO 记得要写注释，方便别人，成就自己。
	@RequestMapping(name="login.do")
	public String login(ModelAndView modeAndView ,HttpServletRequest request,HttpServletResponse response){
		return "main";
	}
}

