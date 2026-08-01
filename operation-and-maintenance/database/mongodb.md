# MongoDB

MongoDB 是一个基于分布式文件存储的开源文档型 NoSQL 数据库，以 BSON 格式存储文档，支持水平扩展。

## 安装

```sh
# Ubuntu/Debian
apt install mongodb

# CentOS/RHEL
yum install mongodb-org
```

## 常用命令

```sh
mongo                          # 进入交互式 shell
mongod --config /etc/mongod.conf   # 启动服务
```

### 数据库操作

- `show dbs` 查看所有数据库
- `use <数据库名>` 切换/创建数据库
- `db` 查看当前数据库
- `db.dropDatabase()` 删除当前数据库

### 集合与文档

- `db.<集合名>.insert({...})` 插入文档
- `db.<集合名>.find()` 查询文档
- `db.<集合名>.update({条件}, {$set:{...}})` 更新文档
- `db.<集合名>.remove({条件})` 删除文档
- `show collections` 查看集合列表

## 特点

- 文档存储，无需预定义表结构（Schema-less）
- 支持复制集（Replica Set）和分片（Sharding）
- 高可用与自动故障转移
