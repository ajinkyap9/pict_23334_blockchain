import { WalletButton } from '@/components/wallet-button';
import { ERC721InteractionPanel } from '@/lib/erc721-stylus/src';

export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'My DApp';

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-12 md:px-10 md:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.16),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(249,115,22,0.12),transparent_30%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="rounded-2xl border border-black/10 bg-white/80 p-7 shadow-xl shadow-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-black/30">
          <p className="mb-4 inline-flex items-center rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            Arbitrum Sepolia Testnet
          </p>
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">{appName}</h1>
          <p className="max-w-2xl text-sm text-zinc-700 md:text-base dark:text-zinc-300">
            Explore ERC-721 interactions in a single dashboard. Connect your wallet, inspect ownership,
            mint test NFTs, and transfer tokens with instant on-chain feedback.
          </p>

          <div className="mt-7 flex justify-start">
            <WalletButton />
          </div>
        </section>

        <div className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-lg shadow-black/5 backdrop-blur-sm md:p-6 dark:border-white/10 dark:bg-black/30">
          <ERC721InteractionPanel />
        </div>
      </div>
    </main>
  );
}