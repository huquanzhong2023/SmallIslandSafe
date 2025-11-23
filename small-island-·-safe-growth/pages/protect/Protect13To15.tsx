import React from 'react';
import { ProtectPageLayout } from '../../components/ProtectLayout';
import { Section, InfoCard, ActionList, CheckList } from '../../components/ProtectWidgets';
import { Users, AlertTriangle, Smartphone, UserX } from 'lucide-react';

export const Protect13To15: React.FC = () => {
  return (
    <ProtectPageLayout
      title="在同学、老师和网络中保护自己（13–15 岁）"
      subtitle="你正在接触越来越多的人。你有权利在这些关系里被尊重，而不是被利用、被逼着配合。"
      comfortMessages={[
        "你不需要为了合群而接受让自己难受的行为。",
        "就算所有人都在笑，你还是可以选择不笑。",
        "如果你觉得哪里不对，那通常真的有哪里不对。"
      ]}
      bottomNavText={[
        "很多成年人到现在还在学习如何在关系里保护自己。你在十三四岁就开始思考这件事，本身已经很了不起。",
        "有时候你会为了不被孤立而假装没事，这不代表你同意了那些行为。"
      ]}
    >
      <Section id="respect" title="被尊重的大致感觉">
        <InfoCard 
          icon={Users}
          lines={[
            "同学和朋友不会总拿你的身体、性别、家人当作笑话来消遣。",
            "当你说“不好笑”“我不喜欢这样”，对方会停下来，而不是立刻骂你玻璃心。",
            "老师和其他大人会保持合适的距离，不会经常用暧昧、纠缠的方式接近你，也不会把一些话单独悄悄说给你听。"
          ]}
        />
      </Section>

      <Section id="not-jokes" title="这些并不是“正常玩笑”">
        <div className="space-y-4">
            <InfoCard title="言语和起哄" lines={[
                "经常当众评论你的胸、屁股、腿等身体部位，让你觉得想找地缝钻进去。",
                "在群里用你的照片拼表情包，配上带性暗示、侮辱性的文字。",
                "把你和色情内容、流言联系在一起，当成班级里的固定笑料。"
            ]} />
            <InfoCard title="身体和偷拍" lines={[
                "在走廊、楼梯、体育课时，故意碰你胸部、屁股、大腿，然后说人太多挤一下。",
                "用手机偷拍你的裙底、领口，或者在你不注意时拍你不想被拍的角度。",
                "以输赢惩罚的名义设计“身体惩罚”，比如输了就要被摸、被抱、被抱起走。"
            ]} />
            <InfoCard title="我是不是太敏感了？" icon={AlertTriangle} lines={[
                "当一件事已经让你觉得恶心、羞耻、紧张，这就已经足够成为问题，不需要再问它是不是“客观严重”。",
                "很多人为了不被孤立，会假装一起笑，但这并不代表事情就是对的。",
                "你有权利对这些事情感到反感，而不是强迫自己忍着。"
            ]} />
        </div>
      </Section>

      <Section id="adults" title="当不合适的人是老师或补课老师">
        <InfoCard 
            icon={UserX}
            lines={[
                "有的大人会频繁给你发私信，特别是在很晚的时候，还要求你不要跟别人说。",
                "对方以“特别关心你”为理由，单独约你吃饭、逛街、看电影，避开你的家人。",
                "见面或上课时，对方有很多不必要的身体接触，或者用让你不自在的眼神打量你。"
            ]} 
        />
        <div className="mt-6">
            <ActionList items={[
                {
                    id: "save-chat",
                    title: "先把痕迹留住",
                    detailLines: [
                      "保留聊天记录、来电记录和社交平台消息，不要轻易删除。",
                      "如果你担心以后找不到这些内容，可以把重要部分截图，存放在一个只有你能打开的地方。",
                      "这些记录日后如果需要求助，是保护你的证据；它们的存在不代表你做错了什么。"
                    ],
                    expandable: true
                },
                {
                    id: "avoid-alone",
                    title: "尽量避免单独相处",
                    detailLines: [
                      "如果对方总是想制造只有你们两个人在场的情况，你可以主动提出在教室、办公室或者公共区域谈。",
                      "如果不得不在一个房间里，可以尽量让门保持开着，或者告诉别人你会在那间房里待多久。",
                      "你不需要顾虑对方的面子超过自己的安全。"
                    ],
                    expandable: true
                },
                {
                    id: "talk-adult",
                    title: "找一个相对安全的大人聊聊",
                    detailLines: [
                      "你可以先不用直接说是哪个老师或补课老师，只是抛出一个问题，看看大人的反应。",
                      "例如可以说：“如果有老师经常半夜给学生发消息，你觉得正常吗？”听听对方怎么说。",
                      "当你找到愿意认真听、愿意帮你分析的人，再决定要不要讲得更具体。"
                    ],
                    expandable: true
                }
            ]} />
        </div>
      </Section>

      <Section id="phone" title="我可以在手机上做的事">
        <ActionList items={[
            {
                id: "privacy-settings",
                title: "检查一次隐私设置",
                detailLines: [
                  "打开你常用的社交软件，把“可以直接加你好友的人”“谁能给你发消息”“谁能看你的动态”都看一遍。",
                  "把你不希望随便加你的人，改成需要你同意才能加；把你不想让他看到你生活的人，从可见名单里去掉。",
                  "如果你不太会设置，可以请一个你信任的大人或同学陪你一起操作。"
                ],
                expandable: true
            },
            {
                id: "handle-strangers",
                title: "处理陌生人发来的内容",
                detailLines: [
                  "如果陌生账号给你发带性暗示的文字、图片或链接，你可以直接不点、不回，并立刻拉黑。",
                  "你不需要向陌生人解释，也不需要礼貌回应。保护自己比礼貌更重要。",
                  "如果你感到恶心或害怕，可以把这一段截图留存，并告诉一个你信任的人。"
                ],
                expandable: true
            },
            {
                id: "ask-for-photos",
                title: "当有人要你发照片或视频",
                detailLines: [
                  "任何人向你要隐私照片或视频，哪怕对方说“我绝对不会给别人看”，你都可以直接拒绝。",
                  "你可以回一句：“我不发这种东西。”然后结束话题。",
                  "如果对方继续纠缠、威胁或骂你，你可以拉黑并保存聊天记录，这说明问题在对方，而不在你。"
                ],
                expandable: true
            }
        ]} />
      </Section>

      <Section id="cyberbullying" title="面对网络暴力或性骚扰时">
         <InfoCard icon={Smartphone} lines={[
             "第一时间截图保存对方的头像、昵称、聊天记录，不要只停留在情绪里。",
             "使用平台自带的举报、屏蔽、拉黑功能，不必和对方继续争吵。",
             "把截图发给一个你信任的大人，让他陪你一起判断是否需要联系学校、家长或警方。",
             "你不是“多事的人”，你只是在尝试保护自己。"
         ]} />
      </Section>

      <Section id="small-steps" title="今天就可以做的三步">
        <CheckList items={[
            { id: "check-privacy", text: "在手机里检查一次所有社交软件的隐私设置，把你不希望打扰你的人挡在外面。" },
            { id: "buddy-system", text: "选出一个你信任的同学或朋友，约定彼此作为“紧急联系人”，当任意一方发出约定信号时，另一个人会尽量陪同或帮忙寻找大人。" },
            { id: "talk-joke-vs-harass", text: "找一个你信任的大人，和他聊一次：在你学校里，哪些话是玩笑，哪些已经是骚扰，把你最近看到的事情说一说，不一定只说自己的事。" }
        ]} />
      </Section>
    </ProtectPageLayout>
  );
};