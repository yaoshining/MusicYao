<%-- 
    Document   : upload
    Created on : 2013-11-5, 0:21:54
    Author     : 世宁
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <base href="<%=request.getContextPath()+"/"%>" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script type="text/javascript">
        </script>
    </head>
    <body>
        <h1>Upload!</h1>
        <form action="music/upload" enctype="multipart/form-data" method="post">
            <input name="musicfile" type="file" accept="audio/*" />
            <input type="submit" value="上传" />
        </form>
    </body>
</html>
