package cn.chenlove.model;

import java.io.Serializable;

import javax.persistence.*;

@Table(name="role_resources")
public class RoleResources implements Serializable {
    private static final long serialVersionUID = -8559867942708057891L;
    
    @Id
    @Column(name="roleid")
    private Integer roleid;
    @Id
    @Column(name="resourcesid")
    private String resourcesid;
    public Integer getRoleid() {
		return roleid;
	}
	public void setRoleid(Integer roleid) {
		this.roleid = roleid;
	}
	public String getResourcesid() {
		return resourcesid;
	}
	public void setResourcesid(String resourcesid) {
		this.resourcesid = resourcesid;
	}
	
    
}
