/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.po;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author 世宁
 */
@Entity
public class Language {
    @Id
    private int id;
    private String name;

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
    
}
