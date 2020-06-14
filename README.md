# react-window-opener

> A small reactjs utility to make sure that window.open actually opens popup and cominecate with the parent window.opener

[![NPM](https://img.shields.io/npm/v/react-window-opener.svg)](https://www.npmjs.com/package/react-window-opener) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

* [Why I may use this](#why-i-may-use-this)
* [Demo](#demo)
* [Install](#Install)
* [Usage for React App](#usage-for-react-app)
* [How To use it in NextJs App](#how-to-use-it-in-nextjs-app)
* [Props](#props)


## Why I may use this
If you are using React and opening a window popup for any reason like Google authentication, for example, you will need to pass the data back to the parent page. but as you are using react you can't access the function in your page components via 'window.opener'، 

## Demo
[https://ahakem.github.io/react-window.opener/#/](https://ahakem.github.io/react-window.opener/#/)

## Install

```bash
npm install react-window-opener
```

or

```bash
yarn add react-window-opener
```

## Usage for React App

### Parent Page

```jsx

import WindowOpener from 'react-window-opener'

export default function Example  {
    const childResponse = (err, res) => {
    if (err) {
      console.log(res, 'err')
    }
    console.log(res, 'res')
  }
    return (
      <WindowOpener url='/popUp-URL' bridge={childResponse}>
      )
}
```

### Child Page (The PopUp)

 just pass the needed data using
 `window.opener.onSuccess(state)`

```jsx
export default function SmallWindow() {
  const [state, setstate] = useState('')
  const update = (evt) => {
    setstate(evt.target.value)
    window.opener.onSuccess(state)
  }
  return (
    <>
      <input value={state} onChange={update} />
      <button
        onClick={() => {
          window.close()
        }}
      >
        Close Me
      </button>
    </>
  )
}
```
## How To use it in NextJs App

All you need to import it like that more info [here](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr)

```jsx
import dynamic from 'next/dynamic'
const WindowOpener = dynamic(() => import('react-window-opener'), { ssr: false })

```
## Props
|    Params    |   Value  |  Default Value   |   Description    |
|:------------:|:--------:|:----------------:|:----------------:|
|    url       |  string  |   REQUIRED       | the url for the page which will open in the popup |
|    bridge    |  function|   REQUIRED       | Function to handel the result that you will pass from the child popup |
|    width     |  number  |   300            | PopUp Width |
|    height    |  number  |   400            | PopUp Height |
|    className    |    |      Empty         |  |


## License

MIT © [ahakem](https://github.com/ahakem)

## credits
The idea came from this repo with some enhancment 
[EnetoJara/window-opener](https://github.com/EnetoJara/window-opener)
