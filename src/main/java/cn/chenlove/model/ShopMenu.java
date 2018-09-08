package cn.chenlove.model;

import javax.persistence.*;

@Table(name = "shop_menu")
public class ShopMenu {
    @Column(name = "shop_id")
    private String shopId;

    @Column(name = "menu_id")
    private String menuId;

    @Override
	public String toString() {
		return "ShopMenu [shopId=" + shopId + ", menuId=" + menuId + "]";
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

    /**
     * @return menu_id
     */
    public String getMenuId() {
        return menuId;
    }

    /**
     * @param menuId
     */
    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }
}