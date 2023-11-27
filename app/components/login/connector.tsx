'use client';

import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react"

/**
 * Connector Component
 * 
 * This component renders the ConnectWallet interface from Thirdweb,
 * providing users with options to connect their blockchain wallet.
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