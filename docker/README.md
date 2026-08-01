# Docker

Docker 是一个开源的容器化平台，可将应用及其依赖打包成镜像，在任何环境中一致运行。

## 安装

```sh
# Arch Linux
pacman -S docker docker-compose
systemctl enable --now docker
usermod -aG docker $USER    # 当前用户加入 docker 组（重新登录生效）
```

## 参考

- [Docker 官方文档](https://docs.docker.com/)
- [Docker 入门教程](https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)
