import React from 'react';
import { Link } from 'react-router-dom';
import { SupportPageLayout } from '../components/SupportLayout';
import { Section, InfoCard } from '../components/ProtectWidgets';
import { User, GraduationCap, Users, ArrowRight } from 'lucide-react';

export const Supporters: React.FC = () => {
  return (
    <SupportPageLayout
      title="我要帮助孩子 / 朋友"
      subtitle="当你关心的人遇到让 TA 很不舒服的事时，你的陪伴可以很重要。但你不需要成为专家，也不需要独自扛起一切。这里是一些可以一起走的小步骤。"
      comfortMessages={[
        "你已经在尝试关心另一个人，这本身就很不容易。",
        "你不需要完美，只要尽量不伤害、尽量多一点耐心，就已经在帮忙了。"
      ]}
      hideBottomNav={true}
    >
      <Section id="who-are-you" title="你是谁、你和 TA 是什么关系">
        <InfoCard 
          title="选择一个最接近你身份的入口"
          lines={[
            "如果你是父母、其他家庭成员或主要照顾者，可以从“我是家长 / 照顾者”开始看。",
            "如果你是老师、学校心理老师、教练、宿管等学校/机构工作人员，可以看“我是老师 / 学校工作人员”。",
            "如果你是同学、室友、朋友、网友，可以看“我是同学 / 朋友”。",
            "如果你有多重身份，比如既是老师又是家长，你可以根据当前情境分别看看不同页面。"
          ]}
        />
      </Section>

      <Section id="no-perfect" title="你可以做，也可以不做">
        <InfoCard 
          lines={[
            "有时候，你会担心自己做得不够，或者做错了就会造成很大后果。",
            "你也许会不知道该从哪里问、会不会问痛了 TA，或者害怕自己一时情绪失控。",
            "这些担心都很正常。本网站的其它页面会告诉你：有哪些事是“尽量做的”，有哪些事是“尽量不要做的”。",
            "你不用一下子做到全部。你能在 TA 身边多停留几分钟、少说一句责怪，都已经是在帮忙。"
          ]}
        />
      </Section>

      <Section id="entries" title="从这里选一个入口开始">
        <div className="grid md:grid-cols-3 gap-6">
          <EntryCard 
            to="/supporters/parents" 
            icon={User} 
            color="text-blue-500" 
            bg="bg-blue-50"
            title="我是家长 / 照顾者"
            desc="你可能是最先被求助的人，也可能是最后一个知道的。但无论早晚，你都有机会减少 TA 的自责和恐惧。"
            btnText="去看看我可以做什么"
          />
          <EntryCard 
            to="/supporters/teachers" 
            icon={GraduationCap} 
            color="text-green-500" 
            bg="bg-green-50"
            title="我是老师 / 学校工作人员"
            desc="你可能是被学生“试探性”透露对象，也可能从同学、家长或其他老师那里间接得知。"
            btnText="去看看我可以做什么"
          />
          <EntryCard 
            to="/supporters/friends" 
            icon={Users} 
            color="text-orange-500" 
            bg="bg-orange-50"
            title="我是同学 / 朋友"
            desc="TA 可能先告诉的是你，而不是大人。你不需要立刻给出答案，只要先成为一个不责备 TA 的人。"
            btnText="去看看我可以做什么"
          />
        </div>
      </Section>
    </SupportPageLayout>
  );
};

const EntryCard: React.FC<{ 
  to: string; 
  icon: any; 
  color: string; 
  bg: string;
  title: string; 
  desc: string;
  btnText: string;
}> = ({ to, icon: Icon, color, bg, title, desc, btnText }) => (
  <Link 
    to={to} 
    className="group flex flex-col bg-white rounded-3xl p-6 shadow-sm border border-island-warm hover:shadow-lg hover:border-island-primary/30 transition-all duration-300"
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${bg} ${color}`}>
      <Icon size={24} />
    </div>
    <div className="mb-6 flex-grow">
      <h3 className="text-xl font-bold text-island-text mb-2">{title}</h3>
      <p className="text-sm text-island-muted leading-relaxed">{desc}</p>
    </div>
    <div className="flex items-center text-sm font-bold text-island-primary group-hover:gap-2 transition-all">
      {btnText} <ArrowRight size={16} className="ml-1" />
    </div>
  </Link>
);
