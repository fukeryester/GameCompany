import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Network, Globe, TrendingUp, Award } from 'lucide-react';

const Phase3Slide: React.FC = () => {
  return (
    <SlideWrapper title="三、后期：生态绑定与扩张" subtitle="12个月+ | 目标：行业壁垒与规模化" pageNumber={5} totalPages={5}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        
        {/* Left: Expansion Strategy */}
        <div className="space-y-6">
          <div className="group">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
              <Network className="w-6 h-6" /> 资源整合壁垒
            </h3>
            <p className="text-gray-300 leading-relaxed">
              与腾讯游戏学堂、孵化基地建立<span className="text-yellow-400">官方战略合作伙伴</span>关系。
              不仅是咨询，而是成为平台资源的“分发出口”。联合投资机构提供“规划-融资-补贴”全链条支持。
            </p>
          </div>

          <div className="group">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors flex items-center gap-2">
               <TrendingUp className="w-6 h-6" /> 模式升级：孵化式合作
            </h3>
            <p className="text-gray-300 leading-relaxed">
              从单纯收服务费，转向<span className="text-pink-400">“少量股权 + 服务换分成”</span>。
              筛选高潜力初创团队，利用我们闲置的研发产能（14人团队）进行技术入股，共享爆款收益。
            </p>
          </div>

          <div className="group">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors flex items-center gap-2">
               <Globe className="w-6 h-6" /> 规模化与地域扩张
            </h3>
            <p className="text-gray-300 leading-relaxed">
              复制模式至武汉、成都等游戏产业重镇。
              依托核心成员（腾讯背景+制作人）打造行业IP，输出方法论，建立私域流量池。
            </p>
          </div>
        </div>

        {/* Right: Visual Ecosystem */}
        <div className="relative h-[400px] bg-gray-900 rounded-2xl border border-gray-700 p-6 flex flex-col items-center justify-center overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="z-10 text-center space-y-8 w-full">
            
            {/* Top Tier */}
            <div className="flex justify-center gap-4">
              <div className="px-4 py-2 bg-gray-800 border border-blue-500 rounded text-xs text-blue-300">腾讯游戏学堂</div>
              <div className="px-4 py-2 bg-gray-800 border border-blue-500 rounded text-xs text-blue-300">发行平台</div>
              <div className="px-4 py-2 bg-gray-800 border border-blue-500 rounded text-xs text-blue-300">投资机构</div>
            </div>

            {/* Connecting Arrows Down */}
            <div className="flex justify-center text-gray-600">
               ▼ 资源注入
            </div>

            {/* Middle Tier: The Company */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 px-8 py-6 rounded-xl border border-indigo-500 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
              <div className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                <Award className="text-yellow-400" />
                中小开发者生态服务商
              </div>
              <div className="text-xs text-indigo-200 mt-2">战略咨询 + 研发外包 + 资源分发</div>
            </div>

             {/* Connecting Arrows Down */}
            <div className="flex justify-center text-gray-600">
               ▼ 赋能
            </div>

            {/* Bottom Tier: Customers */}
            <div className="flex justify-center gap-2 flex-wrap">
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-80"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-80"></span>
              <span className="text-xs text-gray-400 ml-2">海量中小开发团队</span>
            </div>

          </div>
        </div>

      </div>
    </SlideWrapper>
  );
};

export default Phase3Slide;