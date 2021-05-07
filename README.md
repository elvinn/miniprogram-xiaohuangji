# 小黄表情包

方便地分享表情包给微信好友。

![小程序码](https://elvinn.cn/img/xiaohuangji/gh_f47c3824706d_344.jpg)

## 表情包来源

1. [小黄鸡表情](https://github.com/esrrhs/xiaohuangji)
2. [中国表情包大集合](https://github.com/zhaoolee/ChineseBQB)

## 尝试

1. 有试过给每个图片加上 loading 图，待图片加载成功后再将其隐藏。尝试后发现当大量图片同时加载成功时，频繁调用 `setData` 更新数据会导致页面卡顿，权衡下仅加上了加载失败的图。

## 其它

1. 2021 年 2 月 19 日第一个版本上线。