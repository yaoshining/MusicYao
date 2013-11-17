package com.yao.music.test.spring;

import com.yao.music.manager.service.LanguageService;
import com.yao.music.po.Language;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author 世宁
 */
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@TransactionConfiguration(transactionManager = "transactionManager",defaultRollback = false)
@ContextConfiguration(locations = {"classpath:beans.xml"})
public class TestLanguage extends AbstractJUnit4SpringContextTests {
    @Resource
    private LanguageService languageService;
    
    public TestLanguage() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

     @Test
     public void testSave() {
         Assert.assertNotNull(languageService);
         Language language = new Language();
         language.setId(null);
         language.setName("test");
         language.setModifyTime(new Date());
         language.setCreateTime(new Date());
         language.setCreateUser("yaoshining");
         languageService.save(language);
     }
     
     @Test
     public void testSaveAll() {
         Assert.assertNotNull(languageService);
         Language language = new Language();
         language.setName("test");
         language.setModifyTime(new Date());
         language.setCreateTime(new Date());
         language.setCreateUser("yaoshining");
         List<Language> languages = new ArrayList<>();
         languages.add(language);
         languageService.saveEntities(languages);
     }

}