/**
 * 文件名：util.TestExecuteTimeUtil.java<br/>
 * 创建时间：2016年4月27日 上午10:20:25<br/>
 * 创建者：Administrator<br/>
 * 修改者：暂无<br/>
 * 修改简述：暂无<br/>
 * 修改详述：
 * <p>
 * 暂无<br/>
 * </p>
 * 修改时间：暂无<br/>
 */
package util;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.carmall.core.util.ExecuteTimeUtil;

/**
 * TODO 一句话描述类的主要作用<br/>
 * <p>
 * TODO 该类的详细描述<br/>
 * <p>
 * @author Administrator
 * @date 2016年4月27日 上午10:20:25
 * @version 1.0.0
 * @since 1.0.0
 */
public class TestExecuteTimeUtil {
	
	ExecuteTimeUtil execTime = null;

	@Before
	public void test() {
		execTime = new ExecuteTimeUtil();
	}
	@Test
	public void testTime(){
		int result = 0;
		for(int i = 0;i<10000000;i++){
			if(i%2==0){
				result += i;
			}
		}
		for(int i = 0;i<10000000;i++){
			if(i%2==0){
				result += i;
			}
		}
		for(int i = 0;i<10000000;i++){
			if(i%2==0){
				result += i;
			}
		}
		for(int i = 0;i<10000000;i++){
			if(i%2==0){
				result += i;
			}
		}
		System.out.println(">>>"+execTime.executeTime());
	}
}

