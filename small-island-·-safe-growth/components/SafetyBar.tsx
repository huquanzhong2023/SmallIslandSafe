import React, { useState } from 'react';
import { LogOut, Phone, X } from 'lucide-react';

export const SafetyBar: React.FC = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const handleQuickExit = () => {
    // Immediate redirect to a neutral site
    window.location.replace("https://www.google.com");
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-island-accent shadow-sm px-4 py-2 flex items-center justify-between">
        <div className="hidden md:block text-xs md:text-sm text-island-muted">
          如果在阅读中感到不舒服，随时可以关掉页面或先去做别的事情。
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
          <div className="md:hidden text-xs text-island-muted truncate mr-2">
           感到不适可随时离开
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowEmergencyModal(true)}
              className="px-3 py-1.5 rounded-full border border-island-secondary text-island-text text-xs md:text-sm hover:bg-island-warm transition-colors flex items-center gap-1"
            >
              <Phone size={14} />
              <span>紧急求助</span>
            </button>
            <button 
              onClick={handleQuickExit}
              className="px-4 py-1.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs md:text-sm font-medium transition-colors flex items-center gap-1"
            >
              <LogOut size={14} />
              <span>快速离开</span>
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl animate-fade-in relative">
            <button 
              onClick={() => setShowEmergencyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-island-text mb-4 flex items-center gap-2">
              <Phone className="text-island-primary" /> 
              紧急求助
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                <p className="font-bold text-lg text-red-600">110</p>
                <p className="text-sm text-gray-600">遇到正在发生的危险，请立刻拨打。</p>
              </div>
              <div className="p-4 bg-island-warm rounded-xl border border-island-accent">
                <p className="font-bold text-lg text-island-text">12355</p>
                <p className="text-sm text-gray-600">青少年心理咨询与法律援助热线。</p>
              </div>
              <div className="p-4 bg-island-warm rounded-xl border border-island-accent">
                <p className="font-bold text-lg text-island-text">12338</p>
                <p className="text-sm text-gray-600">妇女维权公益服务热线。</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-center text-gray-400">
              这些电话通常由受过培训的工作人员接听。
            </p>
          </div>
        </div>
      )}
    </>
  );
};