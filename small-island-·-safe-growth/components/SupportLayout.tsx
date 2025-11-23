import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SupportPageLayoutProps {
  title: string;
  subtitle: string;
  comfortMessages: string[];
  children: React.ReactNode;
  bottomNavText?: string[];
  bottomNavLinks?: {
    protectLabel: string;
    helpLabel: string;
  };
  hideBottomNav?: boolean;
}

export const SupportPageLayout: React.FC<SupportPageLayoutProps> = ({
  title,
  subtitle,
  comfortMessages,
  children,
  bottomNavText,
  bottomNavLinks,
  hideBottomNav = false
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
      {!hideBottomNav && (
        <SupportBottomNav customText={bottomNavText} links={bottomNavLinks} />
      )}
    </div>
  );
};

interface SupportBottomNavProps {
  customText?: string[];
  links?: {
    protectLabel: string;
    helpLabel: string;
  };
}

export const SupportBottomNav: React.FC<SupportBottomNavProps> = ({ customText, links }) => {
  const defaultText = [
    "你是孩子生命里很重要的人，但你不需要一个人扛完所有事情。",
    "你现在能做的最重要的事，是尽量减少 TA 的自责，让 TA 知道：“你不是一个人”。"
  ];
  
  const defaultLinks = {
      protectLabel: "我想让孩子看看“学会保护自己”",
      helpLabel: "我想了解求助电话和机构"
  };

  const textToDisplay = customText || defaultText;
  const linksToUse = links || defaultLinks;

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
          to="/protect" 
          className="px-6 py-3 rounded-xl border border-island-warm bg-white text-island-text hover:border-island-primary/30 hover:text-island-primary transition-colors text-center text-sm font-bold shadow-sm"
        >
          {linksToUse.protectLabel}
        </Link>
        <Link 
          to="/help" 
          className="px-6 py-3 rounded-xl bg-island-bg text-island-primary border border-island-primary/20 hover:bg-island-primary hover:text-white transition-colors text-center text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
        >
          {linksToUse.helpLabel} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};
