/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.po.test;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author 世宁
 */
@Entity
@Table
public class TestTable implements Serializable{
    @Id
    private int id;
    private String name;
    private String password;
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
