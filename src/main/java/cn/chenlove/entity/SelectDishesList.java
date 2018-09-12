package cn.chenlove.entity;
/** 
* @author  作者 :李运辰 
* @date 创建时间：2018年9月11日 下午4:42:39 
* @Description: TODO(用一句话描述该文件做什么)
* @version 1.0 
* @parameter  
* @since  
* @return  
*/
public class SelectDishesList {
     private String shop_id;
     private String conditiondishes;
     private int startrows;
     private int endrows;
     
	@Override
	public String toString() {
		return "SelectDishesList [shop_id=" + shop_id + ", conditiondishes=" + conditiondishes + ", startrows="
				+ startrows + ", endrows=" + endrows + "]";
	}
	public String getShop_id() {
		return shop_id;
	}
	public void setShop_id(String shop_id) {
		this.shop_id = shop_id;
	}
	public String getConditiondishes() {
		return conditiondishes;
	}
	public void setConditiondishes(String conditiondishes) {
		this.conditiondishes = conditiondishes;
	}
	public int getStartrows() {
		return startrows;
	}
	public void setStartrows(int startrows) {
		this.startrows = startrows;
	}
	public int getEndrows() {
		return endrows;
	}
	public void setEndrows(int endrows) {
		this.endrows = endrows;
	}
     
     
	
     
}
