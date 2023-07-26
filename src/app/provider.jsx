"use-client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider