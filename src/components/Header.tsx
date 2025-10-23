import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu, Moon, Sun, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.committees, href: '#committees' },
    { name: t.nav.subteams, href: '#subteams' },
    { name: t.nav.events, href: '#events' },
    { name: t.nav.sponsors, href: '#sponsors' },
    { name: t.nav.contact, href: '#contact' },
    { name: t.nav.blog, href: '#blog' },
    { name: t.nav.xtreme, href: '#xtreme' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground text-lg font-bold">I</span>
            </div>
            {/* Text - Hidden on mobile, visible on desktop */}
            <div className="leading-tight hidden lg:block">
              <h1 className="text-sm font-semibold text-primary whitespace-nowrap">IEEE ESTU</h1>
              <p className="text-xs text-muted-foreground whitespace-nowrap">Student Branch</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 ml-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-[#00629B] transition-all duration-300 text-xs font-medium relative px-2 py-2 rounded-md hover:bg-accent group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00629B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Join Us Button - Desktop */}
            <Button
              asChild
              size="sm"
              className="ml-auto mr-2 text-white rounded-lg hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#00629B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004f7c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00629B'}
            >
              <a href="/membership" rel="noopener noreferrer">
                {t.nav.joinUs}
              </a>
            </Button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-auto h-8 px-2 rounded-lg bg-accent hover:bg-muted flex items-center justify-center gap-1 transition-colors duration-200"
              aria-label="Change language"
            >
              <Languages className="h-3.5 w-3.5 text-foreground" />
              <span className="text-xs font-medium text-foreground">{language.toUpperCase()}</span>
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 rounded-lg bg-accent hover:bg-muted flex items-center justify-center transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 text-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-foreground" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-1.5 ml-auto">
            {/* Join Us Button - Mobile */}
            <Button
              asChild
              size="sm"
              className="text-white rounded-lg hover:shadow-lg transition-all duration-300 h-9 px-3 text-xs"
              style={{ backgroundColor: '#00629B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004f7c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00629B'}
            >
              <a href="/membership" rel="noopener noreferrer">
                {t.nav.joinUs}
              </a>
            </Button>
            
            {/* Language Toggle for Mobile - Icon only */}
            <button
              onClick={toggleLanguage}
              className="w-9 h-9 rounded-lg bg-accent hover:bg-muted flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              aria-label="Change language"
            >
              <Languages className="h-5 w-5 text-foreground" />
            </button>
            
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg bg-accent hover:bg-muted flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="inline-flex items-center justify-center h-9 w-9 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring flex-shrink-0">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent className="dark:bg-slate-950">
                <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>
                <SheetDescription className="sr-only">
                  IEEE ESTU web sitesinin ana navigasyon menüsü
                </SheetDescription>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3 ml-4 mt-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">I</span>
                    </div>
                    <div>
                      <h2 className="font-semibold text-primary">IEEE ESTU</h2>
                      <p className="text-xs text-muted-foreground">Student Branch</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sr-only"
                  >
                    Close Menu
                  </button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-[#00629B] transition-all duration-300 font-medium py-3 px-4 rounded-md hover:bg-accent border-l-4 border-transparent hover:border-[#00629B]"
                    >
                      {item.name}
                    </a>
                  ))}
                  
                  {/* Join Us Button in Mobile Menu */}
                  <Button
                    asChild
                    className="text-white rounded-lg hover:shadow-lg transition-all duration-300 mt-4"
                    style={{ backgroundColor: '#00629B' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004f7c'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00629B'}
                  >
                    <a href="/membership" rel="noopener noreferrer">
                      {t.nav.joinUs}
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}