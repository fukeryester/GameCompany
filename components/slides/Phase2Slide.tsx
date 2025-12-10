import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { Wrench, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';

const Phase2Slide: React.FC = () => {
  return (
    <SlideWrapper title="二、中期立身：标准化与口碑" subtitle="3-12 个月 | 目标：长期客户 + 行业口碑" pageNumber={4} totalPages={5}>
      <div className="flex flex-col h-full gap-6">
        
        {/* Top: Strategy + Execution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
            <h3 className="text-lg font-bold text-indigo-400 mb-3 flex items-center gap-2">
               <BookOpen className="w-5 h-5" /> 战略深化
            </h3>
            <p className="text-gray-400 text-sm mb-2">资深战略设计牵头</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>商业化路径规划（融资节奏/变现设计）</li>
              <li>依托腾讯学堂数据做竞品拆解</li>
              <li>合规指导与政策补贴申请（降本）</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl border border-gray-700">
            <h3 className="text-lg font-bold text-pink-400 mb-3 flex items-center gap-2">
               <Wrench className="w-5 h-5" /> 落地实操
            </h3>
            <p className="text-gray-400 text-sm mb-2">独立游戏团队深度介入</p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>玩法原型快速打磨 (Prototyping)</li>
              <li>技术避坑与架构指导</li>
              <li>小范围运营测试支持 (Soft Launch)</li>
            </ul>
          </div>
        </div>

        {/* Middle: Standardization Process Flow */}
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 relative overflow-hidden">
          <h3 className="text-white font-bold mb-6">建立标准化流程 (SOP)</h3>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
            <div className="flex-1 bg-gray-800 p-4 rounded text-center">
              <div className="text-blue-400 font-bold mb-1">Step 1: 诊断</div>
              <div className="text-xs text-gray-400">1周内完成现状扫描</div>
            </div>
            <ArrowRight className="text-gray-600 hidden md:block" />
            <div className="flex-1 bg-gray-800 p-4 rounded text-center border border-indigo-500/30">
              <div className="text-indigo-400 font-bold mb-1">Step 2: 方案+落地</div>
              <div className="text-xs text-gray-400">4-6周输出方案与执行</div>
            </div>
            <ArrowRight className="text-gray-600 hidden md:block" />
             <div className="flex-1 bg-gray-800 p-4 rounded text-center">
              <div className="text-pink-400 font-bold mb-1">Step 3: 复盘</div>
              <div className="text-xs text-gray-400">2周跟进效果与调整</div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700 flex gap-4 text-sm text-gray-400">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs text-white">沉淀工具包</span>
            <span>赛道分析模板</span>
            <span>产品定位画布</span>
            <span>融资对接手册</span>
          </div>
        </div>

        {/* Bottom: Viral Loop */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl flex items-center gap-6">
          <div className="bg-yellow-500/20 p-3 rounded-full text-yellow-500 shrink-0">
            <MessageSquare className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">口碑裂变机制</h3>
            <p className="text-sm text-gray-300 mt-1">
              邀请成功客户在社群/沙龙做案例复盘，将客户转化为“宣传员”。收集“留存提升20%”、“成功上线”等硬核数据作为案例库。
            </p>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
};

export default Phase2Slide;