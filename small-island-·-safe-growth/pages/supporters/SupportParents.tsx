import React from 'react';
import { SupportPageLayout } from '../../components/SupportLayout';
import { Section, InfoCard, ActionList, CheckList } from '../../components/ProtectWidgets';
import { Heart, Shield, AlertTriangle } from 'lucide-react';

export const SupportParents: React.FC = () => {
  return (
    <SupportPageLayout
      title="当你是家长 / 照顾者"
      subtitle="当孩子说出“有件事让我很不舒服”时，你的第一反应，往往比你之后做什么更重要。你不需要完美，但可以尽量避免二次伤害。"
      comfortMessages={[
        "很多父母在这种时候会震惊、愤怒、自责，这些都是正常反应。",
        "你不必装作很冷静，但尽量不要把情绪砸回到孩子身上。",
        "你可以一边学习怎么做，一边慢慢调整自己的反应。"
      ]}
      bottomNavText={[
        "你是孩子生命里很重要的人，但你不需要一个人扛完所有事情。",
        "你现在能做的最重要的事，是尽量减少 TA 的自责，让 TA 知道：“你不是一个人”。"
      ]}
      bottomNavLinks={{
        protectLabel: "我想让孩子看看“学会保护自己”",
        helpLabel: "我想了解求助电话和机构"
      }}
    >
      <Section id="first-response" title="孩子第一次开口时，你可以怎么回应">
        <InfoCard 
          icon={Heart}
          title="先稳住关系，再谈其他"
          lines={[
            "当孩子说出“有事情让我很害怕 / 很恶心 / 很不舒服”时，最重要的事情不是马上问清细节，而是让 TA 感到：你在 TA 这边。",
            "你可以先深呼吸几秒，哪怕只是停顿一下，也比立刻爆发更有帮助。"
          ]}
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "say-these",
              title: "你可以先说的三句话",
              detailLines: [
                "“谢谢你告诉我，这一定很不容易。”",
                "“不管发生了什么，你本身没有错。”",
                "“我们可以慢慢来，你不需要一次把所有细节都说出来。”"
              ],
              expandable: false
            },
            {
              id: "avoid-these",
              title: "尽量先不要说的话",
              detailLines: [
                "在那一刻，尽量避免说：“你为什么不早说”“你怎么会这么傻”“你是不是也做错了什么”。这些话会让孩子更难再开口。",
                "也尽量不要马上问一连串非常细的细节，比如：“当时他手放在哪儿”“你有没有反抗”“你穿的是什么衣服”。这些问题可能会让孩子再经历一次创伤。",
                "你可以告诉自己：“具体细节以后可以慢慢搞清楚，现在先别把孩子压垮。”"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>

      <Section id="short-term" title="你可以做的三件具体事情（接下来几天）">
        <ActionList items={[
          {
            id: "health",
            title: "确认身体和基本生活状态",
            detailLines: [
              "先确认孩子现在的安全状况：TA 有没有受伤、有没有现在就需要看医生的地方。",
              "如果你担心有身体伤害、性传播疾病、怀孕风险，可以尽量在专业建议的时间内，带 TA 去正规医院咨询，但提前和 TA 说明：去医院的目的是保护 TA，不是检查 TA 做错了什么。",
              "这几天尽量保证 TA 有相对规律的吃饭和睡眠，即使做不到正常，也尽量不要让 TA 完全一个人面对。"
            ],
            expandable: true
          },
          {
            id: "keep-evidence",
            title: "尽量保留现有证据，而不是强迫“重演”",
            detailLines: [
              "你可以温和地问一句：“你手机里有没有和这件事有关的聊天或记录？如果你愿意，我们可以先保存一下，不用现在看。”",
              "尽量不要让孩子反复讲述细节来“证明”事情的严重性，也不要为寻找证据而让 TA 再次接触加害者或危险场所。",
              "你可以先把相关聊天记录、短信、社交软件截图保存在一个安全的地方，等你和专业人士（比如律师、警方、心理老师）讨论后，再决定如何使用这些资料。"
            ],
            expandable: true
          },
          {
            id: "decide-together",
            title: "和孩子一起讨论下一步，而不是替 TA 全部做主",
            detailLines: [
              "你可以告诉孩子：你希望保护 TA，也希望尽量尊重 TA 的感受，接下来的一些决定可以一起商量。",
              "你可以列出几种可能的选择，例如：是否报案、是否联系学校、是否寻求心理咨询，并简短说明每一种的好处和可能的困难。",
              "如果孩子现在完全抗拒某个选项（比如立刻报警），你可以先不在当下强压 TA，而是告诉 TA：这个选项会一直在，有一天你准备好了，我们再谈。"
            ],
            expandable: true
          }
        ]} />
      </Section>

      <Section id="do-not" title="哪些反应会让孩子更难受（尽量避免）">
        <CheckList items={[
          { id: "blame", text: "把所有注意力都放在“你为什么不早点说”“你当时怎么不反抗”，而不是先关心 TA 现在的状态。" },
          { id: "over-control", text: "一上来就把 TA 的手机没收、完全禁止 TA 出门，而没有解释你的担心，只让 TA 感到被惩罚。" },
          { id: "spread", text: "未经孩子同意，把事情讲给大量亲戚、朋友听，让 TA 失去对自己故事的控制感。" },
          { id: "collapse", text: "在孩子面前完全崩溃，比如反复说“我怎么有你这样的孩子”“我这辈子完了”，让 TA 觉得自己害死了家人。" }
        ]} />
        <div className="mt-4">
          <InfoCard lines={[
            "有时候，你的这些反应来自于震惊、心疼和愤怒，而不是故意伤害孩子。承认这一点没有问题。",
            "你可以在意识到自己某些反应可能伤人之后，直接对孩子说：“刚才我那样说，对你不公平，对不起，我会努力改。”这本身就是在修复关系。"
          ]} />
        </div>
      </Section>

      <Section id="parent-self" title="你也需要支持">
        <InfoCard 
          icon={Shield}
          lines={[
            "作为家长，你可能会自责“我怎么没有保护好 TA”“是不是我教育方式有问题”。这种自责很常见，但如果全部压在你一个人身上，你也会被压垮。",
            "你可以找一个你信任的大人或者专业人士，只谈你自己的感受，不必在孩子面前逞强。",
            "当你有机会在别处释放情绪，你就更有可能在孩子面前保持相对稳定，这对 TA 来说比你“完美无缺”更重要。"
          ]} 
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "find-support",
              title: "为自己找一个可以说话的地方",
              detailLines: [
                "你可以联系心理咨询、亲友、家长互助小组等渠道，把你现在的愤怒、恐惧、自责说出来。",
                "在谈论时尽量避开对孩子的指责，而是把重点放在“这件事对我造成了什么冲击”。",
                "照顾好自己，不是忽视孩子，而是为了能更长久地照顾 TA。"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>
    </SupportPageLayout>
  );
};
