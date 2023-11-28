'use client'

import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import { 
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
  trustWallet, 
} from '@thirdweb-dev/react'
import { activeChain } from '@/lib/web3'
import './globals.css'

// Configuring the Inter font using next/font/google. You can change it to any font you prefer
const inter = Inter({ subsets: ['latin'] })

/**
 * RootLayout Component
 * 
 * This component sets up the foundational layout for the application, integrating
 * Chakra UI, ThirdwebProvider for wallet connectivity, and custom font settings.
 * 
 * @param children - React nodes to be rendered inside the layout.
 * @returns The structured layout component with necessary providers and configurations.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <ThirdwebProvider
        clientId={process.env.THIRDWEB_CLIENT_ID}
        activeChain={activeChain}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          localWallet(),
          trustWallet(),
          embeddedWallet({
            auth: {
              options: ["email", "google", "apple"],
            },
          }),
        ]}
        // The authConfig is optional and can be removed if desired. 
        authConfig={{
          authUrl: "/api/auth",
          domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
        }}
      >
        <html lang="en">
          <head>
            <title>
              dApp-as-a-Service
            </title>
            <meta name="description" content="dApp-as-a-service template using Next.js, TypeScript, TailwindCSS, Thirdweb, Chakra UI, and Next Auth" />
          </head>
          <body className={inter.className}>{children}</body>
        </html>
      </ThirdwebProvider>
    </ChakraProvider>
  )
}
