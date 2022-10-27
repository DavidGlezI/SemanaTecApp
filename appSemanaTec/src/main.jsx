import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Front from '/views/Front.jsx'
import Cliente from "/views/Cliente"
import Vendedor from "/views/Vendedor"
import PedidoListo from "/views/PedidoListo"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cliente/>
  </React.StrictMode>
)
