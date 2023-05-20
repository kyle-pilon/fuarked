// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Rubik } from 'next/font/google';
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
}

export const theme = extendTheme({ colors })

const rubik = Rubik({ subsets: ['latin'] });


export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
        <style jsx global>
            {`
            :root {
                --font-rubik: ${rubik.style.fontFamily};
            }
            `}
      </style>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}