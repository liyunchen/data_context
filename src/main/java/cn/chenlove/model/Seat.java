package cn.chenlove.model;

import java.util.Date;
import javax.persistence.*;

public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String shopid;

    private String name;

    private Integer cell;

    private Date start;

    private Date end;

    @Override
	public String toString() {
		return "Seat [id=" + id + ", shopid=" + shopid + ", name=" + name + ", cell=" + cell + ", start=" + start
				+ ", end=" + end + "]";
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
     * @return cell
     */
    public Integer getCell() {
        return cell;
    }

    /**
     * @param cell
     */
    public void setCell(Integer cell) {
        this.cell = cell;
    }

    /**
     * @return start
     */
    public Date getStart() {
        return start;
    }

    /**
     * @param start
     */
    public void setStart(Date start) {
        this.start = start;
    }

    /**
     * @return end
     */
    public Date getEnd() {
        return end;
    }

    /**
     * @param end
     */
    public void setEnd(Date end) {
        this.end = end;
    }
}