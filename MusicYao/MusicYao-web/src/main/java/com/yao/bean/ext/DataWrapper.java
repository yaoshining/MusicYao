/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.bean.ext;

import java.io.Serializable;
import java.util.List;
import org.codehaus.jackson.annotate.JsonAutoDetect;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion;

/**
 *
 * @author 世宁
 */
@JsonAutoDetect
@JsonSerialize(include = Inclusion.NON_NULL)
public class DataWrapper implements Serializable{
    private String data;

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    
    
}
