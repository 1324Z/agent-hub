import React, { useState } from 'react';
import { 
  Rocket, 
  Terminal, 
  Beaker, 
  Send, 
  History, 
  CheckCircle2, 
  ArrowRight,
  Plus,
  Layout,
  Save,
  Users,
  Star,
  Trash2,
  Palette,
  TrendingUp,
  Globe,
  Bolt,
  Handshake
} from 'lucide-react';
import { motion } from 'motion/react';
import { useConfig, PopularAgent } from '../contexts/ConfigContext';

const OperationsConfig = () => {
  const { config, updateConfig } = useConfig();
  const [formData, setFormData] = useState(config);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      updateConfig(formData);
      setIsSaving(false);
    }, 800);
  };

  const addAgent = () => {
    const newAgent: PopularAgent = {
      id: Date.now().toString(),
      title: '新智能体',
      iconName: 'Terminal',
      rating: '5.0',
      users: '0',
      imageUrl: '',
      imgSeed: 'new'
    };
    setFormData({
      ...formData,
      popularAgents: [...formData.popularAgents, newAgent]
    });
  };

  const removeAgent = (id: string) => {
    setFormData({
      ...formData,
      popularAgents: formData.popularAgents.filter(a => a.id !== id)
    });
  };

  const updateAgent = (id: string, updates: Partial<PopularAgent>) => {
    setFormData({
      ...formData,
      popularAgents: formData.popularAgents.map(a => a.id === id ? { ...a, ...updates } : a)
    });
  };

  return (
    <div className="p-8 space-y-8">
      {/* Landing Page Configuration */}
      <section className="bg-white rounded-[2.5rem] p-8 border border-blue-100 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">首页内容配置</h3>
              <p className="text-slate-500 text-sm">实时更新门户首页的核心展示内容</p>
            </div>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Save className="w-5 h-5" />
            )}
            <span>{isSaving ? '正在保存...' : '保存配置'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">主标题 (需包含“，”分隔)</label>
              <input 
                type="text"
                value={formData.heroTitle}
                onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="例如：智能赋能，连接未来"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">副标题</label>
              <input 
                type="text"
                value={formData.heroSubtitle}
                onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="例如：下一代 AI 运营"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">描述文本</label>
              <textarea 
                rows={4}
                value={formData.heroDescription}
                onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="输入首页详细描述..."
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">背景图片 URL</label>
              <input 
                type="text"
                value={formData.heroBgImage}
                onChange={(e) => setFormData({ ...formData, heroBgImage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">预览图 URL</label>
              <input 
                type="text"
                value={formData.heroPreviewImage}
                onChange={(e) => setFormData({ ...formData, heroPreviewImage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                placeholder="https://..."
              />
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Beaker className="w-4 h-4" />
                配置提示
              </h4>
              <p className="text-xs text-blue-600 leading-relaxed">
                修改后的内容将立即保存在本地缓存中。主标题请务必使用中文逗号“，”进行分隔，以确保渐变色效果正确应用。
              </p>
            </div>
          </div>
        </div>

        {/* Popular Agents Sub-configuration */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-current" />
              热门智能体管理
            </h4>
            <button 
              onClick={addAgent}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition-all"
            >
              <Plus className="w-4 h-4" />
              添加智能体
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formData.popularAgents.map((agent) => (
              <div key={agent.id} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 relative group">
                <button 
                  onClick={() => removeAgent(agent.id)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">名称</label>
                    <input 
                      type="text"
                      value={agent.title}
                      onChange={(e) => updateAgent(agent.id, { title: e.target.value })}
                      className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">评分</label>
                      <input 
                        type="text"
                        value={agent.rating}
                        onChange={(e) => updateAgent(agent.id, { rating: e.target.value })}
                        className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">用户数</label>
                      <input 
                        type="text"
                        value={agent.users}
                        onChange={(e) => updateAgent(agent.id, { users: e.target.value })}
                        className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">图标</label>
                      <select 
                        value={agent.iconName}
                        onChange={(e) => updateAgent(agent.id, { iconName: e.target.value })}
                        className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500"
                      >
                        <option value="Terminal">Terminal</option>
                        <option value="Palette">Palette</option>
                        <option value="TrendingUp">TrendingUp</option>
                        <option value="Globe">Globe</option>
                        <option value="Bolt">Bolt</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">图片 Seed</label>
                      <input 
                        type="text"
                        value={agent.imgSeed}
                        onChange={(e) => updateAgent(agent.id, { imgSeed: e.target.value })}
                        className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500"
                        placeholder="备用 (关键词)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">图片 URL (优先使用)</label>
                    <input 
                      type="text"
                      value={agent.imageUrl}
                      onChange={(e) => updateAgent(agent.id, { imageUrl: e.target.value })}
                      className="w-full bg-white px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:border-blue-500"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Section Configuration (Moved inside) */}
          <div className="mt-12 pt-12 border-t border-slate-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">合作伙伴板块配置</h4>
                <p className="text-slate-500 text-sm">管理首页“成为合作伙伴”区域的文案</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">板块标题</label>
                  <input 
                    type="text"
                    value={formData.partnerTitle}
                    onChange={(e) => setFormData({ ...formData, partnerTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">板块描述</label>
                  <textarea 
                    rows={3}
                    value={formData.partnerDescription}
                    onChange={(e) => setFormData({ ...formData, partnerDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">统计数据标题</label>
                  <input 
                    type="text"
                    value={formData.partnerStats}
                    onChange={(e) => setFormData({ ...formData, partnerStats: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">统计数据副标题</label>
                  <input 
                    type="text"
                    value={formData.partnerStatsSub}
                    onChange={(e) => setFormData({ ...formData, partnerStatsSub: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
