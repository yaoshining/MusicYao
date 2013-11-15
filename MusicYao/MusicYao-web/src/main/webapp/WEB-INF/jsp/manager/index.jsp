<%-- 
    Document   : index
    Created on : 2013-11-5, 9:50:28
    Author     : 世宁
--%>

<%@page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html>
<head>
<base href="<%=request.getContextPath()+"/"%>" />
<!--[if IE]>
<script type="text/javascript">
    var basetag = document.getElementsByTagName("base")[0];
    basetag.href = 'http://'+window.location.host+basetag.href;
</script>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Music Yao后台管理系统</title>
<link rel="stylesheet" href="resources/css/extjs/ext-all-neptune.css" media="screen" />
<base href="<%=request.getContextPath()+"/"%>" />
<link rel="stylesheet" type="text/css" href="resources/css/extjs/ux/GroupTabPanel.css" media="screen" />
<script type="text/javascript">
    var UserContext = new Object();
    UserContext.username = '<sec:authentication property="name" />';
</script>
<style type="text/css">
<!--
    #loading-mask {
        width: 100%;
        height: 100%;
        background-color: white;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2000;
    }
    #loading{
        position: absolute;
        top: 40%;
        left: 40%;
        padding: 2px;
        z-index: 2001;
    }
    #loading a {
        color:#225588;
    }
    #loading .loading-indicator{
        background:white;
        color:#444;
        font:bold 13px Helvetica, Arial, sans-serif;
        height:auto;
        margin:0;
        padding:10px;
    }
    #loading-msg {
        font-size: 10px;
        font-weight: normal;
    }
-->
</style>
</head>
<body>
<div id="loading-mask"></div>
<div id="loading">
    <div class="loading-indicator">
        <img src="resources/images/manager/loading.gif" width="32" height="32" style="margin-right:8px;float:left;vertical-align:top;"/>
        MusicYao后台管理系统 - <a href="http://ysnlvlqw.gicp.net">musicyao.com</a>
        <br /><span id="loading-msg">正在载入样式和图片...</span>
        <script type="text/javascript" src="resources/script/ui/gauge.js"></script>
        <div id="progress-bar"></div>
        <script type="text/javascript">
            var progressbar = document.getElementById("progress-bar");
            gauge.add(progressbar,{
                width: 300,
                gradient: true,
                name: "init-progress",
                limit: true,
                scale: 10,
                colors:['#ff0000','#00ff00'],
                values: [0.2,1]
            });
            document.getElementById("init-progress").style.width = "100%";
        </script>
    </div>
</div>
<script type="text/javascript">
    document.getElementById('loading-msg').innerHTML = '正在载入JS核心库...';
</script>
<script type="text/javascript" src="resources/script/extjs/ext-debug.js"></script>
<script type="text/javascript">
    gauge.modify(document.getElementById("init-progress"),{values:[0.4,1]});
    document.getElementById('loading-msg').innerHTML = '正在载入图形化界面组件...';
</script>
<script type="text/javascript" src="resources/script/app/backstage.js"></script>
</body>
</html>
