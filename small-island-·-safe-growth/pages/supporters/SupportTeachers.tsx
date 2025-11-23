import React from 'react';
import { SupportPageLayout } from '../../components/SupportLayout';
import { Section, InfoCard, ActionList } from '../../components/ProtectWidgets';
import { GraduationCap, FileText, UserCheck, Shield } from 'lucide-react';

export const SupportTeachers: React.FC = () => {
  return (
    <SupportPageLayout
      title="当你是老师 / 学校工作人员"
      subtitle="你也许不是孩子最亲近的人，但你可能是 TA 在学校里最敢试探性开口的人。你的回应，可能决定 TA 是否还有勇气继续求助。"
      comfortMessages={[
        "你不需要立刻判断所有细节，只要先接住这句话：“我遇到了一件让我很不舒服的事”。",
        "你可以在保护学生的同时，也保护自己，遵守程序，不单独承担所有责任。"
      ]}
      bottomNavText={[
        "你不是“万能的老师”，你只是愿意在自己能做到的范围内，站在学生这一边的人。",
        "你的谨慎和耐心，可能会成为学生决定继续活下去、继续求助的重要原因。"
      ]}
      bottomNavLinks={{
        protectLabel: "我想推荐给学生看的页面",
        helpLabel: "我想了解求助电话和机构"
      }}
    >
      <Section id="first-response" title="当学生试探性开口时">
        <InfoCard 
          lines={[
            "学生可能不会直接说“我被性骚扰 / 性侵了”，而是用“有点恶心的事”“奇怪的事”“不太敢说的事情”来试探你。",
            "这时候，你的任务不是立刻追问，而是让 TA 觉得“如果我想讲下去，这是一个可以继续说的地方”。"
          ]}
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "teacher-say",
              title: "可以先说的话",
              detailLines: [
                "“你愿意跟我说这件事，我很重视，也会尽量小心对待。”",
                "“如果你想说，我们可以慢慢来，你可以随时停下来。”",
                "“如果这件事涉及你的安全，我有责任想办法保护你，但我会尽量尊重你的感受。”"
              ],
              expandable: false
            },
            {
              id: "teacher-not",
              title: "尽量不要做的事",
              detailLines: [
                "不要当场表现出过度的震惊或愤怒，比如大喊大叫、马上说“我马上去找他”“怎么会这样”，这会让学生更害怕。可以暂时压住情绪，先听完一点点。",
                "不要随口保证：“我什么都不会告诉别人”，因为很多学校有强制报告或程序要求。比起空头承诺，更诚实的做法是：提前说明你大致需要做的事。",
                "不要在走廊、公共场合边走边聊这类话题，尽量找一个相对安静且不封闭的地方。"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>

      <Section id="procedure" title="在制度内保护学生，也保护自己">
        <InfoCard 
          icon={FileText}
          lines={[
            "很多学校对涉及性侵害、性骚扰未成年人的情况，有强制报告或必须上报的流程。了解你所在学校的规定，是保护学生、也保护你自己的重要一步。",
            "你可以边了解流程，边在执行过程中尽量减少对学生的二次伤害。"
          ]}
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "know-rules",
              title: "先搞清楚学校的规定",
              detailLines: [
                "在平时就可以主动了解学校关于校园欺凌、性骚扰、性侵害的处理流程，而不是等事情发生后才临时抱佛脚。",
                "如果学校有心理中心、学生事务办公室、校法律顾问或辅导员，你可以知道如何联系他们，以及各自负责什么。",
                "当学生来找你时，你可以说：“按照学校规定，我有一些事情需要汇报，但我会尽量在每一步之前先告诉你我们要做什么。”"
              ],
              expandable: true
            },
            {
              id: "document",
              title: "做简要记录，而不是自己当“侦探”",
              detailLines: [
                "你可以在学生允许的前提下，简要记录时间、地点、主要人物和学生自述的关键内容，用学生自己的语言，而不强行归纳。",
                "谨慎避免自己去单独询问被指控的一方、当事人周围的同学，以免无意中破坏证据或造成新的伤害。",
                "把记录保存在符合学校要求的安全位置，后续交给负责处理的部门，而不是自己一个人持有大量敏感信息。"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>

      <Section id="attitude" title="你怎么看待学生，很重要">
        <InfoCard 
          icon={UserCheck}
          lines={[
            "学生可能会反复强调“是不是我想多了”“我也不知道算不算严重”，甚至一边说一边否定自己。",
            "你的回应，会影响 TA 是否觉得自己“有资格”寻求帮助。"
          ]}
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "validate-student",
              title: "肯定学生的感受，而不是替 TA 下结论",
              detailLines: [
                "你可以说：“不管在别人眼里算不算严重，你的感觉是真的。”",
                "你可以说：“你愿意思考这件事、愿意来跟我说，本身就是在保护自己。”",
                "避免说：“你是不是误会了”“可能没那么严重吧”，这些话会让学生直接闭嘴。"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>

      <Section id="teacher-self" title="照顾好自己，才能走得久一点">
        <InfoCard 
          icon={Shield}
          lines={[
            "反复听到类似的事情，会让你产生职业倦怠、愤怒、无力感，这些情绪都是真实的。",
            "你也需要一个可以倾诉、可以得到专业支持的空间，而不是永远保持“专业脸”。"
          ]}
        />
        <div className="mt-6">
          <ActionList items={[
            {
              id: "peer-support",
              title: "和同行或专业人士对话",
              detailLines: [
                "在不泄露学生隐私的前提下，你可以和信任的同事、心理中心的专业人士讨论工作中的压力和困惑。",
                "把自己的压力说出来，不是“泄露秘密”，而是为了让你有能力持续支持更多学生。",
                "如果学校有针对创伤知情教育的培训，你可以主动报名参加。"
              ],
              expandable: true
            }
          ]} />
        </div>
      </Section>
    </SupportPageLayout>
  );
};
