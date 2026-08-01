# Internet Information Services

IIS（Internet Information Services）是微软 Windows 自带的 Web 服务器软件，与 Windows 系统集成度高，通常用于 Windows 服务器环境。

## 特点

- 图形化管理界面（IIS Manager）
- 支持 ASP/ASP.NET/PHP 等动态脚本
- 集成了 FTP、SMTP 等服务
- 使用 `web.config` 进行站点配置

## 常用管理命令

```powershell
# 查看 IIS 服务状态
Get-Service W3SVC

# 启动/停止/重启站点（通过 iisreset）
iisreset /start
iisreset /stop
iisreset /restart
```

## 相关概念

- 应用程序池（Application Pool）：隔离不同站点之间的进程
- 站点绑定（Binding）：配置端口、主机头
- 虚拟目录：将物理目录映射为站点下的路径

> 更详细内容可参考微软官方文档。
