import Link from 'next/link';
import { TapTapImpactLogo } from '@/components/icons';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container grid items-center gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
                <TapTapImpactLogo className="h-6 w-6" />
                <span className="font-bold">Taptap Impact</span>
            </Link>
          <p className="text-sm text-muted-foreground">
            Connecting Cameroonian entrepreneurs with diaspora sponsors.
          </p>
        </div>
        <nav className="grid gap-2 text-sm">
          <h3 className="font-semibold">Platform</h3>
          <Link href="/entrepreneurs" className="text-muted-foreground hover:text-foreground">For Entrepreneurs</Link>
          <Link href="/diaspora" className="text-muted-foreground hover:text-foreground">For Diaspora</Link>
          <Link href="/impact" className="text-muted-foreground hover:text-foreground">Impact</Link>
        </nav>
        <nav className="grid gap-2 text-sm">
          <h3 className="font-semibold">Company</h3>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
          <Link href="/growth" className="text-muted-foreground hover:text-foreground">Growth</Link>
          <Link href="/about#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Powered By</h3>
          <div className="text-lg font-bold tapsend-fg">TapTapSend</div>
          <p className="text-sm text-muted-foreground">
            All transactions and user growth powered by TapTapSend&apos;s secure and fast money transfer service.
          </p>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex items-center justify-between px-4 py-4 text-sm text-muted-foreground md:px-6">
          <p>© {new Date().getFullYear()} Taptap Impact. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
