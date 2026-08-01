# libxml2 的安装及使用

libxml2 是一个用于解析 XML 文档的 C 语言库，是 Linux 上最常用的 XML 解析库，许多软件（如 PHP、Python 的 lxml）都依赖它。

## 安装

```sh
# Ubuntu/Debian
apt install libxml2 libxml2-dev

# CentOS/RHEL
yum install libxml2 libxml2-devel
```

## 常用命令行工具

- `xmllint` 校验 XML 文件格式及解析
- `xmlcatalog` 处理 XML 目录

```sh
xmllint --noout 文件.xml        # 校验 XML 是否格式良好
```

## 参考

- <https://www.cnblogs.com/Anker/p/3542058.html>
