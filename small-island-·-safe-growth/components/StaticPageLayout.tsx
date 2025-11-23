import React from 'react';
import { Heart } from 'lucide-react';

interface StaticPageLayoutProps {
  title: string;
  subtitle: string;
  comfortMessages?: string[];
  children: React.ReactNode;
  bottomNote?: string;
}

export const StaticPageLayout: React.FC<StaticPageLayoutProps> = ({
  title,
  subtitle,
  comfortMessages,
  children,
  bottomNote
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
      {comfortMessages && comfortMessages.length > 0 && (
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
      )}

      {/* Main Content */}
      <main className="space-y-12">
        {children}
      </main>
      
      {/* Bottom Note */}
      {bottomNote && (
        <div className="pt-8 mt-12 border-t border-island-warm text-center md:text-left text-sm text-island-muted">
            {bottomNote}
        </div>
      )}
    </div>
  );
};