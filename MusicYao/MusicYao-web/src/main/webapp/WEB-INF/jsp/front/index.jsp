<%-- 
    Document   : index
    Created on : 2013-11-17, 17:27:26
    Author     : 世宁
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <base href="<%=request.getContextPath()+"/" %>" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MusicYao音乐网</title>
        <link rel="stylesheet" type="text/css" href="resources/css/soundmanager/360player.css" />
        <link rel="stylesheet" type="text/css" href="resources/css/soundmanager/360player-visualization.css" />
        <!-- special IE-only canvas fix -->
        <!--[if IE]><script type="text/javascript" src="resources/script/soundmanager/excanvas.js"></script><![endif]-->
        <!-- Apache-licensed animation library -->
        <script type="text/javascript" src="resources/script/soundmanager/berniecode-animator.js"></script>
        <script type="text/javascript" src="resources/script/soundmanager/soundmanager2.js"></script>
        <script type="text/javascript" src="resources/script/soundmanager/360player.js"></script>
        <script type="text/javascript" src="resources/script/util/handlebars-v1.1.2.js"></script>
        <script type="text/javascript" src="resources/script/jquery/jquery-1.10.2.js"></script>
        <script type="text/x-handlebars-template" id="musicList">
            <div class="sm2-inline-list" style="clear: left;">
                <div>{{language.name}}</div>
                {{#each musics}}
                <div class="ui360 ui360-vis">
                    <a href="music/{{this.id}}.mp3" style="background-image: url(music/poster/{{this.id}}.jpg);background-size: cover;">{{this.title}}</a>
                    <div class="metadata">
                     <div class="duration">{{this.trackLengthAsString}}</div>
                     <ul>
                      <li><p>First attempt</p><span>0:00</span></li>
                      <li><p>Fire!</p><span>0:02</span></li>
                      <li><p>"Too much angle"</p><span>0:05</span></li>
                      <li><p>Random chicken noise</p><span>0:18</span></li>
                      <li><p>"Wait a second"</p><span>0:31</span></li>
                      <li><p>Derrr..</p><span>0:34</span></li>
                      <li><p>Launch attempt #2</p><span>0:36</span></li>
                      <li><p>"Wrong angle"</p><span>0:39</span></li>
                      <li><p>"Fail"</p><span>0:42</span></li>
                     </ul>
                    </div>
                </div>
                {{/each}}
            </div>
        </script>
        <script type="text/javascript">
            $(function(){
                $.ajax({
                    url: 'languages',
                    accept: 'application/json',
                    success: function(languages){
                        for(var i = 0;i<languages.length;i++){
                            $.ajax({
                                url: 'music/language/'+languages[i].id,
                                accept: 'application/json',
                                language: languages[i],
                                success: function(musics){
                                    var musicList = $("#musicList").html();
                                    var source   = musicList;
                                    var template = Handlebars.compile(source);
                                    var context = {
                                        musics: musics,
                                        language: this.language
                                    };
                                    var html = template(context);
                                    $(html).appendTo("body");   
                                    initSoundManager();
                                }
                            });
                        }     
                    }
                });
            });
        function initSoundManager() {
            soundManager.setup({
                url: 'resources/swf/'
            });
            threeSixtyPlayer.config.scaleFont = (navigator.userAgent.match(/msie/i)?false:true);
            threeSixtyPlayer.config.showHMSTime = true;

            // enable some spectrum stuffs

            threeSixtyPlayer.config.useWaveformData = true;
            threeSixtyPlayer.config.useEQData = true;

            // enable this in SM2 as well, as needed

            if (threeSixtyPlayer.config.useWaveformData) {
              soundManager.flash9Options.useWaveformData = true;
            }
            if (threeSixtyPlayer.config.useEQData) {
              soundManager.flash9Options.useEQData = true;
            }
            if (threeSixtyPlayer.config.usePeakData) {
              soundManager.flash9Options.usePeakData = true;
            }

            if (threeSixtyPlayer.config.useWaveformData || threeSixtyPlayer.flash9Options.useEQData || threeSixtyPlayer.flash9Options.usePeakData) {
              // even if HTML5 supports MP3, prefer flash so the visualization features can be used.
              soundManager.preferFlash = true;
            }

            // favicon is expensive CPU-wise, but can be used.
            if (window.location.href.match(/hifi/i)) {
              threeSixtyPlayer.config.useFavIcon = true;
            }

            if (window.location.href.match(/html5/i)) {
              // for testing IE 9, etc.
              soundManager.useHTML5Audio = true;
            }
        }
        </script>
        <style type="text/css">
            .sm2-360ui {
                background-color: transparent;
            }
        </style>
    </head>
    <body>
    </body>
</html>
