package com.yao.music.manager.service.impl;

import com.yao.dao.jpa.JpaDaoSupport;
import com.yao.music.manager.service.LanguageService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author 世宁
 */
@Service
@Transactional
public class LanguageJpaServiceBean extends JpaDaoSupport implements LanguageService{
    
}
