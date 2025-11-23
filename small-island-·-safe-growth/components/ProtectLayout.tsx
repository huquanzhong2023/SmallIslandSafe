import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProtectPageLayoutProps {
  title: string;
  subtitle: string;
  comfortMessages: string[];
  children: React.ReactNode;
  bottomNavText?: string[]; // Optional custom text for footer
}

export const ProtectPageLayout: React.FC<ProtectPageLayoutProps> = ({
  title,
  subtitle,
  comfortMessages,
  children,
  bottomNavText
}) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      {/* Header */}
      <header className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-island-text leading-tight">
          {title}
        </h1>
        <p className="text-lg text-island-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </header>

      {/* Comfort Card */}
      <div className="bg-island-warm/40 border border-island-secondary/20 rounded-2xl p-6 flex gap-4 items-start">
        <div className="bg-white p-2 rounded-full text-island-primary shrink-0 mt-1 shadow-sm">
             <Heart size={18} fill="currentColor" className="opacity-20" />
        </div>
        <div className="space-y-2">
          {comfortMessages.map((msg, idx) => (
            <p key={idx} className="text-island-text/90 text-sm md:text-base font-medium">
              {msg}
            </p>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="space-y-12">
        {children}
      </main>

      {/* Bottom Nav */}
      <ProtectBottomNav customText={bottomNavText} />
    </div>
  );
};

interface ProtectBottomNavProps {
  customText?: string[];
}

export const ProtectBottomNav: React.FC<ProtectBottomNavProps> = ({ customText }) => {
  const defaultText = [
    "你不需要哪一条都做到，才算“保护自己成功”。",
    "有时候，活下来本身就是一种很大的努力。"
  ];

  const textToDisplay = customText || defaultText;

  return (
    <div className="pt-12 mt-12 border-t border-island-warm flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="text-center md:text-left space-y-2 max-w-md">
        {textToDisplay.map((line, idx) => (
             <p key={idx} className={`${idx === 0 ? 'font-bold text-island-text' : 'text-sm text-island-muted'}`}>
                 {line}
             </p>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
        <Link 
          to="/uncomfortable" 
          className="px-6 py-3 rounded-xl border border-island-warm bg-white text-island-text hover:border-island-primary/30 hover:text-island-primary transition-colors text-center text-sm font-bold shadow-sm"
        >
          我遇到了不舒服的事情
        </Link>
        <Link 
          to="/help" 
          className="px-6 py-3 rounded-xl bg-island-bg text-island-primary border border-island-primary/20 hover:bg-island-primary hover:text-white transition-colors text-center text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
        >
          看看求助电话和机构 <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};