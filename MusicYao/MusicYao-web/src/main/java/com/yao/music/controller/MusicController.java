package com.yao.music.controller;

import com.yao.music.manager.service.LanguageService;
import com.yao.music.manager.service.MusicService;
import com.yao.music.po.Language;
import com.yao.music.po.Music;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Resource;
import org.aspectj.util.FileUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author 世宁
 */
@Controller
@RequestMapping("/music")
public class MusicController {
    @Resource
    private MusicService musicService;
    @Resource
    private LanguageService languageService;
    
    @RequestMapping(value="/{id}.mp3",method = RequestMethod.GET)
    @ResponseBody
    public byte[] download(@PathVariable int id) throws IOException {
        Music music = musicService.find(Music.class, id);
        File musicFile = new File(music.getFilePath());
        return FileUtil.readAsByteArray(musicFile);
    }
    
    @RequestMapping(value="/language/{id}",method = RequestMethod.GET)
    @ResponseBody
    public List<Music> getMusicsByLanguage(@PathVariable int id) throws IOException {
        Language language = languageService.find(Language.class, id);
        return new ArrayList<>(language.getMusics());
    }
}
