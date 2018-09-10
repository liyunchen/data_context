package cn.chenlove.model;

import javax.persistence.*;

public class Dishes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String name;

    private String type;

    private String pic;

    private Integer recommend;

    private Integer enable;

    private Integer sort;

    private String introduction;
    
    private Float price;

    @Override
	public String toString() {
		return "Dishes [id=" + id + ", name=" + name + ", type=" + type + ", pic=" + pic + ", recommend=" + recommend
				+ ", enable=" + enable + ", sort=" + sort + ", introduction=" + introduction + ", price=" + price + "]";
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
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
     * @return type
     */
    public String getType() {
        return type;
    }

    /**
     * @param type
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * @return pic
     */
    public String getPic() {
        return pic;
    }

    /**
     * @param pic
     */
    public void setPic(String pic) {
        this.pic = pic;
    }

    /**
     * @return recommend
     */
    public Integer getRecommend() {
        return recommend;
    }

    /**
     * @param recommend
     */
    public void setRecommend(Integer recommend) {
        this.recommend = recommend;
    }

    /**
     * @return enable
     */
    public Integer getEnable() {
        return enable;
    }

    /**
     * @param enable
     */
    public void setEnable(Integer enable) {
        this.enable = enable;
    }

    /**
     * @return sort
     */
    public Integer getSort() {
        return sort;
    }

    /**
     * @param sort
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * @return introduction
     */
    public String getIntroduction() {
        return introduction;
    }

    /**
     * @param introduction
     */
    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }
}