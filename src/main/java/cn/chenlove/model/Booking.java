package cn.chenlove.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import javax.persistence.*;

public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String shopid;

    private String seatid;

    private String customerid;

    private String name;

    private String phone;

    private String starttime;

    private String endtime;

   

	@Override
	public String toString() {
		return "Booking [id=" + id + ", shopid=" + shopid + ", seatid=" + seatid + ", customerid=" + customerid
				+ ", name=" + name + ", phone=" + phone + ", starttime=" + starttime + ", endtime=" + endtime + "]";
	}

	/**
     * @return id
     */
    public String getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * @return shopid
     */
    public String getShopid() {
        return shopid;
    }

    /**
     * @param shopid
     */
    public void setShopid(String shopid) {
        this.shopid = shopid;
    }

    /**
     * @return seatid
     */
    public String getSeatid() {
        return seatid;
    }

    /**
     * @param seatid
     */
    public void setSeatid(String seatid) {
        this.seatid = seatid;
    }

    /**
     * @return customerid
     */
    public String getCustomerid() {
        return customerid;
    }

    /**
     * @param customerid
     */
    public void setCustomerid(String customerid) {
        this.customerid = customerid;
    }

    /**
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return phone
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @param phone
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * @return start
     */
    public String getStarttime() {
        return starttime;
    }

    /**
     * @param start
     */
    public void setStarttime(String starttime) {
    	//DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	//String format = df.format(start);
        this.starttime = starttime;
    }

    /**
     * @return end
     */
    public String getEndtime() {
        return endtime;
    }

    /**
     * @param end
     */
    public void setEndtime(String endtime) {
        this.endtime = endtime;
    }
}