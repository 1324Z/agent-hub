import React from 'react';
import { 
  Users, 
  PhoneCall, 
  TrendingUp, 
  Zap, 
  Star, 
  MoreHorizontal,
  Bolt,
  CheckCircle2,
  Activity,
  BrainCircuit
} from 'lucide-react';
import { motion } from 'motion/react';

const DataAnalysis = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">数据分析全景</h2>
        <p className="text-slate-500">实时监控智能体核心运营指标与性能数据</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-3xl shadow-[0_8px_30px_rgb(74,144,226,0.04)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 bg-blue-100/50 text-blue-600 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-500 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <TrendingUp className="w-3 h-3" />+12%
            </span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">日活跃用户 (DAU)</p>
            <h3 className="text-3xl font-black mt-1 text-slate-900">12,842</h3>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-3xl shadow-[0_8px_30px_rgb(74,144,226,0.04)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 bg-blue-100/50 text-blue-600 rounded-xl">
              <PhoneCall className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-500 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <TrendingUp className="w-3 h-3" />+8.4%
            </span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">总调用量</p>
            <h3 className="text-3xl font-black mt-1 text-slate-900">1,204,500</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-xl font-black text-slate-900">用户增长与留存趋势</h4>
              <p className="text-sm text-slate-500">近 30 天核心用户数据演进</p>
            </div>
            <div className="flex bg-blue-50/50 p-1.5 rounded-xl">
              <button className="px-5 py-1.5 text-xs font-bold bg-white text-blue-600 shadow-sm rounded-lg">增长率</button>
              <button className="px-5 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">留存率</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-3 px-4">
            {[40, 55, 45, 65, 80, 70, 90, 60, 75, 85, 100].map((h, i) => (
              <div 
                key={i} 
                className={`w-full rounded-t-xl relative group transition-all cursor-pointer ${
                  i === 10 ? 'bg-blue-600' : 'bg-blue-100/60 hover:bg-blue-200'
                }`} 
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl whitespace-nowrap">
                  {h}k
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 text-[10px] text-blue-300 font-black uppercase tracking-[0.2em] px-2">
            <span>Day 01</span>
            <span>Day 10</span>
            <span>Day 20</span>
            <span className="text-blue-600">Today</span>
          </div>
        </div>

        <div className="glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)] flex flex-col">
          <h4 className="text-xl font-black text-slate-900 mb-1">推理性能监控</h4>
          <p className="text-sm text-slate-500 mb-8">集群负载与推理效能</p>
          <div className="relative flex-1 flex items-center justify-center">
            <svg className="w-48 h-48 -rotate-90">
              <circle className="text-blue-50" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-blue-600" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="138.23" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-slate-900">75%</span>
              <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase mt-2">Normal Load</span>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-500">并发请求数</span>
              <span className="font-black text-slate-900">2,481 req/s</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-500">Token吞吐量</span>
              <span className="font-black text-slate-900">45.2k tok/s</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-500">GPU利用率</span>
              <span className="font-black text-blue-600">82.4%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-black text-slate-900">热门智能体排行榜</h4>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-50 text-blue-300 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-8">
            {[
              { name: '文案创意大师', value: '482.1k', percent: '92%', color: 'bg-blue-600' },
              { name: 'Python代码助手', value: '321.4k', percent: '65%', color: 'bg-blue-300' },
              { name: '心理咨询专家', value: '198.5k', percent: '42%', color: 'bg-blue-200' },
            ].map((agent, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-sm items-center">
                  <div className="flex items-center gap-4">
                    <span className={`w-6 h-6 flex items-center justify-center text-white text-[10px] font-black rounded-full shadow-md ${i === 0 ? 'bg-blue-600 shadow-blue-600/20' : 'bg-blue-200'}`}>
                      {i + 1}
                    </span>
                    <span className="font-bold text-slate-800">{agent.name}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-400">{agent.value} 调用</span>
                </div>
                <div className="w-full h-2.5 bg-blue-50 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${agent.color}`} style={{ width: agent.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)]">
          <h4 className="text-xl font-black text-slate-900 mb-1">对话质量评分模块</h4>
          <p className="text-sm text-slate-500 mb-8">基于 RLHF 与语义一致性分析</p>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col items-center justify-center p-8 bg-blue-50 rounded-[2rem] border border-blue-100/50">
              <div className="text-5xl font-black text-blue-600 mb-3">4.82</div>
              <div className="flex gap-1 text-blue-600 mb-4">
                {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                <Star className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Global Satisfaction</p>
            </div>
            <div className="space-y-5 py-2">
              {[
                { label: '语义准确率', sub: '98.2% Accurate', color: 'bg-green-400' },
                { label: '上下文一致性', sub: '94.5% Consistent', color: 'bg-blue-600' },
                { label: '幻觉抑制率', sub: '99.1% Suppressed', color: 'bg-blue-300' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${stat.color} shadow-lg`}></div>
                  <div className="flex-1">
                    <p className="text-xs font-black text-slate-800">{stat.label}</p>
                    <p className="text-[10px] font-bold text-slate-400">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full mt-10 py-3.5 border-2 border-dashed border-blue-200 text-blue-600 rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-blue-50/50 hover:border-blue-300 transition-all">
            查看详细质量诊断报告
          </button>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Bolt className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};

export default DataAnalysis;
