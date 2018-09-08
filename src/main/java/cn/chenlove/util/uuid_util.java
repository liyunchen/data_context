package cn.chenlove.util;

import java.util.UUID;

public class uuid_util {
   
	public String getuuid() {
		//String uuid = UUID.randomUUID().toString().replace("-", "").toLowerCase();
		//System.out.println(uuid);
		return UUID.randomUUID().toString().replace("-", "").toLowerCase();
	}
	public void sss() {
		for(int i=0;i<6;i++) {
			for(int y=0;y<8;y++) {
				if(y==6) {
					break;
				}
				System.out.println("y="+y);
			}
			System.out.println("-----------");
		}
	}
   public static void main(String[] args) {
	   new uuid_util().sss();
	   //String uuid = UUID.randomUUID().toString().replace("-", "").toLowerCase();
	   //System.out.println(uuid);
	   //5387d04bd0a3414a8adbf9ad64848a7d
	   //381ff285-15ee-47be-bc2e-43d5f4a50c9c
	   //6e9b237e-9560-11e8-84f4-54ab3a599713
   }
}
