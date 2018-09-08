package cn.chenlove.model;

import javax.persistence.*;

@Table(name = "user_shop")
public class UserShop {
    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "shop_id")
    private String shopId;

    @Override
	public String toString() {
		return "UserShop [userId=" + userId + ", shopId=" + shopId + "]";
	}

	/**
     * @return user_id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * @param userId
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * @return shop_id
     */
    public String getShopId() {
        return shopId;
    }

    /**
     * @param shopId
     */
    public void setShopId(String shopId) {
        this.shopId = shopId;
    }
}