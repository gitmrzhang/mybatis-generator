/**
 * 文件名：com.carmall.core.util.Test_4.java<br/>
 * 创建时间：2016年4月27日 下午2:04:04<br/>
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
import java.util.ArrayList;
import java.util.List;
public class Test_4 {
	//TODO 记得要写注释，方便别人，成就自己。
    /**
     * 多线程处理list
     * 
     * @param data  数据list
     * @param threadNum  线程数
     */
    public synchronized void handleList(List<String> data, int threadNum) {
        int length = data.size();
        int tl = length % threadNum == 0 ? length / threadNum : (length
                / threadNum + 1);
 
        for (int i = 0; i < threadNum; i++) {
            int end = (i + 1) * tl;
            HandleThread thread = new HandleThread("线程[" + (i + 1) + "] ",  data, i * tl, end > length ? length : end);
            thread.start();
        }
    }
 
    class HandleThread extends Thread {
        private String threadName;
        private List<String> data;
        private int start;
        private int end;
 
        public HandleThread(String threadName, List<String> data, int start, int end) {
            this.threadName = threadName;
            this.data = data;
            this.start = start;
            this.end = end;
        }
 
        public void run() {
            // TODO 这里处理数据
        	for(int i=start;i<end;i++){
        		String a=data.get(i)+"xx";
        		System.out.println("threadName:"+threadName+" i:"+i+" data:"+a);
        	}
        }
 
    }
 
    public static void main(String[] args) {
        Test_4 test = new Test_4();
        // 准备数据
        List<String> data = new ArrayList<String>();
        for (int i = 0; i < 15; i++) {
            data.add("item" + i);
        }
        test.handleList(data, 5);
    }
}

