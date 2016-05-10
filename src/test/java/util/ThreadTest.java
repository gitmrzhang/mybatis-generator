/**
 * 文件名：util.ThreadTest.java<br/>
 * 创建时间：2016年5月5日 下午5:30:23<br/>
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

import org.junit.Before;
import org.junit.Test;

public class ThreadTest {
	@Test
	public void test() throws InterruptedException{
		long start = System.currentTimeMillis();
		Thread thread1 = new Thread(new Runnable() {
			
			public void run() {
				do1();
			}
		});
		thread1.start();
		thread1.join();
		Thread thread2 = new Thread(new Runnable() {
			
			public void run() {
				do2();
			}
		});
		thread2.start();
		thread2.join();
		System.out.println(System.currentTimeMillis()-start+"ms");
	}
	/* (non-Javadoc)
	 * @see java.lang.Thread#run()
	 */
	private synchronized void do1() {
		for(int i=0;i<100000;i++){
			System.out.println(i);
		}
	}
	
	private synchronized void do2() {
		for(int i=0;i<100000;i++){
			System.out.println(i);
		}
	}
	
}

