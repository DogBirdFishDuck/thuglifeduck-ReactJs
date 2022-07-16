import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './theproj/MyRoutes'
import './theproj/css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
)
