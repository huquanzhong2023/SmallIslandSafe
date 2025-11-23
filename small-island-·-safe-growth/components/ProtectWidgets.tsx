import React, { useState } from 'react';
import { LucideIcon, Check, ChevronDown, ChevronUp, Info, HelpCircle, Circle } from 'lucide-react';

// --- Section ---
interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, description, children }) => {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <div className="space-y-2 border-l-4 border-island-primary/50 pl-5">
        <h2 className="text-xl md:text-2xl font-bold text-island-text">{title}</h2>
        {description && <p className="text-island-muted text-sm md:text-base">{description}</p>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

// --- InfoCard ---
interface InfoCardProps {
  title?: string;
  lines?: string[];
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, lines, icon: Icon, children }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-island-warm/60 flex flex-col md:flex-row gap-4 transition-all hover:shadow-md">
      {Icon && (
        <div className="shrink-0 bg-island-bg w-10 h-10 rounded-full flex items-center justify-center text-island-primary">
          <Icon size={20} />
        </div>
      )}
      <div className="flex-grow space-y-3">
        {title && <h3 className="font-bold text-island-text text-lg">{title}</h3>}
        {lines && (
          <ul className="space-y-3">
            {lines.map((line, idx) => (
              <li key={idx} className="text-island-text/80 text-sm md:text-base flex items-start gap-2.5">
                <Circle size={8} className="mt-2 shrink-0 text-island-secondary fill-island-secondary" />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
};

// --- CheckList ---
interface CheckListItem {
  id: string;
  text: string;
}

interface CheckListProps {
  items: CheckListItem[];
}

export const CheckList: React.FC<CheckListProps> = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const next = new Set(checkedItems);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setCheckedItems(next);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isChecked = checkedItems.has(item.id);
        return (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 group ${
              isChecked
                ? 'bg-island-secondary/10 border-island-secondary text-island-text'
                : 'bg-white border-island-warm text-island-text/80 hover:border-island-primary/30'
            }`}
          >
            <div className={`shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
              isChecked ? 'bg-island-secondary border-island-secondary text-white' : 'bg-white border-gray-300 group-hover:border-island-secondary/50'
            }`}>
              {isChecked && <Check size={14} strokeWidth={3} />}
            </div>
            <span className="leading-relaxed">{item.text}</span>
          </button>
        );
      })}
    </div>
  );
};

// --- QAList ---
interface QAItem {
  id: string;
  question: string;
  answer: string;
}

interface QAListProps {
  items: QAItem[];
}

export const QAList: React.FC<QAListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-island-warm/20 rounded-xl p-5 border border-island-warm space-y-2">
          <div className="flex items-start gap-2">
             <HelpCircle size={18} className="text-island-primary shrink-0 mt-0.5" />
             <h4 className="font-bold text-island-text">{item.question}</h4>
          </div>
          <p className="text-sm md:text-base text-island-muted pl-7 leading-relaxed">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

// --- ActionList ---
interface ActionItem {
  id: string;
  title: string;
  detailLines?: string[];
  expandable?: boolean;
}

interface ActionListProps {
  items: ActionItem[];
}

export const ActionList: React.FC<ActionListProps> = ({ items }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setExpandedIds(next);
  };

  return (
    <div className="grid gap-3">
      {items.map((item) => {
        const isExpanded = expandedIds.has(item.id);
        const hasDetails = item.detailLines && item.detailLines.length > 0;
        
        return (
          <div key={item.id} className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
              isExpanded ? 'border-island-primary/40 shadow-md ring-1 ring-island-primary/10' : 'border-island-warm hover:border-island-secondary/50'
          }`}>
            <button 
                onClick={() => hasDetails && toggle(item.id)}
                className={`w-full text-left p-5 flex justify-between items-center gap-4 ${!hasDetails ? 'cursor-default' : 'cursor-pointer'}`}
            >
                <h4 className="font-bold text-island-text text-base md:text-lg">{item.title}</h4>
                {hasDetails && (
                    <div className={`p-1.5 rounded-full shrink-0 transition-colors ${isExpanded ? 'bg-island-bg text-island-primary' : 'text-island-muted/50'}`}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                )}
            </button>
            
            {/* Show details if expanded or if not expandable (always show) - but logic here assumes expandable behavior if details exist */}
            {hasDetails && (isExpanded || !item.expandable) && (
                <div className="px-5 pb-5 pt-0 animate-fade-in">
                    <div className="pt-3 border-t border-dashed border-island-warm space-y-2">
                         {item.detailLines?.map((line, idx) => (
                             <p key={idx} className="text-sm md:text-base text-island-text/80 leading-relaxed pl-2 border-l-2 border-island-warm/50">
                                 {line}
                             </p>
                         ))}
                    </div>
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
};