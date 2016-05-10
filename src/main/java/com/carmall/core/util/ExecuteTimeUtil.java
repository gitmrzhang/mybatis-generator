/**
 * 文件名：com.carmall.core.util.ExecuteTime.java<br/>
 * 创建时间：2016年4月27日 上午9:59:09<br/>
 * 创建者：Administrator<br/>
 * 修改者：暂无<br/>
 * 修改简述：暂无<br/>
 * 修改详述：
 * <p>
 * 暂无<br/>
 * </p>
 * 修改时间：暂无<br/>
 */
package com.carmall.core.util;

import java.math.BigDecimal;

public class ExecuteTimeUtil {
	//TODO 记得要写注释，方便别人，成就自己。
	private long start;
	private long end;
	private long exectime;
	private String exectimestr;
	 
	public ExecuteTimeUtil(){
		this.start = System.currentTimeMillis();
	}
	
	public String executeTime(){
		this.end = System.currentTimeMillis();
		long all = end - start;
		this.exectime = all;
		BigDecimal d = new BigDecimal(all + "");
		if(all < 1000) {
			exectimestr = all + " 毫秒";
		} else if(all < 60 * 1000) {
			exectimestr = d.divide(new BigDecimal(1000 + ""),2,BigDecimal.ROUND_HALF_DOWN) + " 秒";
		} else {
			exectimestr = d.divide(new BigDecimal(60 + ""),4,BigDecimal.ROUND_HALF_DOWN).divide(new BigDecimal(1000 + ""),2,BigDecimal.ROUND_HALF_DOWN) + " 分钟";
		}
		return exectimestr;
	}

	/**
	 * start属性的get方法
	 * @return the start
	 */
	public long getStart() {
	
		return start;
	}

	/**
	 * start属性的set方法
	 * @param start the start to set
	 */
	public void setStart(long start) {
	
		this.start = start;
	}

	/**
	 * end属性的get方法
	 * @return the end
	 */
	public long getEnd() {
	
		return end;
	}

	/**
	 * end属性的set方法
	 * @param end the end to set
	 */
	public void setEnd(long end) {
	
		this.end = end;
	}

	/**
	 * exectime属性的get方法
	 * @return the exectime
	 */
	public long getExectime() {
	
		return exectime;
	}

	/**
	 * exectime属性的set方法
	 * @param exectime the exectime to set
	 */
	public void setExectime(long exectime) {
	
		this.exectime = exectime;
	}
	
}

