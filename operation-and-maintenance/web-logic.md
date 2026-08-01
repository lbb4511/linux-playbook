# WebLogic

WebLogic Server 是 Oracle 推出的企业级 Java 应用服务器，基于 Java EE（Jakarta EE）规范，用于部署大型企业应用。

## 特点

- 支持完整的 Java EE 规范（EJB、JSP、Servlet、JMS 等）
- 集群（Cluster）与负载均衡
- 高可用与故障转移
- 生产级管理控制台

## 常用操作

默认端口：7001（管理服务器 AdminServer）

```sh
# 启动/停止域
cd <域目录>/bin
./startWebLogic.sh
./stopWebLogic.sh

# 启动节点管理器
./startNodeManager.sh
```

- 管理控制台：`http://<主机>:7001/console`

## 关键概念

- 域（Domain）：管理单元
- 管理服务器（AdminServer）与管理节点（Managed Server）
- 数据源（DataSource）：连接池

## 部署应用

- 将应用打包为 war/ear 文件
- 通过管理控制台的「部署」页面上传并激活
- 或将部署包放入 `<域目录>/autodeploy` 实现自动部署
