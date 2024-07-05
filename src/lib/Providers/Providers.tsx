"use client"

import { ThemeProvider } from "@emotion/react"
import { theme } from "../theme/theme"

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Providers