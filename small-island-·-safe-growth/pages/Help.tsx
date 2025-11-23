import React from 'react';
import { Link } from 'react-router-dom';
import { HelpPageLayout } from '../components/HelpLayout';
import { Section, InfoCard, ActionList } from '../components/ProtectWidgets';
import { ShieldAlert, Phone, Gavel, School, ArrowRight } from 'lucide-react';

export const Help: React.FC = () => {
  return (
    <HelpPageLayout
      title="求助与法律"
      subtitle="你不一定现在就决定要不要报警、要不要走法律程序。但你有权利先了解：有哪些可以求助的人和机构，如果你选择报警或不报警，分别会发生什么。"
      comfortMessages={[
        "你有权利一边了解信息，一边慢慢决定下一步，而不是被别人催着做选择。",
        "不管你最后选不选择走法律途径，你都配得上被认真对待和保护。"
      ]}
    >
      <Section id="safe-now" title="如果你现在感觉很危险">
        <InfoCard 
          icon={ShieldAlert}
          lines={[
            "如果你此刻正在被威胁、被跟踪、被堵在某个地方，请优先考虑让自己脱离眼前的危险。",
            "如果你所在地区有紧急报警电话或紧急求助热线，你可以考虑尽量在安全的位置拨打。",
            "如果你身边有你信任的大人或同伴，可以先向他们发出求助信号，让他们帮助你联系专业机构。"
          ]}
        />
        
        {/* Static Hotline Reference */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex flex-col items-center justify-center text-center">
             <span className="text-2xl font-bold text-red-600 mb-1">110</span>
             <span className="text-xs text-red-800/70 font-medium">公安报警</span>
          </div>
          <div className="bg-island-warm/50 border border-island-secondary/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
             <span className="text-2xl font-bold text-island-primary mb-1">12355</span>
             <span className="text-xs text-island-text/70 font-medium">青少年服务台</span>
          </div>
          <div className="bg-island-warm/50 border border-island-secondary/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
             <span className="text-2xl font-bold text-island-primary mb-1">12338</span>
             <span className="text-xs text-island-text/70 font-medium">妇女维权公益热线</span>
          </div>
        </div>
        <p className="text-xs text-center text-island-muted mt-3">
           * 以上号码仅供参考，请在确保安全的环境下拨打。
        </p>

        <div className="mt-6">
          <ActionList items={[
            { 
              id: "go-hotlines", 
              title: "查看详细求助电话和支持机构说明", 
              detailLines: ["你可以先去“求助电话与机构”那一页，了解拨打前可以做什么准备，以及不同机构能提供什么。"], 
              expandable: false 
            }
          ]} />
        </div>
      </Section>

      <Section id="three-paths" title="你可以从这三个方向中的任何一个开始">
        <div className="grid md:grid-cols-3 gap-6">
          <HelpEntryCard 
            to="/help/hotlines"
            icon={Phone}
            bg="bg-orange-50"
            color="text-orange-600"
            title="我需要尽快和一个真实的人说话"
            desc="你可能现在就需要有人听你说、帮你想下一步，或者帮你联系其他资源。"
            btnText="去“求助电话与机构”"
          />
          <HelpEntryCard 
            to="/help/legal"
            icon={Gavel}
            bg="bg-blue-50"
            color="text-blue-600"
            title="我在考虑要不要报警 / 走法律程序"
            desc="你可能在犹豫要不要报警、担心别人不信、害怕流程太复杂。本页会帮你先了解基本情况。"
            btnText="去“法律途径与须知”"
          />
          <HelpEntryCard 
            to="/help/school-work"
            icon={School}
            bg="bg-green-50"
            color="text-green-600"
            title="事情发生在学校 / 培训班 / 机构里"
            desc="如果对方是老师、教练、同学、学长学姐、培训机构工作人员，你还可以使用学校或机构内部的渠道。"
            btnText="去“内部求助途径”"
          />
        </div>
      </Section>

      <Section id="no-rush" title="你可以不急着做决定">
        <InfoCard 
          lines={[
            "很多人会在“报警 / 不报警”“说 / 不说”之间来回摇摆，这是正常的。",
            "你可以先用一点点时间收集信息，和你信任的人讨论，再决定要不要采取下一步行动。",
            "不管你现在怎么选，都不代表你以后永远不能改变想法。"
          ]}
        />
      </Section>
    </HelpPageLayout>
  );
};

const HelpEntryCard: React.FC<{
  to: string;
  icon: any;
  bg: string;
  color: string;
  title: string;
  desc: string;
  btnText: string;
}> = ({ to, icon: Icon, bg, color, title, desc, btnText }) => (
  <Link 
    to={to} 
    className="group flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-island-warm hover:shadow-md hover:border-island-primary/30 transition-all duration-300"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bg} ${color}`}>
      <Icon size={24} />
    </div>
    <div className="mb-6 flex-grow space-y-2">
      <h3 className="font-bold text-island-text leading-snug">{title}</h3>
      <p className="text-sm text-island-muted leading-relaxed">{desc}</p>
    </div>
    <div className="flex items-center text-sm font-bold text-island-primary group-hover:gap-2 transition-all">
      {btnText} <ArrowRight size={16} className="ml-1" />
    </div>
  </Link>
);