/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.yao.music.test.spring;

import com.yao.music.po.test.TestTable;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
public class TestJPA extends AbstractJUnit4SpringContextTests{
    @PersistenceContext EntityManager em;
    
    public TestJPA() {
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
        Assert.assertNotNull(em);
        em.find(TestTable.class, 1);
    }
}