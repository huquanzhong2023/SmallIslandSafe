import React from 'react';
import { HelpPageLayout } from '../../components/HelpLayout';
import { Section, InfoCard, ActionList, QAList } from '../../components/ProtectWidgets';
import { School, FileSearch, UserCheck, AlertTriangle } from 'lucide-react';

export const HelpSchool: React.FC = () => {
  return (
    <HelpPageLayout
      title="在学校 / 机构内部的求助途径"
      subtitle="当事情发生在学校、培训班或其他机构里时，你除了社会上的报警和法律途径，一般还会有一些校内 / 内部的渠道可以使用。"
      comfortMessages={[
        "你有权利让学校或机构知道：在他们管理的范围内，有人做了伤害你的事情。",
        "你也有权利在这个过程中要求尽量保护你的隐私和安全。"
      ]}
      backLink={{ to: '/help', label: '返回求助与法律总览' }}
    >
      <Section id="roles" title="可能存在的校内 / 机构内角色">
        <InfoCard 
          icon={UserCheck}
          lines={[
            "在不同地方，名称可能不一样，但通常会有：班主任或导师、年级组长、学生事务部门、心理中心、纪检 / 监察部门等。",
            "你可以先了解：你所在学校 / 机构里，如果学生遭遇性骚扰、性侵害或严重欺凌，官方公布的处理渠道是什么。",
            "如果你不确定从哪一步开始，可以先找一个你相对信任的老师或工作人员，问清楚流程。"
          ]}
        />
      </Section>

      <Section id="prepare" title="向学校 / 机构反映问题前，你可以先做什么">
        <ActionList items={[
          {
            id: "check-policy",
            title: "先看看公开的制度",
            detailLines: [
              "有些学校会在官网、手册里写明：如何处理性骚扰、性侵害、校园欺凌等问题，你可以先找一找这些文件。",
              "如果你不方便自己查，可以让信任的老师、家长或同学帮你一起找。",
              "了解制度，可以让你在反映问题时更清楚地知道：对方“应该做什么”。"
            ],
            expandable: true
          },
          {
            id: "decide-what-to-say",
            title: "想好你最想让对方知道的重点",
            detailLines: [
              "你不一定要在一开始就讲完所有细节，可以先决定自己最想让学校知道什么。",
              "比如：“某老师多次在私下对我做出不当接触”“某个地方经常发生让人很不舒服的事情”。",
              "你可以在纸上写出 1–3 个最重要的点，在谈话时照着看，避免紧张时全部忘记。"
            ],
            expandable: true
          }
        ]} />
      </Section>

      <Section id="requests" title="在学校 / 机构里面，你可以提出的合理要求">
        <InfoCard 
          icon={FileSearch}
          lines={[
            "在很多学校 / 机构的制度中，当你反映性骚扰、性侵害或严重不当行为时，你有权利提出一些合理的要求，例如：",
            "希望学校在处理过程中，尽量保护你的个人信息不被无关人员知道；",
            "希望在必要时调整座位、寝室安排、课程安排等，以避免和加害者频繁接触；",
            "希望在谈话、调查过程中，有你信任的人陪同。"
          ]}
        />
      </Section>

      <Section id="disappointed" title="当学校 / 机构的反应让你失望">
        <QAList items={[
          {
            id: "q1",
            question: "如果学校不重视，或者想压下去，我还能做什么？",
            answer: "你可以记录下你与学校 / 机构沟通的大致时间、对象和内容，比如“某年某月某日找了谁，对方怎么回答的”。这些记录在未来如果需要向更高一级部门、媒体或法律机构反映时，可能会有帮助。在不危及你个人安全的前提下，你可以考虑寻求校外的法律援助机构或维权组织的建议，看看有没有其他渠道。"
          },
          {
            id: "q2",
            question: "如果我还在这个学校 / 机构里，会不会说了以后日子更难过？",
            answer: "这是很多人非常现实的担心。你可以和信任的人一起评估风险，衡量现在的环境和可能的后果，然后做出最贴近你当下处境的决定。无论你最终选择多说一点、少说一点，还是先保持沉默，都不代表你“活该”受到伤害。"
          }
        ]} />
      </Section>
    </HelpPageLayout>
  );
};