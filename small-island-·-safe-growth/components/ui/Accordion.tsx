import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, LucideIcon } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  sensitive?: boolean;
  icon?: LucideIcon;
  hint?: string;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  children, 
  sensitive = false,
  icon: Icon,
  hint,
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Fallback for legacy sensitive prop if no icon provided
  const DisplayIcon = Icon || (sensitive ? AlertCircle : null);

  return (
    <div className={`border rounded-2xl overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'bg-white border-island-primary/30 shadow-sm' : 'bg-white border-island-warm/50 shadow-sm'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-island-bg/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {DisplayIcon && (
            <div className={`p-2 rounded-lg shrink-0 ${isOpen ? 'bg-island-primary/10 text-island-primary' : 'bg-island-warm text-island-muted'}`}>
              <DisplayIcon size={20} />
            </div>
          )}
          <span className={`font-medium text-lg ${sensitive ? 'text-island-text' : 'text-island-text'}`}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-3">
            {sensitive && !isOpen && !hint && (
                <span className="hidden md:inline-block text-xs px-2 py-1 bg-island-warm/50 rounded text-island-muted">
                  点击展开
                </span>
            )}
            {hint && (
                <span className="hidden md:inline-block text-xs px-2 py-1 bg-island-warm/50 rounded text-island-muted">
                    {hint}
                </span>
            )}
            {isOpen ? <ChevronUp className="text-island-muted" size={20} /> : <ChevronDown className="text-island-muted" size={20} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-island-text/80 leading-relaxed animate-fade-in border-t border-island-warm/30">
          {children}
        </div>
      )}
    </div>
  );
};