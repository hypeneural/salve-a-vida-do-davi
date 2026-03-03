import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Menu, MessageCircle, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#historia', label: 'História do Davi' },
    { href: '#dmd', label: 'Sobre a DMD' },
    { href: '#tratamento', label: 'Tratamento' },
    { href: '#ajudar', label: 'Como Ajudar' },
    { href: '#transparencia', label: 'Transparência' },
    { href: '#faq', label: 'FAQ' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/80'
          : 'bg-white/90 backdrop-blur-sm border-b border-white/60'
        }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full gradient-davi-hero flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="leading-tight">
              <p className="text-xs text-gray-600">Campanha solidária</p>
              <h1 className="text-base sm:text-lg font-bold text-davi-green-dark">
                Salve a Vida do Davi
              </h1>
              <p className="text-[11px] sm:text-xs text-gray-600">Juntos pela esperança</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-gray-700 hover:text-davi-green-dark transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-davi-blue transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5548996175837"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-davi-green-light transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>

            <Button
              onClick={() => scrollToSection('#ajudar')}
              className="bg-davi-yellow hover:bg-davi-yellow/90 text-davi-green-dark font-bold px-3 py-2 text-sm sm:px-4 lg:px-5 lg:py-2.5 lg:text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              DOAR AGORA
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-davi-green-dark transition-colors duration-200"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm text-gray-700 hover:text-davi-green-dark transition-colors duration-200 font-semibold py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-3 border-t border-gray-100">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-davi-blue transition-colors duration-200"
                >
                  <Instagram size={18} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://wa.me/5548996175837"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-davi-green-light transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
