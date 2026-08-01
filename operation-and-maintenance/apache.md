# Apache HTTP Server

Apache 是世界使用排名第一的 Web 服务器软件，主要处理静态内容（如 HTML、图片），是 LAMP/LNMP 架构中的经典 Web 服务器组件。

## 特点

- 处理静态页面，不解释服务器端脚本（JSP/Servlet/PHP 需配合其他组件）
- 常与 Tomcat 配对使用，作为前端静态服务器
- 支持虚拟主机、URL 重写（mod_rewrite）、访问控制

## 安装

```sh
# Arch Linux
pacman -S apache
```

服务管理：

```sh
systemctl start httpd
systemctl enable httpd
systemctl status httpd
```

## 配置

- 主配置文件：`/etc/httpd/conf/httpd.conf`
- 默认站点目录：`/var/www/html`
- 日志目录：`/var/log/httpd/`

## 常用模块

- `mod_rewrite`：URL 重写，配合 `.htaccess`
- `mod_ssl`：HTTPS 支持
- `mod_proxy`：反向代理，转发到 Tomcat 等后端

## 反向代理示例

将 `/app` 请求转发到 Tomcat（8080 端口）：

```apache
ProxyPass /app http://localhost:8080/
ProxyPassReverse /app http://localhost:8080/
```

## 与 Tomcat 的关系

- Apache 处理静态资源，Tomcat 处理 JSP/Servlet
- 通过 `mod_proxy` 或 `mod_jk` 集成
- 详见 [Tomcat 运维](tomcat.md)
