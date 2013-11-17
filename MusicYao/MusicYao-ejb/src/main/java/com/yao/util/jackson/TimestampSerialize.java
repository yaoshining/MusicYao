package com.yao.util.jackson;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.SerializerProvider;

/**
 *
 * @author 世宁
 */
public class TimestampSerialize extends JsonSerializer<Date>{

    @Override
    public void serialize(Date t, JsonGenerator jg, SerializerProvider sp) throws IOException, JsonProcessingException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
        String formattedDate = formatter.format(t);  
        jg.writeNumber(formattedDate);
    }
    
}
