import React from 'react';
import SlideWrapper from '../SlideWrapper';
import { UserPlus, Package, CheckCircle2 } from 'lucide-react';

const Phase1Slide: React.FC = () => {
  return (
    <SlideWrapper title="一、前期过渡：快速破圈" subtitle="0-3 个月 | 目标：3-5家种子客户" pageNumber={3} totalPages={5}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full content-start mt-4">
        
        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl border-t-4 border-blue-500 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500/20 p-2 rounded-full text-blue-400">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">精准触达</h3>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>依托腾讯资源：</strong>进入中小开发者社群，以“分享+解惑”而非推销姿态切入。</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>熟人推荐：</strong>制作人刷脸，对接过往合作过的中小团队与供应商。</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span><strong>赛道锁定：</strong>聚焦小游戏/独立游戏初创团队，决策快，痛点痛。</span>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl border-t-4 border-purple-500 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-500/20 p-2 rounded-full text-purple-400">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">轻量试点套餐</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-3 rounded text-sm text-gray-300 border border-gray-700">
              <span className="text-purple-400 font-bold block mb-1">服务内容 (简化版)</span>
              1. 赛道选型 (数据驱动)<br/>
              2. 产品定位 (差异化)<br/>
              3. 资源对接 (发行/补贴)
            </div>
            <div className="text-sm text-gray-300">
              <span className="font-bold text-white">定价策略：</span> 
              基础费覆盖成本 + 成功激励（融资/发行分成）。
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl border-t-4 border-green-500 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500/20 p-2 rounded-full text-green-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">快速交付</h3>
          </div>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span><strong>14人团队拆分：</strong>部分成员参与小范围测试与验证，不仅仅是纸上谈兵。</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span><strong>交付物实用化：</strong>1页纸赛道报告 + 3-5个直接对接人清单。拒绝长篇大论。</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span><strong>背书逻辑：</strong>用我们自己独立游戏的实操经验，证明“这事儿能成”。</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="mt-8 bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg flex items-center justify-between">
        <span className="font-mono text-blue-300 font-bold">MILESTONE</span>
        <span className="text-white">签下3家客户，完成首个成功案例闭环（如帮助某产品明确方向并获得测试数据提升）。</span>
      </div>
    </SlideWrapper>
  );
};

export default Phase1Slide;