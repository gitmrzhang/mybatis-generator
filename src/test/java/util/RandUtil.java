/**
 * 文件名：util.RandUtil.java<br/>
 * 创建时间：2016年5月10日 下午1:47:10<br/>
 * 创建者：zhanggaojie<br/>
 * 修改者：暂无<br/>
 * 修改简述：暂无<br/>
 * 修改详述：
 * <p>
 * 暂无<br/>
 * </p>
 * 修改时间：暂无<br/>
 */
package util;

import java.util.Random;

public class RandUtil {
	//TODO 记得要写注释，方便别人，成就自己。
	
	public static void main(String[] args) {
		int max=20;
        int min=10;
        Random random = new Random();
        for(int i=0;i<1000;i++){
        	int s = random.nextInt(max)%(max-min+1) + min;
        	System.out.println(s);
        }
        
        int n = 5;
//        System.out.println(n & -n);
	}
}

