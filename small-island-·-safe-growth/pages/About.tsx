import React from 'react';
import { StaticPageLayout } from '../components/StaticPageLayout';
import { Section, InfoCard } from '../components/ProtectWidgets';
import { Target, Shield, Users, Heart, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <StaticPageLayout
      title="关于本站"
      subtitle="这是一个面向青少年和照顾者的性教育与安全科普网站，不是问责的平台，而是帮助你理解、保护自己和他人的地方。"
      comfortMessages={[
        "你可以慢慢看，不需要一次看完。",
        "你有权利在感觉安全的时候再回来。"
      ]}
    >
      <Section id="mission" title="我们想做什么">
        <InfoCard 
          icon={Target}
          lines={[
            "本站的目标是：用尽量温和、清晰、不责怪当事人的方式，提供性教育与安全相关的知识。",
            "我们希望帮助未成年人和照顾者更早获得“识别危险、保护自己、为他人提供支持”的工具。",
            "我们不要求任何人“做得完美”。我们只希望你在了解信息之后，可以为自己多做一点点有利的选择。"
          ]}
        />
      </Section>

      <Section id="not" title="我们不是什么">
        <InfoCard 
          icon={Shield}
          lines={[
            "本站不是报警平台，也不能代替警方、法院、学校或政府部门做决定。",
            "本站不是紧急求助热线。如果你正在面临立即危险，请优先联系当地的紧急求助电话或身边的大人。",
            "本站提供的内容不是正式法律意见，也不是医疗诊断。具体情况请以专业机构的建议为准。"
          ]}
        />
      </Section>

      <Section id="who" title="谁可能会用到这个网站">
        <InfoCard 
          icon={Users}
          lines={[
            "未成年人：想了解身体、边界、亲密关系、如何应对不舒服的情况。",
            "父母和照顾者：想学会怎样和孩子谈这些话题，尽量避免二次伤害。",
            "老师、学校工作人员：想知道当学生来求助时，如何回应、如何在制度内做事。",
            "同学和朋友：当身边的人遇到事时，希望自己不要只会说“别想了”。"
          ]}
        />
      </Section>

      <Section id="principles" title="我们写内容时遵守的原则">
        <InfoCard 
          icon={Heart}
          lines={[
            "尽量使用简单、直接的语言，不用吓人的术语。",
            "尽量把“能做的小动作”写清楚，而不是只说大道理。",
            "明确区分“施害者的责任”和“当事人的自责”，尽量减少自我厌恶和羞耻感。",
            "在同一页面兼顾当事人和帮助者的视角，让两边都能读懂彼此的难处。"
          ]}
        />
      </Section>

      <Section id="how-to-use" title="你可以怎样使用本站">
        <InfoCard 
          icon={BookOpen}
          lines={[
            "你可以先选与你最接近的角色或年龄段，从那一块开始看，不需要把所有内容都看完。",
            "如果你在阅读过程中感到不舒服，可以停下来，喝水、走动一下，再决定要不要继续。",
            "如果你觉得这里的内容对别人有用，可以在不暴露当事人隐私的前提下，把链接分享给他们。"
          ]}
        />
      </Section>
    </StaticPageLayout>
  );
};