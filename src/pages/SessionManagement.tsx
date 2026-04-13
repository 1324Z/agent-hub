import React from 'react';
import { 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  TrendingUp, 
  Minus, 
  Filter, 
  RotateCcw,
  Bot,
  Mic,
  Shield,
  CheckCircle2,
  Info,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

const SessionManagement = () => {
  const metrics = [
    { title: '当前活跃会话', value: '1,284', change: '+12% vs 昨天', icon: MessageSquare, color: 'text-blue-600', trend: 'up' },
    { title: '合规率', value: '99.8%', change: '保持稳定', icon: ShieldCheck, color: 'text-cyan-500', trend: 'stable' },
    { title: '平均响应时延', value: '342ms', change: '-45ms 优化', icon: Zap, color: 'text-slate-400', trend: 'down' },
    { title: '敏感拦截次数', value: '12', change: '需要关注审计', icon: AlertTriangle, color: 'text-red-500', trend: 'alert' },
  ];

  const sessions = [
    { id: '#SS-4921', title: '如何通过 API 接入 GPT-4o 接口？', time: '1分钟前', agent: '智能客服 A-03', active: true },
    { id: '#SS-4890', title: '账户退款流程咨询', time: '12分钟前', agent: '售后支持 B-01', active: false },
    { id: '#SS-4876', title: '为什么我的服务被拒绝了？垃圾系统！', time: '34分钟前', agent: '风控拦截中', active: false, warning: true },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white p-6 rounded-2xl shadow-sm border ${m.trend === 'alert' ? 'border-red-100' : 'border-slate-100'} hover:border-blue-500/20 transition-all`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">{m.title}</span>
              <m.icon className={`w-5 h-5 ${m.color}`} />
            </div>
            <p className={`text-3xl font-extrabold ${m.trend === 'alert' ? 'text-red-500' : 'text-slate-900'}`}>{m.value}</p>
            <div className={`mt-2 flex items-center gap-1 text-[10px] font-bold ${
              m.trend === 'up' ? 'text-green-600' : 
              m.trend === 'down' ? 'text-blue-600' : 
              m.trend === 'alert' ? 'text-red-500' : 'text-slate-400'
            }`}>
              {m.trend === 'up' && <TrendingUp className="w-3 h-3" />}
              {m.trend === 'down' && <TrendingUp className="w-3 h-3 rotate-180" />}
              {m.trend === 'stable' && <Minus className="w-3 h-3" />}
              {m.trend === 'alert' && <AlertCircle className="w-3 h-3" />}
              {m.change}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8 h-[calc(100vh-320px)]">
        {/* Left: Session List */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900">会话列表</h2>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 space-y-3 no-scrollbar">
            {sessions.map((s, i) => (
              <div 
                key={i}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                  s.active ? 'bg-white border-blue-500/20 shadow-sm' : 
                  s.warning ? 'bg-red-50 border-red-100 hover:bg-red-100' : 
                  'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                {s.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {s.warning ? (
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${s.active ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></span>
                    )}
                    <span className={`text-xs font-bold ${s.warning ? 'text-red-500' : 'text-slate-900'}`}>{s.id}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{s.time}</span>
                </div>
                <p className={`text-sm font-semibold mb-1 truncate ${s.warning ? 'text-slate-900' : 'text-slate-600'}`}>{s.title}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    s.active ? 'bg-blue-50 text-blue-600' : 
                    s.warning ? 'bg-red-100 text-red-500' : 
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {s.agent}
                  </span>
                  <div className="flex -space-x-2">
                    <img className="w-5 h-5 rounded-full border border-white" src="https://picsum.photos/seed/u1/20/20" alt="u1" />
                    <img className="w-5 h-5 rounded-full border border-white" src="https://picsum.photos/seed/u2/20/20" alt="u2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Session Flow */}
        <div className="col-span-12 lg:col-span-5 flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm">
          <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Shield className="text-white w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none text-slate-900">智能客服 A-03</h3>
                <p className="text-[10px] text-slate-400">会话 ID: #SS-4921</p>
              </div>
            </div>
            <button className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
              接管会话
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
            <div className="flex flex-col items-end">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-sm">
                请问一下，如果我需要通过 API 接口接入 GPT-4o，有没有具体的 SDK 或示例代码？
              </div>
              <span className="text-[10px] text-slate-400 mt-1">10:42:01 AM</span>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="bg-slate-100 text-slate-900 px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-sm border border-slate-200/50">
                您好！接入 GPT-4o 接口非常简单。我们提供了 Python 和 Node.js 的官方 SDK。
                <br/><br/>
                Python 示例：<br/>
                <code className="text-[11px] bg-white p-2 rounded block mt-2 text-blue-600 font-mono border border-slate-200">
                  import openai<br/>
                  client = openai.OpenAI()<br/>
                  response = client.chat.completions.create(...)
                </code>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-slate-400">10:42:04 AM</span>
                <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1 rounded border border-green-100">合规</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100/50">
                [策略引擎] 检测到回复内容包含代码片段，已自动标记为“技术支持”类别
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-sm">
                好的，谢谢，我看文档里提到要配置代理，请问在国内环境怎么操作？
              </div>
              <span className="text-[10px] text-slate-400 mt-1">10:43:15 AM</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-slate-400 text-xs italic">
                正在监控实时对话中...
              </div>
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Policy & Audit */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="text-xs font-extrabold text-slate-900 mb-4 tracking-wider uppercase flex items-center gap-2">
              <Shield className="text-blue-600 w-4 h-4" />
              实时策略开关
            </h4>
            <div className="space-y-4">
              {[
                { label: '敏感词实时拦截', active: true },
                { label: '情感危机预警', active: true },
                { label: '多轮对话一致性', active: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${s.active ? 'text-slate-600' : 'text-slate-400'}`}>{s.label}</span>
                  <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${s.active ? 'bg-blue-600' : 'bg-slate-200'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${s.active ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <h4 className="text-xs font-extrabold text-slate-900 mb-4 tracking-wider uppercase flex items-center gap-2">
              <CheckCircle2 className="text-cyan-500 w-4 h-4" />
              实时审计日志
            </h4>
            <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar">
              {[
                { type: 'Content Check', time: '10:43:16', msg: '用户请求通过安全检测，允许透传至大模型。', color: 'border-blue-600' },
                { type: 'Latency Info', time: '10:42:04', msg: '模型响应耗时 240ms，TTFT 为 12ms。', color: 'border-cyan-500' },
                { type: 'Security Alert', time: '10:30:12', msg: '会话 #SS-4876 触发情绪红线，建议人工干预。', color: 'border-red-500', bg: 'bg-red-50/50' },
                { type: 'Policy Update', time: '10:15:00', msg: '系统全局敏感词库已更新同步成功。', color: 'border-blue-600' },
              ].map((l, i) => (
                <div key={i} className={`p-2.5 rounded-xl border-l-2 ${l.bg || 'bg-slate-50'} ${l.color}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-bold uppercase ${l.color.replace('border-', 'text-')}`}>{l.type}</span>
                    <span className="text-[10px] text-slate-400">{l.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{l.msg}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 bg-slate-50 text-slate-500 text-[11px] font-bold rounded-xl border border-slate-200 hover:bg-slate-100 transition-all">
              查看全部审计明细
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionManagement;
