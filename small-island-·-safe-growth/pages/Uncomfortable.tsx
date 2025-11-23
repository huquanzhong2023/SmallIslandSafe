import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  HelpCircle, 
  AlertTriangle, 
  Clock, 
  Eye, 
  PenLine, 
  FileText, 
  User, 
  Phone,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Smile,
  Frown,
  Meh
} from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';

export const Uncomfortable: React.FC = () => {
  // State for Step 1
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // State for Step 2
  const [selectedAffirmations, setSelectedAffirmations] = useState<string[]>([]);
  const [selfNote, setSelfNote] = useState('');

  // State for Feedback
  const [feedback, setFeedback] = useState<string | null>(null);

  // Refs for scrolling
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const scrollToStep = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Content Data
  const stateOptions = [
    {
      id: 'confused',
      label: '我有点困惑，不确定算不算很严重',
      icon: HelpCircle,
      content: [
        '很多人刚开始都会想：“这是不是我想太多了？”',
        '无论它在别人眼里有多严重，你的“不舒服”是真实的。',
        '你不需要先证明它够严重，才有资格来这里。'
      ]
    },
    {
      id: 'scared',
      label: '我感到很害怕 / 很恶心',
      icon: AlertTriangle,
      content: [
        '当人遇到让自己害怕或者恶心的事情时，大脑会先忙着保护自己，这很正常。',
        '你现在能打开这个页面，本身已经是一种勇气。',
        '你可以只做一点点你觉得可以承受的事情。'
      ]
    },
    {
      id: 'past',
      label: '这件事已经过去一阵子了，但我还是会想起',
      icon: Clock,
      content: [
        '有些事情过去很久之后，才慢慢浮出来，这不代表你“想不开”。',
        '你当时已经在凭直觉保护自己了，现在回头看见它，也是你在照顾自己的一种方式。'
      ]
    },
    {
      id: 'skip',
      label: '我只是看看，不想选',
      icon: Eye,
      content: [
        '你可以不选任何选项，只是随便看看，这完全可以。',
        '你可以按照自己的节奏阅读下面的内容。'
      ]
    }
  ];

  const affirmationOptions = [
    '发生的事情不是我的错。',
    '我已经尽力在那个当下保护自己了。',
    '现在的我不需要再一个人扛全部。',
    '我可以慢慢来，按自己的节奏。',
    '就算害怕，我也值得被好好对待。'
  ];

  const handleAffirmationToggle = (text: string) => {
    setSelectedAffirmations(prev => 
      prev.includes(text) ? prev.filter(t => t !== text) : [...prev, text]
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">
      
      {/* Header Section */}
      <header className="space-y-6 text-center md:text-left relative">
        <div className="space-y-4 max-w-2xl">
           <h1 className="text-3xl md:text-4xl font-bold text-island-text leading-tight">
             我遇到了让我<br/><span className="text-island-primary">不舒服的事情</span>
           </h1>
           <p className="text-lg text-island-muted leading-relaxed">
             你可能还没想好这到底算不算“严重”，也可能事情已经过去很久了。<br className="hidden md:block"/>
             这里不会问你细节，也不会要求你马上做决定。我们只是想先陪你把脑子里的想法理一理。
           </p>
        </div>
        {/* Abstract Illustration Placeholder */}
        <div className="hidden md:block absolute top-0 right-0 w-48 h-48 opacity-50 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-island-secondary/20">
              <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.2C93.5,8.8,82.2,21.9,71.4,33.3C60.6,44.7,50.3,54.4,38.5,61.7C26.7,69,13.3,73.9,0.5,73C-12.3,72.1,-24.6,65.4,-35.3,57.5C-46,49.6,-55.1,40.5,-63.3,29.9C-71.5,19.3,-78.8,7.2,-79.8,-5.5C-80.8,-18.2,-75.5,-31.5,-66.4,-41.8C-57.3,-52.1,-44.4,-59.4,-31.6,-67.4C-18.8,-75.4,-6.1,-84.1,4.9,-92.6L16,-101.1" transform="translate(100 100)" />
            </svg>
        </div>
      </header>

      {/* Comfort Card */}
      <div className="bg-island-warm/30 rounded-3xl p-6 md:p-8 flex items-start gap-4 border border-island-secondary/20">
        <div className="bg-white p-3 rounded-full shadow-sm text-island-primary shrink-0">
          <Heart size={24} fill="currentColor" className="opacity-20" />
        </div>
        <div className="space-y-2 text-island-text">
          <p className="font-medium text-lg">你现在的感觉，本身就是重要的。</p>
          <ul className="space-y-1 text-island-muted text-sm md:text-base">
            <li>• 你不需要在这里写下任何经历，也不需要马上做出任何决定。</li>
            <li>• 如果你在阅读过程中觉得不舒服，随时可以停下来，去喝水、深呼吸、做别的事情。</li>
          </ul>
        </div>
      </div>

      {/* Stepper */}
      <div className="sticky top-20 z-40 bg-island-bg/95 backdrop-blur py-4 border-b border-island-warm">
        <div className="flex justify-between md:justify-start md:gap-12 text-sm md:text-base font-medium overflow-x-auto no-scrollbar">
          {[
             { id: 'step1', label: '1. 我现在的状态', ref: step1Ref },
             { id: 'step2', label: '2. 给自己的一句话', ref: step2Ref },
             { id: 'step3', label: '3. 可以做的小事', ref: step3Ref }
          ].map((step, idx) => (
             <button 
               key={step.id}
               onClick={() => scrollToStep(step.ref as any)}
               className="whitespace-nowrap px-2 py-1 text-island-muted hover:text-island-primary transition-colors focus:outline-none focus:text-island-primary"
             >
               {step.label}
             </button>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      <section ref={step1Ref} className="scroll-mt-32 space-y-6">
         <div className="flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-island-primary text-white flex items-center justify-center font-bold">1</span>
             <h2 className="text-xl md:text-2xl font-bold text-island-text">我现在大概是哪种感觉</h2>
         </div>
         <p className="pl-11 text-island-muted -mt-4 mb-4 text-sm">可以随便选一条，或者跳过</p>

         <div className="grid md:grid-cols-2 gap-4">
            {stateOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSelectedState(opt.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-start gap-3 hover:shadow-md ${
                  selectedState === opt.id 
                  ? 'bg-island-primary/5 border-island-primary ring-1 ring-island-primary' 
                  : 'bg-white border-island-warm text-island-muted hover:border-island-primary/30'
                }`}
              >
                <opt.icon className={selectedState === opt.id ? 'text-island-primary' : 'text-island-muted'} />
                <span className={`font-medium ${selectedState === opt.id ? 'text-island-text' : ''}`}>{opt.label}</span>
              </button>
            ))}
         </div>

         {selectedState && (
           <div className="bg-white border border-island-warm rounded-2xl p-6 md:p-8 animate-fade-in shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-island-secondary"></div>
             <div className="space-y-3">
               {stateOptions.find(s => s.id === selectedState)?.content.map((line, i) => (
                 <p key={i} className="text-island-text/80 leading-relaxed">{line}</p>
               ))}
             </div>
           </div>
         )}
      </section>

      {/* Step 2 */}
      <section ref={step2Ref} className="scroll-mt-32 space-y-6 pt-8 border-t border-dashed border-island-warm">
        <div className="flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-island-primary text-white flex items-center justify-center font-bold">2</span>
             <h2 className="text-xl md:text-2xl font-bold text-island-text">先对自己说一句话</h2>
         </div>
         <p className="pl-11 text-island-muted -mt-4 mb-4 text-sm">不是一定要信，只是先放在这里。可以多选。</p>

         <div className="flex flex-wrap gap-3">
            {affirmationOptions.map(text => (
              <button
                key={text}
                onClick={() => handleAffirmationToggle(text)}
                className={`px-5 py-3 rounded-full text-sm md:text-base border transition-all duration-200 ${
                  selectedAffirmations.includes(text)
                  ? 'bg-island-secondary text-white border-island-secondary shadow-sm transform scale-105'
                  : 'bg-white border-island-warm text-island-muted hover:border-island-secondary'
                }`}
              >
                {text}
              </button>
            ))}
         </div>

         {selectedAffirmations.length > 0 && (
           <div className="bg-island-bg rounded-2xl p-6 border border-island-warm/50 animate-fade-in text-center space-y-2">
              <div className="inline-flex p-2 bg-white rounded-full text-island-primary mb-2 shadow-sm">
                <CheckCircle2 size={20} />
              </div>
              <p className="text-island-text font-medium">你刚才选的这些话，可以看成是你此刻对自己的一个小小承诺。</p>
              <p className="text-sm text-island-muted">你不用完全相信它们，只要让它们在这里放一会儿就好。</p>
           </div>
         )}

         <div className="bg-white rounded-2xl border border-island-warm p-6 space-y-3">
            <label className="text-sm font-medium text-island-text flex items-center gap-2">
              <PenLine size={16} />
              如果你愿意，可以在这里写下一句话，只是写给自己看的
            </label>
            <textarea
              value={selfNote}
              onChange={(e) => setSelfNote(e.target.value)}
              placeholder="比如：我会尽量温柔地对待自己。"
              className="w-full h-24 p-4 rounded-xl bg-island-bg border-transparent focus:bg-white focus:border-island-primary focus:ring-0 transition-all resize-none text-island-text placeholder:text-island-muted/50"
            />
            <p className="text-xs text-island-muted/60 text-right">系统不会把它自动发送给任何人</p>
         </div>
      </section>

      {/* Step 3 */}
      <section ref={step3Ref} className="scroll-mt-32 space-y-6 pt-8 border-t border-dashed border-island-warm">
        <div className="flex items-center gap-3">
             <span className="w-8 h-8 rounded-full bg-island-primary text-white flex items-center justify-center font-bold">3</span>
             <h2 className="text-xl md:text-2xl font-bold text-island-text">可以考虑的小事</h2>
         </div>
         <p className="pl-11 text-island-muted -mt-4 mb-4 text-sm">选你觉得最容易的一种看就好</p>

        <div className="space-y-4">
          <Accordion 
            title="如果你现在不想告诉任何人" 
            icon={FileText} 
            hint="也可以先这样做"
          >
             <div className="space-y-4 text-island-text/90">
                <p>你可以先：</p>
                <ul className="space-y-2 list-disc list-inside text-island-muted">
                   <li>找一个安静一点的时间，简单写下几句你此刻的感受，不需要写细节，只要写“我大概发生了什么感觉”就够了。</li>
                   <li>给自己设一个很小的目标，例如“今天先让自己睡好一点”或“先把明天要做的一件普通小事完成”。</li>
                   <li>你可以保存好这个页面或求助电话，将来任何时候准备好再来都可以。</li>
                </ul>
                <p className="font-medium text-island-primary pt-2">不去找别人说，并不代表你同意了那件事。你有权利慢慢决定要不要说、跟谁说。</p>
                <div className="pt-4 flex justify-end">
                   <Link to="/help" className="text-sm inline-flex items-center text-island-muted hover:text-island-primary transition-colors">
                     看看可以求助的机构 <ChevronRight size={14} />
                   </Link>
                </div>
             </div>
          </Accordion>

          <Accordion 
            title="如果你在考虑跟一个信任的人说" 
            icon={User}
            hint="关于如何开口"
          >
             <div className="space-y-4 text-island-text/90">
                <p>你可以先想一想：在你的生活里，有没有这样的人：</p>
                <ul className="space-y-2 list-disc list-inside text-island-muted">
                   <li>TA 听你说话时不会老打断你。</li>
                   <li>TA 曾经认真帮过你做一些事情。</li>
                   <li>TA 不会轻易把你说的话讲给其他人听。</li>
                </ul>
                <div className="bg-island-warm/30 p-4 rounded-xl border-l-4 border-island-secondary my-4">
                  <p className="text-sm font-medium mb-1">可以只跟他说最简单的一句话，比如：</p>
                  <p className="text-island-text italic">“我最近遇到一件事，有点困扰，不知道要不要跟你说。”</p>
                  <p className="text-island-text italic mt-1">“你能先答应我，听我说的时候，不急着评价我吗？”</p>
                </div>
                <p>如果第一次说出口很难，你也可以先写在纸上或手机里，再拿给对方看。</p>
             </div>
          </Accordion>

          <Accordion 
            title="如果你在考虑报警或找专业帮助" 
            icon={Phone}
            hint="内容略严肃，可自行展开"
          >
             <div className="space-y-4 text-island-text/90">
                <p>有些人会在准备好之后，选择报警或找律师、心理老师帮忙。这是你的权利，但不是义务。</p>
                <p>如果你有这个想法，可以先做这些不那么吓人的准备：</p>
                <ul className="space-y-2 list-disc list-inside text-island-muted">
                   <li>把你记得的时间、地点、人物简单记在纸上，不需要写细节。</li>
                   <li>保留你手上已有的东西，比如聊天记录、通话记录等（不用专门去翻旧记录，先保留现在有的就好）。</li>
                   <li>先咨询一次：可以通过热线、妇联或法律援助机构，先问问流程，而不是马上做决定。</li>
                </ul>
                <div className="pt-4 flex justify-end">
                   <Link to="/help" className="inline-flex items-center px-4 py-2 bg-island-bg rounded-full text-island-primary text-sm font-medium hover:bg-island-primary hover:text-white transition-colors">
                     查看求助电话和法律信息 <ArrowRight size={14} className="ml-1" />
                   </Link>
                </div>
             </div>
          </Accordion>
        </div>
      </section>

      {/* Help Card */}
      <div className="bg-gradient-to-br from-island-primary/5 to-island-secondary/10 rounded-3xl p-8 border border-island-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="space-y-3">
            <h3 className="text-xl font-bold text-island-text">如果你想对一个真实的人说一句话</h3>
            <p className="text-island-muted text-sm md:text-base max-w-lg">
              而不是只看网页。你可以拨打 12338（妇女维权）或 12355（青少年服务）。<br/>
              你可以只说：“我遇到了一件让我不舒服的事，不知道算不算严重。”
            </p>
         </div>
         <Link to="/help" className="shrink-0 px-6 py-3 bg-white text-island-primary font-bold rounded-xl shadow-sm hover:shadow-md transition-all">
           查看详细热线
         </Link>
      </div>

      {/* Feedback Widget */}
      <div className="text-center space-y-4 pt-8 pb-4">
        <p className="text-sm text-island-muted">看完这一页，你现在的感觉是：</p>
        <div className="flex justify-center gap-4">
           {[
             { val: 'better', label: '稍微轻松', icon: Smile },
             { val: 'same', label: '差不多', icon: Meh },
             { val: 'worse', label: '更难受了', icon: Frown }
           ].map(opt => (
             <button
               key={opt.val}
               onClick={() => setFeedback(opt.val)}
               className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                 feedback === opt.val
                 ? 'bg-island-text text-white border-island-text'
                 : 'bg-white border-island-warm text-island-muted hover:border-island-muted'
               }`}
             >
               <opt.icon size={16} />
               {opt.label}
             </button>
           ))}
        </div>
        <p className="text-xs text-island-muted/40">这个反馈只用来帮助我们改进内容，不会和任何个人信息绑定。</p>
      </div>

    </div>
  );
};