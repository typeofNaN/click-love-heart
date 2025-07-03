type Heart = {
  el: HTMLDivElement
  x: number
  y: number
  scale: number
  alpha: number
  color: string
}

type Option = {
  el?: HTMLElement | Window
}

export class HeartAnimate {
  private hearts: Heart[] = []

  private el: HTMLElement | Window = window

  constructor(option: Option = {}) {
    if (option.el) {
      this.el = option.el
    }

    this.init()
  }

  private init() {
    this.generateCss('.heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: "";width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}')
    this.attachEvent()
    this.drawHeart()
  }

  private drawHeart() {
    for (let i = 0; i < this.hearts.length; i++) {
      if (this.hearts[i].alpha <= 0) {
        document.body.removeChild(this.hearts[i].el)
        this.hearts.splice(i, 1)
        continue
      }
      this.hearts[i].y--
      this.hearts[i].scale += 0.004
      this.hearts[i].alpha -= 0.01
      this.hearts[i].el.style.cssText = `
        left: ${this.hearts[i].x}px;
        top: ${this.hearts[i].y}px;
        opacity: ${this.hearts[i].alpha};
        transform: scale(${this.hearts[i].scale}, ${this.hearts[i].scale}) rotate(45deg);
        background: ${this.hearts[i].color};
      `
    }
    requestAnimationFrame(() => {
      this.drawHeart()
    })
  }

  private attachEvent() {
    this.el.onclick = (event) => {
      this.createHeart(event)
    }
  }

  private createHeart(event: MouseEvent) {
    const div = document.createElement('div')
    div.className = 'heart'
    this.hearts.push({
      el: div,
      x: event.clientX - 5,
      y: event.clientY - 5,
      scale: 1,
      alpha: 1,
      color: this.randomColor()
    })
    document.body.appendChild(div)
  }

  private generateCss(cssStr: string) {
    const style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(cssStr))
    document.getElementsByTagName('head')[0].appendChild(style)
  }

  private randomColor() {
    const r = ~~(Math.random() * 255)
    const g = ~~(Math.random() * 255)
    const b = ~~(Math.random() * 255)

    return `rgb(${r},${g},${b})`
  }
}