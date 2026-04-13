'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WalletButton() {
  return (
    <ConnectButton
      label="Connect Wallet"
      showBalance={false}
      chainStatus="full"
      accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }}
    />
  );
}