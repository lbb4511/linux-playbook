# Jetty

Jetty 是一个轻量级的开源 Java Servlet 容器/HTTP 服务器，常用于嵌入式部署和微服务场景。

## 基本架构

Jetty 的架构比较简单，也是一个可扩展性和非常灵活的应用服务器，它有一个基本数据模型，这个数据模型就是 Handler，所有可以被扩展的组件都可以作为一个 Handler，添加到 Server 中，Jetty 就是帮你管理这些 Handler。

## 特点

- 轻量、体积小、启动快
- 支持 Servlet/JSP 规范
- 可嵌入式（作为库嵌入 Java 应用）
- 常用于微服务和开发环境

## 安装

```sh
# Arch Linux
pacman -S jetty
```

## 启动与停止

```sh
systemctl start jetty
systemctl enable jetty
systemctl stop jetty
```

默认端口：8080

## 部署应用

- 将 war 包放入部署目录（默认 `/var/lib/jetty/webapps/`）即可自动部署
- 配置文件目录：`/etc/jetty/`

## 与 Tomcat 对比

| 对比项 | Jetty | Tomcat |
| ------ | ----- | ------ |
| 体积 | 更小 | 较大 |
| 启动速度 | 更快 | 较慢 |
| 定位 | 嵌入式/微服务 | 企业级应用服务器 |

## 参考

- <https://www.ibm.com/developerworks/cn/java/j-lo-jetty/index.html>
- [Jetty 官方文档](https://www.eclipse.org/jetty/documentation/)
