import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(

    <NextUIProvider>
      {/* <main className=" dark text-foreground bg-background"> */}
      <main className="">
        <App />
      </main>
    </NextUIProvider>
)
