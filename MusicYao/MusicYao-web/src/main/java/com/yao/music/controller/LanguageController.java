package com.yao.music.controller;

import com.yao.music.manager.service.LanguageService;
import com.yao.music.po.Language;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author 世宁
 */
@Controller
@RequestMapping("languages")
public class LanguageController {
    @Resource
    private LanguageService languageService;
    
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Language> find() throws IOException {
        List<Language> resultList = Collections.emptyList();
        resultList = languageService.findAll(Language.class);
        return resultList;
    }
    
}
