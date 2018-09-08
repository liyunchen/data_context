package cn.chenlove.model;

import javax.persistence.*;

@Table(name = "shop_seat")
public class ShopSeat {
    @Column(name = "seat_id")
    private String seatId;

    @Column(name = "shop_id")
    private String shopId;

    /**
     * @return seat_id
     */
    public String getSeatId() {
        return seatId;
    }

    /**
     * @param seatId
     */
    public void setSeatId(String seatId) {
        this.seatId = seatId;
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