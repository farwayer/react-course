import React from 'react'
import {render} from 'react-dom'


function App() {
  return (
    <span>Hello, world!</span>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
render(<App/>, root)
