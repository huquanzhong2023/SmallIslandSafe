import React from 'react';
import { StaticPageLayout } from '../components/StaticPageLayout';
import { Section, InfoCard } from '../components/ProtectWidgets';
import { Mail, AlertTriangle, MessageSquare, Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  return (
    <StaticPageLayout
      title="联系方式"
      subtitle="如果你想对网站内容提意见、反馈错误，或者你是专业人士、机构，希望合作或补充信息，可以通过下面的方式联系我们。"
      comfortMessages={[
        "本页不是紧急求助页面。",
        "如果你此刻处在危险之中，请优先联系当地的紧急求助电话或身边的大人。"
      ]}
    >
      <Section id="not-emergency" title="先说明这不是紧急求助渠道">
        <InfoCard 
          icon={AlertTriangle}
          lines={[
            "我们无法做到 24 小时随时在线，也不能代替警方、医院或正式热线立即介入。",
            "如果你正在面临立即危险（例如被堵在某个地方、被持续威胁），请优先使用当地的紧急电话或向身边的大人求助。",
            "如果你只是暂时需要有人听你说说话、或者想咨询更具体的支持渠道，可以参考“求助与法律”模块里的“求助电话与支持机构”一页。"
          ]}
        >
          <div className="pt-4">
             <Link to="/help/hotlines" className="text-sm font-medium text-island-primary hover:underline">去查看求助电话与支持机构 →</Link>
          </div>
        </InfoCard>
      </Section>

      <Section id="for-users" title="如果你是本站的普通访客 / 当事人">
        <InfoCard 
          icon={MessageSquare}
          lines={[
            "如果你只是想说：“这些内容对我有帮助 / 哪些地方让我不舒服”，欢迎写信告诉我们。",
            "请尽量不要在邮件或表单中写出你或他人的真实姓名、详细地址、具体学校班级等可以直接识别身份的信息。",
            "如果你想讲自己的经历，请只讲你愿意说的部分，并在邮件开头写一句类似“我现在只想先说一点点，不一定要得到答案”，这样我们在阅读时会更加小心。"
          ]}
        />
      </Section>

      <Section id="methods" title="联系方式">
        <InfoCard 
          icon={Mail}
          title="邮箱"
          lines={[
            "联系邮箱：smallislandsafe@gmail.com",
            "你可以用任意邮箱给我们写信。如果你担心隐私，可以使用不包含真实姓名的邮箱地址。",
            "邮件标题可以简单写成：“网站反馈”“内容建议”“技术问题”等，不需要在标题中写具体经历。"
          ]}
        />
      </Section>

      <Section id="for-professionals" title="如果你是专业人士 / 机构">
        <InfoCard 
          icon={Briefcase}
          lines={[
            "如果你是心理咨询师、律师、社工、研究者、公益组织或一线工作者，对本站内容有补充、纠正或合作建议，很欢迎你联系我们。",
            "在邮件中简要说明你的专业背景、所在机构，以及你希望合作或反馈的方向，我们会在能力范围内尽量回复。",
            "为保护当事人，请尽量不要在邮件中附带未经当事人同意的个人隐私材料。"
          ]}
        />
      </Section>

      <Section id="reply" title="回信时间与无法回复的情况">
        <InfoCard 
          icon={Clock}
          lines={[
            "我们会尽量在合理的时间内查看邮件，但不能保证每一封都能及时回复，尤其是个案求助类邮件。",
            "即使没有收到回复，你在写信时付出的力气和表达的感受，依然是被尊重的。",
            "对于明显需要紧急介入的危险情况，我们只能在力所能及的范围内提供信息指引，无法代替任何官方机构采取行动。"
          ]}
        />
      </Section>
    </StaticPageLayout>
  );
};