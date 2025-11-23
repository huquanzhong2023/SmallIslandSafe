import React from 'react';
import { SupportPageLayout } from '../../components/SupportLayout';
import { Section, InfoCard, ActionList, CheckList, QAList } from '../../components/ProtectWidgets';
import { Users, Lock, HeartHandshake, Shield } from 'lucide-react';

export const SupportFriends: React.FC = () => {
  return (
    <SupportPageLayout
      title="当你是同学 / 朋友"
      subtitle="当 TA 先告诉的是你，而不是大人，你可能会又心疼又害怕，也不知道自己有没有资格帮忙。你不需要变成专家，你只需要尽量做一个“不伤害 TA 的人”。"
      comfortMessages={[
        "你可以陪在 TA 身边，但你没有义务一个人解决所有问题。",
        "说“我不知道该怎么办，但我在这里”本身就是一种帮助。"
      ]}
      bottomNavText={[
        "你能做的，可能不是“解决问题”，而是让 TA 在这个世界上多一个不会责备 TA 的人。",
        "当你觉得撑不住时，也请记得，你也有权利求助。"
      ]}
      bottomNavLinks={{
        protectLabel: "我想推荐给 TA 看的页面",
        helpLabel: "我想了解求助电话和机构"
      }}
    >
      <Section id="first-response" title="TA 第一次跟你说的时候">
        <InfoCard 
          icon={HeartHandshake}
          lines={[
            "TA 可能在犹豫很久之后，才决定跟你说一小部分事情。TA 可能一边说一边自我否定，比如“是不是我想多了”。",
            "在这时候，你的角色是一块“可以让 TA 稍微坐一会儿的地方”，而不是立刻给出解决方案的人。"
          ]}
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "friend-say",
              title: "你可以先说的几句话",
              detailLines: [
                "“我先相信你说的。”",
                "“你肯跟我说这件事，我会尽量小心地听。”",
                "“现在你不一定要决定要不要报警，我们可以慢慢想。”"
              ],
              expandable: false
            },
            {
              id: "friend-not",
              title: "尽量不要说的话",
              detailLines: [
                "“你怎么会这么傻啊”“早跟我说就好了呀”，这些话会让 TA 更加自责。",
                "“算了，忍一忍就过去了”“别想太多了”，会让 TA 觉得自己不配被认真对待。",
                "“我去帮你教训他”“我现在就去发帖骂他”，可能把你们一起拖进更大的危险，也可能让 TA 失去对事情的控制感。"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>

      <Section id="what-you-can" title="你能帮的，和你不用硬扛的">
        <CheckList items={[
          { id: "listen", text: "当 TA 想说的时候，你尽量听，不打断，不催促 TA 说得更细。TA 不想说的部分，你不用逼问。" },
          { id: "keep-secret-limited", text: "在不危及 TA 生命安全的前提下，尊重 TA 不想被到处讲出去的愿望，不在班级群、朋友圈、宿舍八卦中散播 TA 的私事。" },
          { id: "tag-adult", text: "当你觉得事情已经超出你能处理的范围，可以温和地建议 TA 找一个大人或专业机构，你可以提出陪 TA 一起去，而不是替 TA 单独去说。" }
        ]} />
        <div className="mt-4">
          <InfoCard lines={[
            "你不是专业人士，也不是 TA 唯一的支柱。你能陪 TA 走一段路，已经很重要。",
            "当你觉得自己也快撑不住时，不要硬扛，可以为自己找一个可以说话的人或渠道。"
          ]} />
        </div>
      </Section>

      <Section id="encourage-help" title="怎么鼓励 TA 找大人或专业帮助">
        <QAList items={[
          {
            id: "q1",
            question: "如果 TA 一听到“跟大人说”就很抗拒，我能做什么？",
            answer: "你可以先承认 TA 的感受，比如说：“我知道你很怕大人不理解你，不站在你这边。”接着可以说：“如果一直只有你自己扛着，太累了。我们可以一起想想，有没有哪个大人是你稍微没那么害怕的，比如某个老师、亲戚或者心理老师。你不用一次说完，我可以陪你一起去。”"
          },
          {
            id: "q2",
            question: "我能不能帮 TA 偷偷去找老师 / 学校说？",
            answer: "如果你觉得 TA 有生命危险（比如明确说想自杀），你可以在保护自己的前提下尽快找大人或专业机构求助，即使 TA 暂时不想让别人知道。但在其他情况下，最好在行动前和 TA 说明你的想法，尽量做到：不替 TA 完全做主，而是让 TA 知道你在做什么。"
          },
          {
            id: "q3",
            question: "我怕大人会责怪 TA，那我是不是干脆不要说？",
            answer: "你可以尝试先选择“相对更有可能理解”的大人，而不是第一个想到的人。你也可以提前告诉大人：“TA 现在已经很自责了，希望你在听的时候可以先别责怪 TA。”这比你一个人永远守着秘密，更有可能真正保护 TA。"
          }
        ]} />
      </Section>

      <Section id="records" title="保护好聊天记录，保护好自己">
        <InfoCard 
          icon={Lock}
          lines={[
            "如果 TA 在聊天里跟你说了很多细节，这些内容对 TA 来说既是一次倾诉，也可能在将来成为证据。",
            "你可以在征得 TA 同意的前提下，一起商量：哪些记录要保留，怎么保留、放在哪里比较安全。",
            "注意保护好自己的手机和账号安全，不要随意把截图给第三方看，更不要为了宣泄情绪而在公开平台曝光。"
          ]}
        />
      </Section>

      <Section id="friend-self" title="你自己的情绪也很重要">
        <InfoCard 
          icon={Shield}
          lines={[
            "听到朋友经历的这些事情，你自己也可能会感到恶心、愤怒、害怕、无力，这些感受都是真实的。",
            "你可以找一个不涉及当事人的渠道，把自己的情绪说出来，比如给不在这个圈子里的朋友、咨询师、热线讲你的感受，但尽量不要透露 TA 的个人信息和细节。",
            "照顾好自己，不是抛下 TA，而是为了你能更长时间地成为 TA 的支持，而不是再多一个快要崩溃的人。"
          ]}
        />
      </Section>
    </SupportPageLayout>
  );
};
