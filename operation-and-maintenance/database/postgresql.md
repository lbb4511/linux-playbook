# PostgreSQL

PostgreSQL（简称 pgsql）是一个功能强大的开源关系型数据库管理系统，以稳定性、事务完整性和扩展性著称，支持丰富的数据类型和高级特性。

## 安装

```sh
# Ubuntu/Debian
apt install postgresql postgresql-contrib

# CentOS/RHEL
yum install postgresql-server postgresql-contrib
```

## 启动与初始化

```sh
systemctl start postgresql
systemctl enable postgresql

# CentOS 上首次需初始化数据目录
postgresql-setup initdb
```

## 常用命令

默认超级用户为 `postgres`，通常用 `sudo -u postgres psql` 进入。

- `psql -U 用户名 -d 数据库名` 登录数据库
- `\l` 查看所有数据库
- `\c <数据库名>` 切换数据库
- `\dt` 查看所有表
- `\d <表名>` 查看表结构
- `\q` 退出

### 数据库与用户

- `CREATE DATABASE <库名>;`
- `CREATE USER <用户名> WITH PASSWORD '<密码>';`
- `GRANT ALL PRIVILEGES ON DATABASE <库名> TO <用户名>;`

## 备份与恢复

```sh
pg_dump -U <用户名> <库名> > backup.sql    # 备份
psql -U <用户名> <库名> < backup.sql       # 恢复
```

## 配置

- 主配置文件：`/etc/postgresql/<版本>/main/postgresql.conf`
- 监听与访问控制：`pg_hba.conf`
