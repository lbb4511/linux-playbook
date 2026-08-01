# Oracle

Oracle 是企业级关系型数据库管理系统，功能强大，常用于大型企业核心业务系统。它有商业授权的收费数据库，需购买授权。

## 常用命令

```sh
# 登录 SQL*Plus
sqlplus / as sysdba
sqlplus 用户名/密码@数据库名

# 启动/关闭数据库
startup
shutdown immediate
```

## 常用 SQL

- `SELECT * FROM v$version;` 查看数据库版本
- `SELECT name FROM v$database;` 查看数据库名称
- `SELECT tablespace_name FROM dba_tablespaces;` 查看表空间
- `SELECT username FROM dba_users;` 查看所有用户

## 特点

- 高可靠性、高可用（RAC 集群）
- 强大的性能优化与调优能力
- 支持 PL/SQL 编程语言
- 与 Java 企业级生态结合紧密

## 关键概念

- 实例（Instance）与数据库（Database）
- 表空间（Tablespace）与数据文件（Datafile）
- 监听器（Listener，默认端口 1521）
