import React from 'react'
import "./globals.css"
import Header from "@/components/header"
import Provider from './provider'

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <Header/>
            {children}
            </Provider>
        </body>

    </html>
  )
}

export default layout