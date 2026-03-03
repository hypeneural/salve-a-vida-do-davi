import { useState, useEffect } from 'react';
import { Heart, ExternalLink, MessageCircle, Gift, ChevronDown, Sparkles } from 'lucide-react';
import DonationPixDialog from '@/components/DonationPixDialog';
import { Toaster } from '@/components/ui/toaster';

const LINKS = [
    {
        id: 'doe',
        label: 'Doe aqui',
        sublabel: 'PIX rápido e seguro',
        url: null,
        icon: Heart,
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        iconBg: 'bg-blue-500',
        pulse: true,
    },
    {
        id: 'site',
        label: 'Site oficial',
        sublabel: 'Conheça a história completa do Davi',
        url: 'https://salveavidadedavi.com.br/',
        icon: ExternalLink,
        gradient: 'from-emerald-600 to-green-700',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        iconBg: 'bg-emerald-600',
    },
    {
        id: 'rifa',
        label: 'Rifa solidária',
        sublabel: 'Rifa oficial da Campanha do Davi',
        url: 'https://loja.salveavidadedavi.com.br/campanha/camisa-da-sele-o-brasileira-autografada-pelo-neymar',
        icon: Gift,
        gradient: 'from-pink-500 to-rose-600',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20',
        iconBg: 'bg-pink-500',
    },
    {
        id: 'whatsapp',
        label: 'Fale com o pai do Davi',
        sublabel: 'Luiz Fernando Rodrigues',
        url: 'https://wa.me/5548996175837',
        icon: MessageCircle,
        gradient: 'from-green-500 to-emerald-600',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20',
        iconBg: 'bg-green-500',
    },
];

const LinkPage = () => {
    const [pixOpen, setPixOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [tapped, setTapped] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = (link: (typeof LINKS)[0]) => {
        setTapped(link.id);
        setTimeout(() => setTapped(null), 300);

        if (link.url) {
            window.open(link.url, '_blank', 'noopener,noreferrer');
        } else {
            setPixOpen(true);
        }
    };

    return (
        <div className="min-h-[100dvh] flex flex-col items-center bg-[#D5E57C] text-gray-900 overflow-hidden relative select-none">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #216D2C 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Soft glow accents */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-emerald-500/10 rounded-full blur-[80px]" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-md mx-auto px-5 py-10 flex flex-col items-center">
                {/* Profile Section */}
                <div
                    className={`flex flex-col items-center mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                        }`}
                >
                    {/* Avatar */}
                    <div className="relative mb-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-md opacity-40 scale-110 animate-pulse" />
                        <div className="relative w-28 h-28 rounded-full overflow-hidden border-[3px] border-white/70 shadow-xl">
                            <img
                                src="/images/davi-1.webp"
                                alt="Davi"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-extrabold text-[#216D2C] mb-1 tracking-tight">
                        Salve a vida do Davi
                    </h1>
                    <p className="text-sm text-[#216D2C]/60 text-center max-w-[280px] leading-relaxed">
                        Davi precisa do Elevidys para frear a DMD. Cada gesto importa. 💚
                    </p>
                </div>

                {/* Links */}
                <div className="w-full space-y-4 mb-10">
                    {LINKS.map((link, index) => {
                        const Icon = link.icon;
                        const isFirst = index === 0;
                        return (
                            <button
                                key={link.id}
                                onClick={() => handleClick(link)}
                                className={`
                  group w-full relative overflow-hidden rounded-2xl
                  bg-white/70 backdrop-blur-sm
                  border ${link.border}
                  shadow-lg hover:shadow-xl
                  transition-all duration-300 ease-out
                  hover:scale-[1.03] hover:bg-white/90
                  active:scale-[0.95] active:shadow-md
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  ${tapped === link.id ? 'ring-4 ring-[#216D2C]/20' : ''}
                `}
                                style={{
                                    transitionDelay: mounted ? `${(index + 1) * 120}ms` : '0ms',
                                }}
                            >
                                {/* Animated shine sweep */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                {/* Active ripple */}
                                <div className="absolute inset-0 bg-[#216D2C]/5 opacity-0 active:opacity-100 transition-opacity duration-150 rounded-2xl" />

                                {/* Inner */}
                                <div className={`relative flex items-center gap-4 ${isFirst ? 'px-5 py-5' : 'px-5 py-4'}`}>
                                    <div
                                        className={`
                      ${isFirst ? 'w-14 h-14' : 'w-12 h-12'}
                      rounded-xl ${link.iconBg}
                      flex items-center justify-center flex-shrink-0
                      shadow-lg
                      transition-transform duration-300
                      group-hover:rotate-6 group-hover:scale-110
                      group-active:scale-90
                      ${link.pulse ? 'animate-pulse' : ''}
                    `}
                                    >
                                        <Icon className={`${isFirst ? 'w-7 h-7' : 'w-6 h-6'} text-white drop-shadow`} />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <p className={`font-bold text-[#216D2C] leading-tight ${isFirst ? 'text-[17px]' : 'text-[15px]'}`}>
                                            {link.label}
                                        </p>
                                        <p className="text-gray-500 text-xs mt-0.5">{link.sublabel}</p>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90 group-hover:translate-x-1 group-active:translate-x-2 transition-transform" />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* PIX Key quick copy */}
                <div
                    className={`w-full mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                    style={{ transitionDelay: mounted ? '600ms' : '0ms' }}
                >
                    <div className="bg-white/50 backdrop-blur-sm border border-[#216D2C]/10 rounded-2xl p-5 text-center active:bg-white/70 transition-colors shadow-md">
                        <p className="text-xs text-[#216D2C]/50 uppercase tracking-widest mb-2 font-semibold">Chave PIX (CPF)</p>
                        <button
                            onClick={async () => {
                                try {
                                    await navigator.clipboard.writeText('141.897.869-85');
                                    const el = document.getElementById('pix-copied');
                                    if (el) {
                                        el.textContent = 'Copiado! ✓';
                                        el.classList.add('text-emerald-600');
                                        setTimeout(() => {
                                            el.textContent = 'Toque para copiar';
                                            el.classList.remove('text-emerald-600');
                                        }, 2000);
                                    }
                                } catch {
                                    // fallback
                                }
                            }}
                            className="group w-full"
                        >
                            <p className="text-xl font-mono font-bold text-[#216D2C] tracking-wider mb-1 group-active:scale-95 transition-transform">
                                141.897.869-85
                            </p>
                            <p id="pix-copied" className="text-xs text-gray-400 transition-colors">Toque para copiar</p>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div
                    className={`text-center transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ transitionDelay: mounted ? '800ms' : '0ms' }}
                >
                    <p className="text-xs text-[#216D2C]/30 font-medium">salveavidadedavi.com.br</p>
                </div>
            </div>

            <DonationPixDialog open={pixOpen} onOpenChange={setPixOpen} />
            <Toaster />
        </div>
    );
};

export default LinkPage;
