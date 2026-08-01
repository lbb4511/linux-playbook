# WebSphere

WebSphere Application Server（简称 WAS）是 IBM 推出的企业级 Java 应用服务器，基于 Java EE 规范，用于运行企业级 Java 应用。

## 特点

- 支持完整的 Java EE 规范
- 高可靠性与企业级集群支持
- 图形化管理控制台与命令行工具
- 与 IBM 其他中间件（如 MQ）集成良好

## 常用操作

```sh
# 启动/停止服务器（profile 目录下）
cd <was安装目录>/profiles/<profile名>/bin
./startServer.sh server1
./stopServer.sh server1
```

- 管理控制台：`https://<主机>:9043/ibm/console`

## 关键概念

- Profile（概要）：一组配置
- Cell / Node / Server：管理层次结构
- 应用部署（Application）与数据源

## 部署应用

- 将应用打包为 war/ear 文件
- 通过管理控制台「Applications → New Application」部署
- 或使用 `wsadmin` 命令行工具
