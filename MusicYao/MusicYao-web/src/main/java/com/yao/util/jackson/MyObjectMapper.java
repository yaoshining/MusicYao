/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.util.jackson;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.codehaus.jackson.JsonGenerator;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.JsonSerializer;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import org.codehaus.jackson.map.SerializerProvider;
import org.codehaus.jackson.map.ser.CustomSerializerFactory;

/**
 *
 * @author 世宁
 */
public class MyObjectMapper extends ObjectMapper{

    public MyObjectMapper() {
        super();
        this.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
        this.configure(SerializationConfig.Feature.WRITE_DATES_AS_TIMESTAMPS, false);
//        CustomSerializerFactory factory = new CustomSerializerFactory();
//        factory.addSpecificMapping(Date.class, new JsonSerializer<Date>(){
//            @Override
//            public void serialize(Date date, JsonGenerator generator, SerializerProvider provider) 
//                    throws IOException, JsonProcessingException {
//                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//                generator.writeString(sdf.format(date));
//            }
//        
//        });
//        this.setSerializerFactory(factory);
//        this.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
    }
    
}
