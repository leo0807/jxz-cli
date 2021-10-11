#!/usr/bin/env bash
npm config get registry # 检查仓库镜像
npm config set registry=https://registry.npmjs.org
echo 'Login Action: '
npm login # 登陆
echo '--------publishing---------'
npm publish # 发布
echo 'Publish Completed'
exit