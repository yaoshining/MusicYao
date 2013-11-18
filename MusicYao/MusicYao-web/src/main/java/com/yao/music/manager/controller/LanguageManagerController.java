package com.yao.music.manager.controller;

import com.yao.music.manager.service.LanguageService;
import com.yao.music.po.Language;
import com.yao.util.jackson.MyObjectMapper;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author 世宁
 */
@Controller
@RequestMapping("/manager/languages")
public class LanguageManagerController {
    @Resource
    private LanguageService languageService;
    @Resource
    private MyObjectMapper objectMapper;
    
    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public JSONObject create(@RequestBody List<Language> data) throws IOException {
        List<Language> savedEntities = languageService.saveOrUpdateEntities(data);
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("success", true);
        resultMap.put("message", "创建成功");
        resultMap.put("data", savedEntities);
        String jsonStr = objectMapper.writeValueAsString(resultMap);
        JSONObject result = JSONObject.fromObject(jsonStr);
        return result;
    }
    
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Language> find(@RequestParam int page,@RequestParam int start,@RequestParam int limit) throws IOException {
        List<Language> resultList = Collections.emptyList();
        resultList = languageService.findAll(Language.class);
        return resultList;
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.DELETE)
    @ResponseBody
    public JSONObject delete(@PathVariable int id) throws IOException {
        languageService.removeById(Language.class, id);
        JSONObject result = new JSONObject();
        result.put("success", true);
        result.put("message", "删除成功");
        return result;
    }
    
    @RequestMapping(value="/{id}",method = RequestMethod.PUT)
    @ResponseBody
    public JSONObject update(@RequestBody List<Language> data) throws IOException {
        languageService.saveOrUpdateEntities(data);
        JSONObject result = new JSONObject();
        result.put("success", true);
        result.put("message", "修改成功");
        return result;
    }
    
}
