import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Shield, ArrowRight, X } from 'lucide-react';

export const Protect: React.FC = () => {
  const [showAgeHint, setShowAgeHint] = useState(false);

  const ageGroups = [
    {
      id: '10-13',
      range: '10–13 岁',
      title: '身体和边界',
      desc: '我的身体属于我。学会识别什么是“越界”，以及如何说“不”。',
      icon: Shield,
      path: '/protect/10-13',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      id: '13-15',
      range: '13–15 岁',
      title: '同学、老师和网络',
      desc: '在更复杂的社交中保护自己。识别“玩笑”与“伤害”，管理网络隐私。',
      icon: Users,
      path: '/protect/13-15',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: '15-18',
      range: '15–18 岁',
      title: '亲密关系与约会',
      desc: '恋爱中的同意与尊重。识别危险信号，为约会和见面做好准备。',
      icon: Heart,
      path: '/protect/15-18',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-island-text">学会保护自己</h1>
        <p className="text-lg text-island-muted max-w-2xl mx-auto">
          不同年龄会遇到不同的挑战。你可以选择最适合你现在的阶段进入。
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {ageGroups.map((group) => (
          <Link 
            key={group.id}
            to={group.path}
            className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-island-warm hover:shadow-lg hover:border-island-primary/30 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${group.bg} ${group.color} transition-transform group-hover:scale-110`}>
              <group.icon size={28} />
            </div>
            <div className="space-y-2 mb-8 flex-grow">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-island-bg border border-island-warm ${group.color}`}>
                {group.range}
              </span>
              <h2 className="text-2xl font-bold text-island-text">{group.title}</h2>
              <p className="text-island-muted text-sm leading-relaxed">{group.desc}</p>
            </div>
            <div className="flex items-center font-medium text-island-primary group-hover:gap-2 transition-all">
              进入阅读 <ArrowRight size={18} className="ml-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Hint Footer */}
      <div className="text-center">
        <button 
          onClick={() => setShowAgeHint(true)}
          className="text-sm text-island-muted hover:text-island-primary underline underline-offset-4 decoration-island-warm"
        >
          我不清楚该选哪一个？
        </button>
      </div>

      {/* Simple Modal */}
      {showAgeHint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl animate-fade-in relative">
            <button 
              onClick={() => setShowAgeHint(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            <h3 className="font-bold text-lg text-island-text mb-2">关于年龄选择</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              这些年龄只是一个大致的参考。
              <br/><br/>
              如果你觉得虽然只有 12 岁，但已经在用手机社交，完全可以看 13–15 岁的内容。
              <br/>
              如果你已经 18 岁，但想重新确认身体界限，看 10–13 岁的内容也完全没问题。
            </p>
          </div>
        </div>