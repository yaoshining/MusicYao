/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.manager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
}
