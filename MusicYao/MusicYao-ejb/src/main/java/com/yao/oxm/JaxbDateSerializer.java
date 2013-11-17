package com.yao.oxm;

import java.text.SimpleDateFormat;
import java.util.Date;
import javax.xml.bind.annotation.adapters.XmlAdapter;

/**
 *
 * @author 世宁
 */
public class JaxbDateSerializer extends XmlAdapter<String, Date>{
    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public Date unmarshal(String date) throws Exception {
        return dateFormat.parse(date);
    }

    @Override
    public String marshal(Date date) throws Exception {
        return dateFormat.format(date);
    }
}
