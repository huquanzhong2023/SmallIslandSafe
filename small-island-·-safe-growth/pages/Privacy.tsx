import React from 'react';
import { StaticPageLayout } from '../components/StaticPageLayout';
import { Section, InfoCard, ActionList } from '../components/ProtectWidgets';
import { Shield, Lock, Smartphone, Database, UserX, Eye } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <StaticPageLayout
      title="隐私说明"
      subtitle="我们希望在尽量少收集信息的前提下，让网站可以正常运行。你有权知道有哪些数据可能被处理，以及我们不会做什么。"
      comfortMessages={[
        "你有权利关心“谁在看我的信息”。",
        "你可以根据这些说明决定要不要继续使用本站。"
      ]}
      bottomNote="本隐私说明可能会随着网站的调整而更新。重要变更会在页面上明确标出。"
    >
      <Section id="intro" title="先说几句重要的话">
        <InfoCard 
          icon={Shield}
          lines={[
            "本页只是一份简单说明，不是法律文件。不同地区的法律要求可能不同，请以当地法规为准。",
            "我们的设计目标是“尽量少收集、尽量少留痕”，尤其是针对可能处于危险或高度敏感处境的人。",
            "如果你使用的是公共电脑或他人的设备，请在使用后注意清理浏览记录，保护自己的隐私。"
          ]}
        />
      </Section>

      <Section id="we-avoid" title="我们尽量不收集什么">
        <InfoCard 
          icon={UserX}
          lines={[
            "我们不会主动要求你注册账户来浏览大部分内容。",
            "我们不会主动要求你填写真实姓名、家庭地址、学校名称等敏感身份信息。",
            "我们不会在网页里设计“必须讲出自己经历才能继续”的表单。你可以在完全匿名的状态下浏览大部分页面。"
          ]}
        />
      </Section>

      <Section id="technical" title="为了让网站运作，我们可能会处理的技术信息">
        <InfoCard 
          icon={Database}
          lines={[
            "和大多数网站一样，服务器可能会记录一些基础技术信息，例如访问时间、访问的页面、浏览器类型等，用于统计访问量和维护网站安全。",
            "如果我们使用 cookies 或本地存储，主要用于：记住你的语言设置、是否已经看过某些提示、你在本机上的勾选记录等。",
            "我们不会将这些技术信息与现实世界中的真实身份主动关联，也不会用来做定向广告。"
          ]}
        />
      </Section>

      <Section id="user-input" title="你在网站上输入的内容">
        <InfoCard 
          icon={Smartphone}
          lines={[
            "如果未来有自测、笔记等工具，我们会尽量采用“只保存在你的浏览器本地”的设计，而不是把内容上传到服务器。",
            "如果有需要上传到服务器的表单（例如联系邮箱、反馈意见），页面上会明确标注“这些内容会被发送给网站维护者”。",
            "请尽量不要在任何输入框中写出你或他人的真实姓名、详细地址、身份证号码、具体学校班级等可以直接识别身份的信息，除非你非常确定这样做是安全的。"
          ]}
        />
      </Section>

      <Section id="we-wont" title="我们不会做的事">
        <InfoCard 
          icon={Lock}
          lines={[
            "我们不会把你的个人信息出售给广告商或用于商业推广。",
            "我们不会因为你在这里浏览过哪些内容，就主动联系你的学校、家人或其他机构。",
            "我们不会在未经你知情的情况下，把可以识别你个人的内容公开展示。"
          ]}
        />
      </Section>

      <Section id="self-protect" title="你可以怎样进一步保护自己">
        <ActionList items={[
          {
            id: "clear-history",
            title: "在公共设备上及时清理记录",
            detailLines: [
              "如果你是在网吧、公共图书馆、学校机房等地方浏览本网站，离开前可以清理浏览记录和缓存。",
              "如果你不确定怎么操作，可以搜索“清除浏览记录 + 你的浏览器名称”，按步骤操作。",
              "在别人的设备上浏览时，尽量避免登录个人邮箱或社交账号。"
            ],
            expandable: true
          },
          {
            id: "avoid-details",
            title: "少写能直接识别身份的细节",
            detailLines: [
              "在任何地方讲述自己的经历时，都尽量避免写出真实姓名、具体学校、班级、家庭地址等。",
              "如果必须沟通这些信息（例如联系专业机构），可以优先选择相对更安全的联系方式，比如官方公布的热线或加密通信方式。",
              "你有权利在任何时候停止分享更多细节。"
            ],
            expandable: true
          }
        ]} />
      </Section>

      <Section id="minors" title="未成年人特别说明">
        <InfoCard 
          icon={Eye}
          lines={[
            "如果你未满法定成年年龄，请在可能的情况下，尽量在可靠的大人陪同下进行涉及个人信息的操作，例如报警、正式投诉等。",
            "如果你不确定某个信息会不会被用在对你不利的地方，你有权利先问清楚再决定要不要提供。",
            "如果你对本站的隐私处理方式有疑问，可以通过联系方式页面给我们写信，我们会尽量用简单的语言回答。"
          ]}
        />
      </Section>
    </StaticPageLayout>
  );
};