/**
 * 文件名：com.carmall.core.util.Task.java<br/>
 * 创建时间：2016年4月27日 下午1:47:01<br/>
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
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.Future;
import java.util.concurrent.RecursiveTask;


public class FJTest {
	//TODO 记得要写注释，方便别人，成就自己。
	private List<String> list;
	public static void main(String[] args) {
		System.out.println(new FJTest().run().length());
	}
	
	private void init(){
		//模拟初始化1W条数据
		list = new ArrayList<String>();
		for (int i = 0; i < 10000; i++) {
			list.add(i + "");
		}
	}
	
	public String run(){
		init();
		ForkJoinPool pool = new ForkJoinPool(5);
		Task task = new Task(list);
		Future<String> result =  pool.submit(task);
		String str = "";
		try {
			str = result.get();
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
		return str;
	}
	
	class Task extends RecursiveTask<String>{
		private int size = 2000;
		private List<String> data;
		public Task(List<String> data){
			this.data = data;
		}
		@Override
		protected String compute() {
			StringBuffer sb = new StringBuffer();
			if(data.size() <= size){
				System.out.println("******************************** size:" + data.size());
				for (String str : data) {
					sb.append(str);
				}
			}else{
				//细分成小任务
				List<Task> tasks = new ArrayList<FJTest.Task>();
				for (int index = 0; index * size < data.size(); index++) {
					Task task;
					if((index + 1) * size > data.size()){
						task = new Task(data.subList(index * size, data.size()));
					}else{
						task = new Task(data.subList(index * size, (index + 1) * size));
					}
					task.fork();
					tasks.add(task);
				}
				for (Task task : tasks) {
					sb.append(task.join());
				}
			}
			
			return sb.toString();
		}
		
	}
}

