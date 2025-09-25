
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mountain } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SponsorLinkLogo } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/entrepreneurs', label: 'Entrepreneurs' },
  { href: '/diaspora', label: 'Diaspora' },
  { href: '/impact', label: 'Impact' },
  { href: '/growth', label: 'Growth' },
  { href: '/recommendations', label: 'AI Recommendations' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SponsorLinkLogo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">SponsorLink Cameroon</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="flex items-center">
                <SponsorLinkLogo className="h-6 w-6 mr-2" />
                <span className="font-bold">SponsorLink Cameroon</span>
            </Link>
            <div className="grid gap-6 text-lg font-medium mt-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === href ? 'text-foreground' : 'text-foreground/60'
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can be used for search bar if needed */}
          </div>
          <nav className="flex items-center">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/diaspora">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
