import React from 'react';
import { 
  Code2, 
  ShoppingCart, 
  Users, 
  AlertTriangle, 
  Wrench, 
  Rocket, 
  History, 
  Shield, 
  Bell, 
  CheckCircle2, 
  Search, 
  HelpCircle,
  Construction,
  Database,
  Activity,
  LineChart,
  Cpu,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const OperationsSupport = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Metrics Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'API 平均响应', value: '142ms', change: '↓ 12%', icon: Zap, color: 'text-blue-600', bg: 'bg-blue-50', badge: 'LIVE' },
          { title: '营销转化率', value: '4.82%', change: '↑ 0.5%', icon: ShoppingCart, color: 'text-slate-500', bg: 'bg-slate-50', badge: 'CONVERSION' },
          { title: '当前活跃智能体', value: '1,284', change: '+24h', icon: Users, color: 'text-blue-400', bg: 'bg-blue-50', badge: 'ACTIVE' },
          { title: '风控拦截次数', value: '23', change: '↑ 5%', icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-50', badge: 'ALERT' },
        ].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <m.icon className={`${m.color} ${m.bg} p-2 rounded-xl w-10 h-10`} />
              <span className={`text-[10px] font-bold ${m.color} px-2 py-0.5 ${m.bg} rounded-full`}>{m.badge}</span>
            </div>
            <h4 className="text-sm font-medium text-slate-500">{m.title}</h4>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold text-slate-800">{m.value}</p>
              <span className={`text-xs font-medium ${m.change.includes('↓') || m.change.includes('↑') ? (m.change.includes('↓') && m.title.includes('响应') ? 'text-green-500' : (m.change.includes('↑') && m.title.includes('转化') ? 'text-green-500' : 'text-red-500')) : 'text-slate-400'}`}>
                {m.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          {/* Dashboard Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-800">营销活动仪表盘</h3>
                <p className="text-sm text-slate-500 mt-1">Activity Tracking & Life-cycle</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white transition-all shadow-sm">全周期</button>
                <button className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all">本月</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-600/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Construction className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">开发中项目</h5>
                    <p className="text-xs text-slate-500">12个 活动正在构建</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-2/3"></div>
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-500/30 transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <Rocket className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-800">已上线运营</h5>
                    <p className="text-xs text-slate-500">28个 正在服务用户</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-full"></div>
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold text-slate-400 uppercase">
                  <span>Status</span>
                  <span className="text-green-600">Healthy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '发布通知', icon: Bell },
              { label: '策略审核', icon: Shield },
              { label: '数据导出', icon: Database },
              { label: '链路诊断', icon: Activity },
            ].map((btn, i) => (
              <button key={i} className="aspect-square bg-white border border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-600/10 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <btn.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Real-time Activity */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-sm text-slate-800 tracking-tight flex items-center gap-2">
                <History className="text-blue-600 w-4 h-4" />
                活动信息实时动态
              </h3>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">REALTIME</span>
            </div>
            <div className="space-y-6">
              {[
                { title: '夏日特惠活动 A/B 测试启动', time: '2分钟前 · 运营二组', color: 'bg-blue-600' },
                { title: '智能体 "CustomerHelper" 负载触发预警', time: '15分钟前 · 系统', color: 'bg-slate-400' },
                { title: '新渠道 API 接入完成', time: '1小时前 · 技术支持', color: 'bg-green-500' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i < 2 && <div className="absolute left-2 top-6 bottom-[-24px] w-[1px] bg-slate-100"></div>}
                  <div className={`w-4 h-4 rounded-full ${item.color} border-2 border-white shadow-sm shrink-0 z-10`}></div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.title}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Control Alert */}
          <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-red-600 font-bold text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" />
                营销风控预警
              </h3>
              <div className="flex -space-x-2">
                <img alt="Auditor" className="w-6 h-6 rounded-full border-2 border-white" src="https://picsum.photos/seed/a1/24/24" />
                <img alt="Auditor" className="w-6 h-6 rounded-full border-2 border-white" src="https://picsum.photos/seed/a2/24/24" />
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-red-100">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-500 w-5 h-5 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-red-600">检测到异常套利行为</h5>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                    活动 ID: ACT-20230812，来自 127.0.x.x 网段出现高频刷单请求，已自动开启人机验证。
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-600 hover:text-white border border-red-200 rounded-xl transition-all">
              立即处理 (3 待办)
            </button>
          </div>
        </div>
      </div>

      {/* Full View Section */}
      <div className="bg-blue-100/50 rounded-3xl overflow-hidden p-10 flex flex-col md:flex-row items-center gap-10 border border-white shadow-sm">
        <div className="flex-1 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-600/10">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">System Intelligence</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">智能运营全景视图</h2>
          <p className="text-slate-600 text-sm max-w-lg leading-relaxed">
            Fluid Authority 的运营支撑模块通过深度神经网络实时分析 API 交互、营销流转及风控态势。为运营人员提供毫米级的决策支持与干预能力。
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
              查看完整报告
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm border border-blue-600/20 hover:bg-slate-50 transition-all">
              配置预警规则
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/5 aspect-video rounded-2xl bg-white relative shadow-xl overflow-hidden flex items-center justify-center">
          <img 
            alt="Data Analytics" 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
            src="https://picsum.photos/seed/analytics/600/400" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
              <LineChart className="text-blue-600 w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSupport;
