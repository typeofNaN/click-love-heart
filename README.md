# Click Love Heart ❤️

鼠标点击，生成爱心 ❤️

## Installation

``` sh
# using npm
npm install click-love-heart --save

# using yarn
yarn add click-love-heart

# using pnpm
pnpm add click-love-heart
```

## Usage

``` js
import { HeartAnimate } from 'click-love-heart'

type Option = {
  el?: HTMLElement | Window
}

const option: Option = {
  el: document.getElementById('xxx')
}

new HeartAnimate() // 默认全局
// or
new HeartAnimate(option)
```

配置项：

| 配置项 | 数据类型           | 是否必填 | 默认值 | 描述                       |
| :----- | :----------------- | :------: | :----- | :------------------------- |
| el     | HTMLElement/Window |    否    | window | 作用于哪个元素，默认window |
