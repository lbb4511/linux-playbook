# Redis

Redis 是一个开源的、基于内存的高性能键值数据库（NoSQL），常用作缓存、消息队列和会话存储。

## 安装

```sh
# Ubuntu/Debian
apt install redis-server

# CentOS/RHEL
yum install redis
```

## 启动与配置

```sh
redis-server                    # 前台启动
redis-server /etc/redis/redis.conf
redis-cli shutdown              # 优雅关闭
```

主要配置项（`redis.conf`）：

- `daemonize yes` 后台运行
- `bind 127.0.0.1` 绑定地址
- `port 6379` 监听端口
- `requirepass <密码>` 设置访问密码
- `maxmemory 128mb` 内存上限

## 常用命令

```sh
redis-cli
```

- `set key value` / `get key` 设置/获取键值
- `del key` 删除键
- `expire key 秒数` 设置过期时间
- `ttl key` 查看剩余过期时间
- `keys *` 列出所有键（生产环境慎用）
- `select 0` 切换数据库（0-15）
- `flushdb` / `flushall` 清空当前库/全部库
- `info` 查看服务器信息
- `ping` 测试连通性（返回 PONG）

## 持久化

- RDB：定时快照，默认开启，`.rdb` 文件
- AOF：追加写日志，数据更安全，`.aof` 文件

## 数据类型

- String 字符串
- List 列表
- Hash 哈希
- Set 集合
- ZSet 有序集合
