"use-client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const provider = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default provider