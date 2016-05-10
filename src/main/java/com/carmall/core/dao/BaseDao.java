/**
 * 文件名：com.carmall.core.dao.BaseDao.java<br/>
 * 创建时间：2016年4月22日 下午3:06:10<br/>
 * 创建者：Administrator<br/>
 * 修改者：暂无<br/>
 * 修改简述：暂无<br/>
 * 修改详述：
 * <p>
 * 暂无<br/>
 * </p>
 * 修改时间：暂无<br/>
 */
package com.carmall.core.dao;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;

/**
 * TODO 一句话描述类的主要作用<br/>
 * <p>
 * TODO 基础dao 用于基于spring 提供的connection session <br/>
 * <p>
 * @author Administrator
 * @date 2016年4月22日 下午3:06:10
 * @version 1.0.0
 * @since 1.0.0
 */
public class BaseDao extends SqlSessionDaoSupport{
	//TODO 记得要写注释，方便别人，成就自己。
	public SqlSession getSqlSession(){
		return this.getSqlSession();
	}
}

