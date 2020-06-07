# react-window-opener

> A small reactjs utility to make sure that window.open actually opens popup and cominecate with the parent window.opner

[![NPM](https://img.shields.io/npm/v/react-window-opener.svg)](https://www.npmjs.com/package/react-window-opener) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

all you need to import it like that
```jsx
const WindowOpener = dynamic(() => import('react-window-opener'), { ssr: false })

```

## License

MIT © [ahakem](https://github.com/ahakem)
