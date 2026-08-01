# Microsoft SQL Server

Microsoft SQL Server 是微软推出的关系型数据库管理系统（RDBMS），主要运行于 Windows，从 2017 版本起支持 Linux 平台。

## Linux 上安装

```sh
# Ubuntu/Debian
curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
apt install mssql-server

# 配置并启动
/opt/mssql/bin/mssql-conf setup
```

## 常用操作

```sh
# 进入 SQL 命令行（需安装 mssql-tools）
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P <密码>
```

- `CREATE DATABASE <库名>` 创建数据库
- `SELECT name FROM sys.databases` 查看所有数据库
- `CREATE LOGIN <用户> WITH PASSWORD = '<密码>'` 创建登录账号

## 特点

- 与 Windows/.NET 生态深度集成
- 支持 T-SQL 语法
- 集成高可用方案（Always On）
