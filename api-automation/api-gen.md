# 接口代码生成

Swagger 包含请求的所有信息，可以生成接口请求、入参类型、出参类型、enum 等代码

## 实现方案

一个接口对应一个函数，这样有利于 tree shaking
函数名根据请求路径 path 生成小驼峰，方便开发时调用
