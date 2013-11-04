<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <form id="login" method="POST" action="../j_spring_security_check">
            <h1>用户登录</h1>
            <fieldset id="inputs">
                <input id="userId" name="userId" type="text" placeholder="用户名" autofocus required />
                <input id="password" name="password" type="password" placeholder="密码" required />
            </fieldset>
            <fieldset id="actions">
                <input type="submit" id="submit" value="登录">
                <a href="">忘记密码?</a><a href="">注册</a>
            </fieldset>
        </form>
    </body>
</html>
