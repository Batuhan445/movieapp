import React from 'react'
import "./globals.css"
import Header from "@/components/Header"
import Provider from './provider'
import Tabs from '@/components/Tabs'

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <Header/>
            <Tabs/>
            {children}
            </Provider>
        </body>

    </html>
  )
}

export default layout