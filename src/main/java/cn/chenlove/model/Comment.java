package cn.chenlove.model;

import javax.persistence.*;

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String shopid;

    private String customerid;

    private String name;

    private String contenttime;

    private String content;

    @Override
	public String toString() {
		return "Comment [id=" + id + ", shopid=" + shopid + ", customerid=" + customerid + ", name=" + name
				+ ", contenttime=" + contenttime + ", content=" + content + "]";
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
     * @return contenttime
     */
    public String getContenttime() {
        return contenttime;
    }

    /**
     * @param contenttime
     */
    public void setContenttime(String contenttime) {
        this.contenttime = contenttime;
    }

    /**
     * @return content
     */
    public String getContent() {
        return content;
    }

    /**
     * @param content
     */
    public void setContent(String content) {
        this.content = content;
    }
}