import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a', 
  props: {
      'href': "https://www.youtube.com/@ThoDaGeEtKuDunGi",
      'target': '_blank'
  },
  children: 'click to visit my channel.'
}

function MyApp() {
  return (
    <div>
      <h1>Custom React Component Test</h1>
    </div>
  )
}

// const AnotherElement = (<a href='https://google.com' target='_blank'></a>)

const AreactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
  </StrictMode>,
  //  AreactElement
)
