/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.manager.controller;

import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
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
public class MusicController {
    @RequestMapping
    public String test() {
        return "abc"; 
    }
    @RequestMapping
    @ResponseBody
    public String upload(@RequestParam(value = "musicfile",required = false) MultipartFile musicfile) {    
        try {
            File file = new File("E:/"+musicfile.getOriginalFilename());
            FileCopyUtils.copy(musicfile.getBytes(), file);
        } catch (IOException ex) {
        }
        return "ok";
    }
}
