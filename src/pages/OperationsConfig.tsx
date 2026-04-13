import React from 'react';
import { 
  Rocket, 
  Terminal, 
  Beaker, 
  Send, 
  History, 
  CheckCircle2, 
  ArrowRight,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

const OperationsConfig = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-[2.5rem] h-[300px] group bg-blue-600">
          <img 
            alt="abstract fluid background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" 
            src="https://picsum.photos/seed/abstract/1200/400" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-transparent p-12 flex flex-col justify-center">
            <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold w-fit mb-4">
              NEW FEATURE
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              智能体运营2.0<br/>全链路效率升级
            </h2>
            <p className="text-blue-50 max-w-md mb-8 text-lg font-medium opacity-90">
              通过AI驱动的动态配置，实现全渠道智能导流与个性化触达，提升转化效率30%。
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-xl shadow-blue-900/20 hover:bg-blue-50 transition-all active:scale-95">
                立即配置
              </button>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all">
                查看报告
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-white rounded-[2.5rem] p-8 flex flex-col justify-between border border-blue-100 shadow-sm">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <Rocket className="w-6 h-6 fill-current" />
              </div>
              <span className="text-[10px] font-black text-blue-600 tracking-widest bg-blue-50 px-2 py-1 rounded">HOT RECOMMEND</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">本周热门推荐位</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              “新手入门引导”点击率上升12%，建议在首页 Banner 2 增加定向推送权重。
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between p-4 bg-blue-50/30 rounded-2xl">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/p1/32/32" alt="p1" />
              <img className="w-8 h-8 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/p2/32/32" alt="p2" />
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600 ring-2 ring-white">+5</div>
            </div>
            <button className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              快速开启 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Configuration Modules */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Module 1 */}
        <div className="group bg-white hover:bg-blue-50/30 transition-all duration-300 rounded-[2.5rem] p-8 relative overflow-hidden border border-slate-100 shadow-sm">
          <div className="absolute -right-4 -bottom-4 text-blue-600/5 group-hover:scale-110 group-hover:text-blue-600/10 transition-transform duration-500">
            <Terminal className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-blue-600 w-5 h-5" />
              场景模板/指令库
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="text-sm">通用知识问答模板</span>
                <span className="text-xs text-slate-400">v3.1</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white border border-blue-200 rounded-xl">
                <span className="text-sm font-semibold text-blue-600">营销话术生成指令</span>
                <span className="text-xs text-blue-600 font-bold">已启用</span>
              </div>
            </div>
            <button className="w-full py-2 bg-blue-50 text-blue-600 text-sm font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              管理库资源
            </button>
          </div>
        </div>

        {/* Module 2 */}
        <div className="group bg-white hover:bg-blue-50/30 transition-all duration-300 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Beaker className="text-blue-600 w-5 h-5" />
            AB实验平台监控
          </h4>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-4 bg-slate-50 rounded-2xl flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">正在运行</span>
              <span className="text-2xl font-black text-blue-600">14</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">待分析</span>
              <span className="text-2xl font-black text-slate-800">03</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <span className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <span className="block h-full bg-blue-600 w-3/4"></span>
            </span>
            <span className="font-bold text-blue-600">75%</span>
          </div>
          <button className="w-full py-2 bg-blue-50 text-blue-600 text-sm font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            实时看板
          </button>
        </div>

        {/* Module 3 */}
        <div className="group bg-white hover:bg-blue-50/30 transition-all duration-300 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Send className="text-blue-600 w-5 h-5" />
            消息推送与任务
          </h4>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-blue-600 w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm font-semibold">新手任务配置</p>
                <p className="text-xs text-slate-400">完成3次对话即可领取权益</p>
              </div>
            </li>
            <li className="flex items-start gap-3 opacity-60">
              <div className="w-5 h-5 rounded-full border-2 border-slate-200 mt-0.5"></div>
              <div>
                <p className="text-sm font-semibold">每日签到推送</p>
                <p className="text-xs text-slate-400">上午10:00 全量用户推送</p>
              </div>
            </li>
          </ul>
          <button className="w-full py-2 bg-blue-50 text-blue-600 text-sm font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
            去配置推送
          </button>
        </div>
      </section>

      {/* Recent Operations Table */}
      <section className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm">
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-50">
          <h5 className="text-base font-bold flex items-center gap-2">
            <History className="text-blue-600 w-5 h-5" />
            近期运营动态
          </h5>
          <button className="text-sm font-bold text-blue-600 hover:underline">查看全部日志</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-slate-400 font-black uppercase tracking-widest">
                <th className="px-8 py-4">操作时间</th>
                <th className="px-8 py-4">操作类型</th>
                <th className="px-8 py-4">配置详情</th>
                <th className="px-8 py-4">操作人</th>
                <th className="px-8 py-4">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { time: '2023-11-24 14:20', type: '首页配置', detail: '更新了 Banner 1 为“双十二大促”素材', user: '张浩然', initial: 'ZH', status: '已生效', statusColor: 'text-emerald-500', dotColor: 'bg-emerald-500' },
                { time: '2023-11-24 10:45', type: '指令管理', detail: '新增了“法律咨询专家”场景 Prompt', user: '李云', initial: 'LY', status: '已生效', statusColor: 'text-emerald-500', dotColor: 'bg-emerald-500' },
                { time: '2023-11-23 18:30', type: 'AB实验', detail: '创建了“首页卡片布局 A/B 测试”', user: 'Wang_A', initial: 'WA', status: '审批中', statusColor: 'text-amber-500', dotColor: 'bg-amber-500' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-blue-50/20 transition-colors">
                  <td className="px-8 py-4 text-sm text-slate-500">{row.time}</td>
                  <td className="px-8 py-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">{row.type}</span>
                  </td>
                  <td className="px-8 py-4 text-sm font-medium text-slate-700">{row.detail}</td>
                  <td className="px-8 py-4 flex items-center gap-2 text-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-[10px] flex items-center justify-center font-bold text-blue-600">{row.initial}</div>
                    {row.user}
                  </td>
                  <td className="px-8 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-bold ${row.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${row.dotColor}`}></span>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OperationsConfig;
