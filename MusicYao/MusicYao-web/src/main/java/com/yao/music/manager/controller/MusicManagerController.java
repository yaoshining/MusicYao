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
import java.util.Properties;
import javax.annotation.Resource;
import org.jaudiotagger.audio.AudioFileIO;
import org.jaudiotagger.audio.mp3.MP3AudioHeader;
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
public class MusicManagerController {
    
    @Resource
    private LanguageService languageService;
    @Resource
    private MusicService musicService;
    @Resource
    private Properties siteProperties;
    
    @RequestMapping("/upload")
    @ResponseBody
    public String upload(@RequestParam(value = "musicfile",required = false) MultipartFile musicfile,
                    @RequestParam(required = true) int languageId,@RequestParam(required = true) String title) throws Exception {    
        try {
            String musicRootDirectory = (String) siteProperties.get("musicRootDirectory");    
            Language language = languageService.find(Language.class, languageId);
            String musicDirectory = musicRootDirectory+"/"+language.getName()+"/";
            File directory = new File(musicDirectory);
            if(!directory.exists()) directory.mkdirs();
            String filePath = musicDirectory+title+musicfile.getOriginalFilename().substring(musicfile.getOriginalFilename().lastIndexOf("."), musicfile.getOriginalFilename().length());
            File file = new File(filePath);
            FileCopyUtils.copy(musicfile.getBytes(), file);
            MP3AudioHeader mp3AudioHeader = (MP3AudioHeader)AudioFileIO.read(file).getAudioHeader();
            String trackLengthAsString = mp3AudioHeader.getTrackLengthAsString();
            Music music = new Music();
            music.setTitle(title);
            music.setLanguage(language);        
            music.setFilePath(filePath);
            music.setTrackLengthAsString(trackLengthAsString);
            musicService.saveOrUpdate(music);
        } catch (IOException ex) {
        }
        return "ok";
    }
    
}
