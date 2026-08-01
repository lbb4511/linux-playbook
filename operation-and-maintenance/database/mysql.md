# MySQL

MySQL 是目前最流行的开源关系型数据库管理系统（RDBMS），常用于 Web 应用，是 LAMP/LNMP 架构的核心组件。

## 安装

```sh
# Ubuntu/Debian
apt install mysql-server

# CentOS/RHEL
yum install mysql-server
```

## 启动与安全设置

```sh
systemctl start mysql          # 启动服务
systemctl enable mysql         # 开机自启
mysql_secure_installation      # 初始化安全配置
```

## 常用命令

```sh
mysql -u root -p               # 登录数据库
```

### 数据库操作

- `SHOW DATABASES;` 查看所有数据库
- `CREATE DATABASE <库名> DEFAULT CHARACTER SET utf8mb4;` 创建数据库
- `USE <库名>;` 切换数据库
- `DROP DATABASE <库名>;` 删除数据库

### 用户与权限

- `CREATE USER '用户名'@'主机' IDENTIFIED BY '密码';` 创建用户
- `GRANT ALL PRIVILEGES ON <库>.* TO '用户名'@'主机';` 授权
- `FLUSH PRIVILEGES;` 刷新权限

### 常用查询

- `SELECT * FROM <表名>;`
- `SHOW TABLES;` 查看库中的表
- `DESC <表名>;` 查看表结构

## 备份与恢复

```sh
mysqldump -u root -p <库名> > backup.sql      # 备份
mysql -u root -p <库名> < backup.sql          # 恢复
```

## 配置

- 主配置文件：`/etc/mysql/my.cnf`
- 数据目录：`/var/lib/mysql`
- 日志目录：`/var/log/mysql`
