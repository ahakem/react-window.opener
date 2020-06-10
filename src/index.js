import React from 'react'

let browser = window
let popup = null
let timer = null

function watcher() {
  if (popup === null) {
    clearInterval(timer)
    timer = null
  } else if (popup !== null && !popup.closed) {
    popup.focus()
  } else if (popup !== null && popup.closed) {
    clearInterval(timer)
    browser.focus()
    timer = null
    popup = null
  }
}

const WindowOpener = (props) => {
  const { children, width, height, className } = props
  const opts = `dependent=${1}, alwaysOnTop=${1}, alwaysRaised=${1}, alwaysRaised=${1}, width=${
    width || 300
  }, height=${height || 400} left=${left} top=${top}`
  browser = window.self
  browser.onSuccess = (res) => {
    props.bridge(null, res)
  }

  browser.onError = (error) => {
    props.bridge(error)
  }

  browser.onOpen = (message) => {
    props.bridge(null, message)
  }

  browser.onClose = (message) => {
    props.bridge(null, message)
  }

  const onClickHandler = (evt) => {
    console.log('onClickHandler', props)

    const { url, name } = props
    if (popup && !popup.closed) {
      popup.focus()

      return
    }

    popup = browser.open(url, name, opts)


    if (timer === null) {
      timer = setInterval(watcher, 500)
    }

    return
  }

  return <div className = {className} onClick={onClickHandler}>{children}</div>
}

const dualScreenLeft =
  window.screenLeft !== undefined ? window.screenLeft : window.screenX
const dualScreenTop =
  window.screenTop !== undefined ? window.screenTop : window.screenY

const width = window.innerWidth
  ? window.innerWidth
  : document.documentElement.clientWidth
  ? document.documentElement.clientWidth
  : screen.width
const height = window.innerHeight
  ? window.innerHeight
  : document.documentElement.clientHeight
  ? document.documentElement.clientHeight
  : screen.height

const systemZoom = width / window.screen.availWidth
const left = (width - 300) / 2 / systemZoom + dualScreenLeft
const top = (height - 400) / 2 / systemZoom + dualScreenTop

export default WindowOpener
