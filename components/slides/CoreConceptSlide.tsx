import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Target, TrendingUp, RefreshCcw, Layers } from 'lucide-react';

const CoreConceptSlide: React.FC = () => {
  return (
    <SlideWrapper title="核心逻辑闭环" subtitle="资源背书 + 轻量试点 + 生态绑定" pageNumber={2} totalPages={5}>
      <div className="h-full flex flex-col items-center justify-center relative">
        
        {/* Central visual */}
        <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
          
          {/* Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path d="M200,100 C400,100 600,250 800,250" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeDasharray="10 5" />
            <path d="M800,250 C600,250 400,400 200,400" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeDasharray="10 5" />
            <path d="M200,400 C100,400 100,250 200,250" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeDasharray="10 5" />
             <path d="M200,250 C100,250 100,100 200,100" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeDasharray="10 5" />
          </svg>

          {/* Core Hub */}
          <div className="z-10 bg-gray-900 border-2 border-indigo-500 rounded-full w-48 h-48 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)] text-center p-4">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              价值流线
            </div>
            <div className="text-xs text-gray-400 mt-2">获客 → 服务 → 复购 → 扩张</div>
          </div>

          {/* Nodes */}
          
          {/* Node 1: Top Left */}
          <div className="absolute top-0 left-10 md:left-32 w-64 bg-gray-800/80 backdrop-blur border border-blue-500/50 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2 text-blue-400">
              <Target className="w-6 h-6" />
              <h3 className="font-bold text-lg">前期：人脉破圈</h3>
            </div>
            <p className="text-sm text-gray-300">
              靠Tencent系资源背书拿首单。不求规模，只重效果与信任建立。
            </p>
          </div>

          {/* Node 2: Right Middle */}
           <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-10 w-64 bg-gray-800/80 backdrop-blur border border-purple-500/50 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2 text-purple-400">
              <TrendingUp className="w-6 h-6" />
              <h3 className="font-bold text-lg">中期：效果立碑</h3>
            </div>
            <p className="text-sm text-gray-300">
              独立团队介入落地。用"战略+实操"的双驱动模式建立行业口碑。
            </p>
          </div>

          {/* Node 3: Bottom Left */}
           <div className="absolute bottom-0 left-10 md:left-32 w-64 bg-gray-800/80 backdrop-blur border border-pink-500/50 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2 text-pink-400">
              <Layers className="w-6 h-6" />
              <h3 className="font-bold text-lg">后期：生态做大</h3>
            </div>
            <p className="text-sm text-gray-300">
              资源整合者。从单一服务转向"孵化+资源+研发"的生态化平台。
            </p>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 w-full max-w-5xl bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-3">
              <RefreshCcw className="text-green-400 w-8 h-8" />
              <div>
                <div className="text-white font-bold">商业模式核心</div>
                <div className="text-sm text-gray-400">从咨询服务费转向 股权/分成/生态收益</div>
              </div>
           </div>
           <div className="text-right text-sm text-gray-500 max-w-md">
             利用14人团队的空余产能进行技术兜底，利用制作人与Tencent系资源进行顶层设计。
           </div>
        </div>

      </div>
    </SlideWrapper>
  );
};

export default CoreConceptSlide;