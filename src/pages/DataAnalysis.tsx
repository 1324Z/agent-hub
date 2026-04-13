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

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const growthData = [
  { day: 'Day 01', growth: 40, retention: 30 },
  { day: 'Day 04', growth: 55, retention: 45 },
  { day: 'Day 07', growth: 45, retention: 40 },
  { day: 'Day 10', growth: 65, retention: 55 },
  { day: 'Day 13', growth: 80, retention: 60 },
  { day: 'Day 16', growth: 70, retention: 65 },
  { day: 'Day 19', growth: 90, retention: 75 },
  { day: 'Day 22', growth: 60, retention: 50 },
  { day: 'Day 25', growth: 75, retention: 65 },
  { day: 'Day 28', growth: 85, retention: 70 },
  { day: 'Today', growth: 100, retention: 85 },
];

const agentTrendData = [
  { date: '04-07', '文案大师_calls': 420, '文案大师_tokens': 10.5, '代码助手_calls': 300, '代码助手_tokens': 25.2, '心理专家_calls': 180, '心理专家_tokens': 5.2 },
  { date: '04-08', '文案大师_calls': 450, '文案大师_tokens': 11.2, '代码助手_calls': 320, '代码助手_tokens': 28.4, '心理专家_calls': 190, '心理专家_tokens': 5.8 },
  { date: '04-09', '文案大师_calls': 410, '文案大师_tokens': 10.1, '代码助手_calls': 350, '代码助手_tokens': 32.1, '心理专家_calls': 210, '心理专家_tokens': 6.4 },
  { date: '04-10', '文案大师_calls': 480, '文案大师_tokens': 12.4, '代码助手_calls': 380, '代码助手_tokens': 35.6, '心理专家_calls': 200, '心理专家_tokens': 6.1 },
  { date: '04-11', '文案大师_calls': 520, '文案大师_tokens': 13.5, '代码助手_calls': 340, '代码助手_tokens': 30.2, '心理专家_calls': 230, '心理专家_tokens': 7.2 },
  { date: '04-12', '文案大师_calls': 490, '文案大师_tokens': 12.8, '代码助手_calls': 310, '代码助手_tokens': 27.5, '心理专家_calls': 250, '心理专家_tokens': 7.8 },
  { date: '04-13', '文案大师_calls': 550, '文案大师_tokens': 14.2, '代码助手_calls': 360, '代码助手_tokens': 32.8, '心理专家_calls': 280, '心理专家_tokens': 8.5 },
];

const DataAnalysis = () => {
  const [activeMetric, setActiveMetric] = React.useState<'growth' | 'retention'>('growth');
  const [activeAgentMetric, setActiveAgentMetric] = React.useState<'calls' | 'tokens'>('calls');
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
      <div className="grid grid-cols-1 gap-8">
        <div className="glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-xl font-black text-slate-900">用户增长与留存趋势</h4>
              <p className="text-sm text-slate-500">近 30 天核心用户数据演进</p>
            </div>
            <div className="flex bg-blue-50/50 p-1.5 rounded-xl">
              <button 
                onClick={() => setActiveMetric('growth')}
                className={`px-5 py-1.5 text-xs font-bold rounded-lg transition-all ${activeMetric === 'growth' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                增长率
              </button>
              <button 
                onClick={() => setActiveMetric('retention')}
                className={`px-5 py-1.5 text-xs font-bold rounded-lg transition-all ${activeMetric === 'retention' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                留存率
              </button>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                  itemStyle={{ color: '#60a5fa' }}
                  cursor={{ stroke: '#2563eb', strokeWidth: 2 }}
                />
                <Area 
                  type="monotone" 
                  dataKey={activeMetric} 
                  stroke="#2563eb" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorMetric)" 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h4 className="text-xl font-black text-slate-900">热门智能体趋势分析</h4>
              <p className="text-sm text-slate-500">近 7 日核心智能体数据波动 ({activeAgentMetric === 'calls' ? '单位: k' : '单位: M'})</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex bg-blue-50/50 p-1.5 rounded-xl">
                <button 
                  onClick={() => setActiveAgentMetric('calls')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeAgentMetric === 'calls' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  调用次数
                </button>
                <button 
                  onClick={() => setActiveAgentMetric('tokens')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeAgentMetric === 'tokens' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Token 消耗
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">文案大师</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">代码助手</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">心理专家</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={agentTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: 'none', 
                    borderRadius: '16px',
                    color: '#fff',
                    padding: '12px',
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                  }}
                  cursor={{ stroke: '#f1f5f9', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey={`文案大师_${activeAgentMetric}`} 
                  stroke="#2563eb" 
                  strokeWidth={4}
                  dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  name="文案大师"
                  animationDuration={1000}
                />
                <Line 
                  type="monotone" 
                  dataKey={`代码助手_${activeAgentMetric}`} 
                  stroke="#818cf8" 
                  strokeWidth={4}
                  dot={{ r: 4, fill: '#818cf8', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  name="代码助手"
                  animationDuration={1000}
                />
                <Line 
                  type="monotone" 
                  dataKey={`心理专家_${activeAgentMetric}`} 
                  stroke="#34d399" 
                  strokeWidth={4}
                  dot={{ r: 4, fill: '#34d399', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  name="心理专家"
                  animationDuration={1000}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* New Agent Leaderboard Section */}
      <div className="glass-card p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(74,144,226,0.04)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="text-xl font-black text-slate-900">智能体综合排行榜</h4>
            <p className="text-sm text-slate-500">基于调用次数与 Token 消耗量的实时排名</p>
          </div>
          <div className="flex bg-blue-50/50 p-1.5 rounded-xl">
            <button 
              onClick={() => setActiveAgentMetric('calls')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeAgentMetric === 'calls' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              按调用量
            </button>
            <button 
              onClick={() => setActiveAgentMetric('tokens')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeAgentMetric === 'tokens' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              按 Token
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {[
            { name: '文案大师', calls: 550, tokens: 14.2, color: 'bg-blue-600' },
            { name: '代码助手', calls: 360, tokens: 32.8, color: 'bg-indigo-400' },
            { name: '心理专家', calls: 280, tokens: 8.5, color: 'bg-emerald-400' },
            { name: '翻译官', calls: 156, tokens: 5.4, color: 'bg-amber-400' },
            { name: '法律顾问', calls: 124, tokens: 18.9, color: 'bg-rose-400' },
          ].sort((a, b) => activeAgentMetric === 'calls' ? b.calls - a.calls : b.tokens - a.tokens)
           .map((agent, i) => (
            <div key={i} className="group p-4 hover:bg-blue-50/30 rounded-2xl transition-all border border-transparent hover:border-blue-100/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-xl font-black text-sm shadow-sm ${
                    i === 0 ? 'bg-blue-600 text-white' : 
                    i === 1 ? 'bg-blue-100 text-blue-600' : 
                    'bg-slate-100 text-slate-400'
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">{agent.name}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {agent.calls}k Calls · {agent.tokens}M Tokens
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-slate-900">
                    {activeAgentMetric === 'calls' ? `${agent.calls}k` : `${agent.tokens}M`}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    Current {activeAgentMetric}
                  </div>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(activeAgentMetric === 'calls' ? agent.calls / 600 : agent.tokens / 50) * 100}%` }}
                  className={`h-full rounded-full ${agent.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Bolt className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};

export default DataAnalysis;
