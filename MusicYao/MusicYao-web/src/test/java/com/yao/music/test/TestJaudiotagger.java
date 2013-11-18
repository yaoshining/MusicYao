package com.yao.music.test;

import java.io.File;
import java.io.IOException;
import org.jaudiotagger.audio.AudioFile;
import org.jaudiotagger.audio.AudioFileIO;
import org.jaudiotagger.audio.AudioHeader;
import org.jaudiotagger.audio.exceptions.CannotReadException;
import org.jaudiotagger.audio.exceptions.InvalidAudioFrameException;
import org.jaudiotagger.audio.exceptions.ReadOnlyFileException;
import org.jaudiotagger.audio.mp3.MP3AudioHeader;
import org.jaudiotagger.audio.mp3.MP3File;
import org.jaudiotagger.tag.FieldKey;
import org.jaudiotagger.tag.Tag;
import org.jaudiotagger.tag.TagException;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author 世宁
 */
public class TestJaudiotagger {

    public TestJaudiotagger() {
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
     public void test() throws CannotReadException, IOException, TagException, ReadOnlyFileException, InvalidAudioFrameException {
         File file = new File("E:\\musicyao\\英语\\Hotel California.mp3");
         AudioFile audioFile = AudioFileIO.read(file);
         Tag tag = audioFile.getTag();
         AudioHeader header = audioFile.getAudioHeader();
         System.out.println((double)header.getTrackLength()/60);
         MP3AudioHeader mp3Header = (MP3AudioHeader)header;
         System.out.println(mp3Header.getTrackLengthAsString());
     }

}