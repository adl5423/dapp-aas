'use client';

import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react"

/**
 * Connector Component
 * 
 * This component renders the ConnectWallet interface from Thirdweb,
 * providing users with options to connect their blockchain wallet.
 * 
 * This button is fully customizable and can support any appearance and theming desired.
 * For a facilitated customization process, visit https://thirdweb.com/dashboard/wallets/connect to adjust the theming and appereance properties. 
 * 
 * Copy and paste the customizations under this component.
 * 
 * @returns The ConnectWallet component with configured properties.
 */
export default function Connector() {
  return (
    <ConnectWallet
      theme={"dark"}
      auth={{ loginOptional: false }}
      modalTitle={"Choose Your Method"}
      modalSize={"compact"}
      modalTitleIconUrl={""}
    />
  )
}