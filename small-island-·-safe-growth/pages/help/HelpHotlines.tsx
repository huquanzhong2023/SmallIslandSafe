import React from 'react';
import { HelpPageLayout } from '../../components/HelpLayout';
import { Section, InfoCard, ActionList } from '../../components/ProtectWidgets';
import { Phone, HeartHandshake, Scale, ShieldAlert } from 'lucide-react';

export const HelpHotlines: React.FC = () => {
  return (
    <HelpPageLayout
      title="求助电话与支持机构"
      subtitle="当你觉得一个人扛不住时，可以考虑联系热线、机构或专业人士。你不需要讲得很完整，也不需要一开始就相信他们，只要先给自己一个“有人在听”的机会。"
      comfortMessages={[
        "很多人打热线前会犹豫很久，手已经在发抖，这都很正常。",
        "你可以随时挂断、随时停止，不需要为此向谁道歉。"
      ]}
      backLink={{ to: '/help', label: '返回求助与法律总览' }}
    >
      <Section id="before-call" title="打电话 / 发信息前，你可以先知道的几件事">
        <InfoCard 
          lines={[
            "你可以只说一个大概，而不用一开始就讲得非常细。比如：“我遇到一件让我很害怕的事情，和性有关。”",
            "如果有哪一部分你暂时不想讲，可以直接说：“我现在还不想说得太细，可以吗？”很多热线和机构会尊重你的节奏。",
            "你可以提问，而不是只回答对方的问题，比如：“如果我是未成年人，你们会怎么处理？”"
          ]}
        />
      </Section>

      <Section id="types" title="可能存在的求助渠道类型">
        <div className="space-y-4">
          <InfoCard 
            title="紧急安全相关" 
            icon={ShieldAlert}
            lines={[
              "如当地报警电话 / 紧急求助电话：在你或其他人处于立即危险时使用。",
              "通常可以在你所在城市或国家的官方渠道、公安机关网站、当地政府网站上查到。",
              "如果你担心直接报警风险太大，可以先和信任的大人或相关机构讨论。"
            ]} 
          />
          <InfoCard 
            title="情绪支持与心理热线" 
            icon={HeartHandshake}
            lines={[
              "有些热线主要负责倾听和陪伴，帮助你在做决定前先整理情绪。",
              "你可以询问对方是否有保护隐私的制度、是否会记录你的信息。",
              "如果你不习惯打电话，有些机构也提供文字聊天或线上咨询。"
            ]} 
          />
          <InfoCard 
            title="法律咨询与权益支持" 
            icon={Scale}
            lines={[
              "有些机构提供免费的法律咨询，可以帮你了解：法律上大致怎么界定你遇到的情况、可能有哪些途径。",
              "他们通常不会替你做决定，但可以告诉你不同选择的大概后果。",
              "你可以提前问清楚：咨询是否收费、是否需要实名、是否会代你联系其他部门。"
            ]} 
          />
        </div>
      </Section>

      <Section id="note" title="给自己准备一个“小纸条”">
        <ActionList items={[
          {
            id: "write-note",
            title: "先写在纸上，再打电话",
            detailLines: [
              "在打电话或发信息前，你可以用几分钟在纸上写下最想说的 1–3 个点。比如：事情大致发生在什么时候、你现在最害怕的是什么。",
              "这张纸条不是给别人看的，是帮你在紧张的时候不至于完全说不出话。",
              "你写的内容可以非常简单：比如“我不确定这算不算严重，但我一直睡不着。”这已经足够让对方知道你需要帮助。"
            ],
            expandable: true
          }
        ]} />
      </Section>

      <Section id="cant-call" title="如果你打不出去这个电话">
        <InfoCard 
          icon={Phone}
          lines={[
            "很多人会在拨号键盘前停很久，最终又放下手机。这并不说明你软弱，只说明这件事真的很难。",
            "如果你实在打不出去，可以考虑：先把想说的话写下来，发给一个你信任的人，看看能不能由 TA 陪你一起打，或者由 TA 先帮你问问。",
            "如果你暂时谁都不想联系，也没关系。你可以先保存好本页，等你稍微有点力气时再回来。"
          ]} 
        />
      </Section>
    </HelpPageLayout>
  );
};