import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CloudRain, Users, ArrowRight, Sun, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-island-warm/30 px-6 pt-12 pb-20 md:pt-20 md:pb-32 rounded-b-[3rem]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-island-text leading-tight">
              你值得被<br />
              <span className="text-island-primary">温柔地对待</span>
            </h1>
            <p className="text-lg text-island-muted max-w-md">
              这里是关于“青春期安全与成长”的科普小岛。没有评判，只有安静的陪伴。
            </p>
          </div>
          <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden bg-white/50 backdrop-blur border border-white flex items-center justify-center">
            {/* Abstract Illustration Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-island-secondary/20 to-island-accent/20" />
            <div className="relative flex flex-col items-center p-8 text-center">
                <Sun className="text-island-primary mb-4" size={48} strokeWidth={1.5} />
                <p className="text-island-muted/80 font-medium">Safe Growth Island</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Entry Cards */}
      <section className="px-4 md:px-8 -mt-16 md:-mt-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <Link to="/protect" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-island-primary/20 flex flex-col">
            <div className="bg-green-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-green-600">
              <Shield size={24} />
            </div>
            <h2 className="text-xl font-bold text-island-text mb-2">学会保护自己</h2>
            <p className="text-sm text-island-muted mb-6 flex-grow">
              适合 10–18 岁青少年。了解身体界限与安全。
            </p>
            <div className="flex items-center text-island-primary font-medium text-sm group-hover:gap-2 transition-all">
              进入科普 <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/uncomfortable" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-island-primary/20 flex flex-col">
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <CloudRain size={24} />
            </div>
            <h2 className="text-xl font-bold text-island-text mb-2">我遇到了不舒服的事</h2>
            <p className="text-sm text-island-muted mb-6 flex-grow">
              如果你正在担心刚刚发生或曾经发生的事，可以从这里开始。
            </p>
            <div className="flex items-center text-island-primary font-medium text-sm group-hover:gap-2 transition-all">
              慢慢了解 <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/supporters" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-island-primary/20 flex flex-col">
            <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Users size={24} />
            </div>
            <h2 className="text-xl font-bold text-island-text mb-2">想帮助孩子 / 朋友</h2>
            <p className="text-sm text-island-muted mb-6 flex-grow">
              我是家长、老师或朋友，我想知道如何正确地支持他们。
            </p>
            <div className="flex items-center text-island-primary font-medium text-sm group-hover:gap-2 transition-all">
              查看指南 <ArrowRight size={16} className="ml-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* Info & Emotion Bar */}
      <section className="px-4 max-w-4xl mx-auto space-y-16 pt-8">
        <div className="bg-island-bg p-2 md:p-4 rounded-full border border-island-secondary/30 flex items-center justify-center">
           <Heart size={16} className="text-island-primary mr-2" />
           <p className="text-sm md:text-base text-island-text/80 font-medium">你可以按自己的速度阅读。你随时可以停下。</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-island-primary">
                    <Sun size={24} />
                </div>
                <h3 className="font-semibold text-island-text">安静的科普</h3>
                <p className="text-sm text-island-muted">不评判，不责怪。</p>
            </div>
             <div className="space-y-3">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-island-primary">
                    <Shield size={24} />
                </div>
                <h3 className="font-semibold text-island-text">实用的保护</h3>
                <p className="text-sm text-island-muted">具体的方法和步骤。</p>
            </div>
             <div className="space-y-3">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-island-primary">
                    <Users size={24} />
                </div>
                <h3 className="font-semibold text-island-text">温柔的求助</h3>
                <p className="text-sm text-island-muted">安全、隐私的渠道。</p>
            </div>
        </div>
      </section>
    </div>
  );
};