import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Users, Briefcase, Zap, Brain, Shield } from 'lucide-react';

const CoverSlide: React.FC = () => {
  return (
    <SlideWrapper title="战略分析方案" subtitle="针对中小开发商的游戏战略咨询业务" pageNumber={1} totalPages={5}>
      <div className="h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Vision */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              打造 <span className="text-purple-400">资源背书</span> + <span className="text-blue-400">实战落地</span> 的<br/>
              战略咨询闭环
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              利用成熟团队与高端行业人脉，填补中小游戏团队“懂开发不懂战略、有产品无资源”的市场空白。
            </p>
            <div className="flex gap-4 mt-8">
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-blue-300">
                战略规划
              </div>
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-purple-300">
                资源整合
              </div>
              <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-pink-300">
                落地执行
              </div>
            </div>
          </div>

          {/* Right Column: Resources Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl opacity-20 -mr-10 -mt-10 group-hover:opacity-30 transition-opacity"></div>
            
            <h3 className="text-xl font-bold text-gray-100 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-yellow-400" />
              核心资源盘点
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white">中型游戏公司制作人</div>
                  <div className="text-xs text-gray-400">项目管控 · 落地可行性把控</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white">腾讯游戏学堂二把手</div>
                  <div className="text-xs text-gray-400">行业背书 · 顶层人脉 · 渠道资源</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white">14人独立游戏团队</div>
                  <div className="text-xs text-gray-400">分工完整 · 磨合良好 · 技术原型支持</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white">资深战略师兼品牌设计</div>
                  <div className="text-xs text-gray-400">商业模式 · 品牌包装 · 方案输出</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
};

export default CoverSlide;