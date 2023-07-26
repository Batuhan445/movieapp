import React from 'react'
import "./globals.css"
import Header from "@/components/header"

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Header/>
            {children}
        </body>

    </html>
  )
}

export default layout