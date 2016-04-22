
public class TestAA {

	public static void main(String[] args) {
		
		String con ="<p></p><p><span style=\"font-size: 12px;\">开的很仔细的车，最高配，<img src=\"http:loca\" >一键启动 双电动座椅加热 记忆座椅 实际公里数，导航，天窗，真皮电动座椅，多功能方向盘，空间大、动力强劲，高速行驶稳定性好，准新车油耗省.车况绝对精品,喜欢的朋友抓紧了车在宁波 &nbsp;包提档过户</span></p>"+
					"<p>联系电话13136302275陈 &nbsp;&nbsp;</p></p>";
		String reg = "<([^>]*)>";
		
		System.out.println(con.replaceAll(reg, ""));
	}

}
