/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.manager.controller;

import com.yao.music.manager.service.LanguageService;
import com.yao.music.manager.service.MusicService;
import com.yao.music.po.Language;
import com.yao.music.po.Music;
import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author 世宁
 */
@Controller
@RequestMapping("/manager/music")
public class MusicController {
    
    @Resource
    private LanguageService languageService;
    @Resource
    private MusicService musicService;
    
    @RequestMapping("/upload")
    @ResponseBody
    public String upload(@RequestParam(value = "musicfile",required = false) MultipartFile musicfile,
                    @RequestParam(required = true) int languageId,@RequestParam(required = true) String title) {    
        try {
            Language language = languageService.find(Language.class, languageId);
            Music music = new Music();
            music.setTitle(title);
            music.setLanguage(language);
            File file = new File("E:/"+musicfile.getOriginalFilename());
            music.setFilePath("E:/"+musicfile.getOriginalFilename());
            musicService.saveOrUpdate(music);
            FileCopyUtils.copy(musicfile.getBytes(), file);
        } catch (IOException ex) {
        }
        return "ok";
    }
    
}
