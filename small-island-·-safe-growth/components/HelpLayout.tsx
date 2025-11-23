import React from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HelpPageLayoutProps {
  title: string;
  subtitle: string;
  comfortMessages: string[];
  children: React.ReactNode;
  backLink?: {
    to: string;
    label: string;
  };
}

export const HelpPageLayout: React.FC<HelpPageLayoutProps> = ({
  title,
  subtitle,
  comfortMessages,
  children,
  backLink,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Back Link */}
      {backLink && (
        <div className="animate-fade-in">
          <Link 
            to={backLink.to} 
            className="inline-flex items-center text-sm font-medium text-island-muted hover:text-island-primary transition-colors group"
          >
            <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            {backLink.label}
          </Link>
        </div>
      )}

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

      {/* Legal Disclaimer Footer */}
      <footer className="pt-8 mt-12 border-t border-island-warm text-center md:text-left">
        <p className="text-sm text-island-muted leading-relaxed bg-island-bg p-4 rounded-xl border border-island-warm">
          本页内容只是一般性信息，不能替代律师、警方或专业机构的正式意见。不同地区的做法可能不同，请以当地法律和专业建议为准。
        </p>
      </footer>
    </div>
  );
};