/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.po;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author 世宁
 */
@Entity
public class Music implements Serializable{
    @Id
    private int id;
    private String title;
    private String artist;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }
    
    
}
