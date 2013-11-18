package com.yao.music.po;

import java.io.Serializable;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 *
 * @author 世宁
 */
@Entity
public class Music implements Serializable{
    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String filePath;
    private String trackLengthAsString;
    @Lob
    @JsonIgnore
    private byte[] poster;
    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.MERGE},fetch = FetchType.EAGER,optional = true)
    @JoinColumn(name = "languageId")
    private Language language;

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

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getTrackLengthAsString() {
        return trackLengthAsString;
    }

    public void setTrackLengthAsString(String trackLengthAsString) {
        this.trackLengthAsString = trackLengthAsString;
    }

    public byte[] getPoster() {
        return poster;
    }

    public void setPoster(byte[] poster) {
        this.poster = poster;
    }
    
}
