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
import javax.servlet.http.HttpServletRequest;
import org.aspectj.util.FileUtil;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<byte[]> download(@PathVariable int id) throws IOException {
        Music music = musicService.find(Music.class, id);
        File musicFile = new File(music.getFilePath());
        HttpHeaders responHeaders = new HttpHeaders();
        responHeaders.add("Content-Diposition", "inline;filename=\"123.mp3\"");
        return new ResponseEntity<>(FileUtil.readAsByteArray(musicFile), responHeaders, HttpStatus.OK);
    }
    
    @RequestMapping(value="/language/{id}",method = RequestMethod.GET)
    @ResponseBody
    public List<Music> getMusicsByLanguage(@PathVariable int id) throws IOException {
        Language language = languageService.find(Language.class, id);
        HttpHeaders responHeaders = new HttpHeaders();
        responHeaders.add("Access-Control-Allow-Origin", "*");
        return new ArrayList<>(language.getMusics());
    }
    
    @RequestMapping(value="/poster/{id}.jpg",method = RequestMethod.GET)
    @ResponseBody
    public byte[] getPosterOfMusic(@PathVariable int id, HttpServletRequest request) throws IOException {
        Music music = musicService.find(Music.class, id);
        if(music.getPoster()==null) {
            String defaultPosterPath =  request.getServletContext().getRealPath("/resources/images/music/poster.jpg");
            music.setPoster(FileUtil.readAsByteArray(new File(defaultPosterPath)));
        }
        return music.getPoster();
    }
    
}
