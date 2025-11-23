import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-island-warm mt-12 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Comfort Message */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-island-bg rounded-full text-island-text text-sm md:text-base border border-island-warm">
          <Coffee size={18} className="text-island-primary" />
          <span>如果你此刻感到很难受，可以先停下，喝口水、休息一会儿。</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-island-muted">
          <Link to="/about" className="hover:text-island-primary transition-colors">关于本站</Link>
          <Link to="/privacy" className="hover:text-island-primary transition-colors">隐私说明</Link>
          <Link to="/contact" className="hover:text-island-primary transition-colors">联系我们</Link>
        </div>

        <div className="text-xs text-island-muted/60 space-y-2">
          <p>© 2025 小岛 · 安全成长</p>
          <p>本站内容仅用于科普，不替代专业法律建议和医疗诊断。</p>
        </div>
      </div>
    </footer>
  );
};