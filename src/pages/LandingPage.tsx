import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bolt, 
  Terminal, 
  Palette, 
  TrendingUp, 
  Star, 
  ArrowRight, 
  Globe, 
  ChevronDown,
  ShieldCheck,
  Handshake,
  LayoutDashboard,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useConfig } from '../contexts/ConfigContext';

const iconMap: Record<string, any> = {
  Terminal,
  Palette,
  TrendingUp,
  Globe,
  Bolt,
  Star,
  ShieldCheck,
  Handshake,
  LayoutDashboard
};

const LandingPage = () => {
  const navigate = useNavigate();
  const { config } = useConfig();
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    region: '',
    phone: '',
    email: '',
    description: '',
    captcha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setShowPartnerModal(false);
    setIsSubmitted(false);
    setFormData({
      name: '',
      position: '',
      company: '',
      region: '',
      phone: '',
      email: '',
      description: '',
      captcha: ''
    });
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Landing Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-2xl shadow-blue-500/5">
        <div className="flex items-center justify-between px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-12">
            <a className="text-xl font-extrabold tracking-tighter text-blue-600" href="#">AI Agent Hub</a>
            <div className="hidden md:flex items-center gap-8">
              <a className="text-blue-600 font-semibold border-b-2 border-blue-600 py-1" href="#">探索</a>
              <a className="text-slate-600 hover:text-blue-600 transition-colors py-1" href="#">合作伙伴</a>
              <a className="text-slate-600 hover:text-blue-600 transition-colors py-1" href="#">运营管理</a>
              <a className="text-slate-600 hover:text-blue-600 transition-colors py-1" href="#">社区</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="bg-gradient-to-br from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center gap-2">
                立即开始
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-blue-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] origin-top-right">
                <button 
                  onClick={() => navigate('/admin/config')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-medium">管理者登录</span>
                </button>
                <div className="h-px bg-slate-100 mx-4"></div>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  <Handshake className="w-5 h-5" />
                  <span className="font-medium">合作伙伴登录</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/50 to-transparent"></div>
          <img 
            className="w-full h-full object-cover opacity-30" 
            src={config.heroBgImage} 
            alt="Global Network Background"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto max-w-screen-xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-xs font-bold tracking-wider mb-6">
              <Bolt className="w-4 h-4 fill-current" />
              {config.heroSubtitle}
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
              {config.heroTitle.split('，')[0]}，<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">{config.heroTitle.split('，')[1]}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              {config.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all">
                探索智能体
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all border border-blue-100">
                查看文档
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-4 shadow-2xl border border-white/50">
              <img 
                className="rounded-[2rem] shadow-inner w-full aspect-video object-cover" 
                src={config.heroPreviewImage} 
                alt="Dashboard Preview"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Gallery */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">热门智能体</h2>
              <p className="text-slate-500 max-w-xl">由社区创新者部署的顶尖智能助手。</p>
            </div>
            <a className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#">
              浏览画廊 <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.popularAgents.map((agent, i) => {
              const Icon = iconMap[agent.iconName] || Terminal;
              return (
                <motion.div 
                  key={agent.id}
                  whileHover={{ y: -10 }}
                  className="group bg-slate-50 p-6 rounded-[2rem] hover:bg-blue-50 transition-all duration-500"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-white">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      src={agent.imageUrl || `https://picsum.photos/seed/${agent.imgSeed}/400/400`} 
                      alt={agent.title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{agent.title}</h3>
                      <div className="flex items-center gap-1 text-cyan-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold">{agent.rating}</span>
                        <span className="text-slate-400 text-xs font-normal ml-1">({agent.users} 用户)</span>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-xl text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-100">
                    立即体验
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">{config.partnerTitle}</h2>
            <p className="text-lg text-slate-600 mb-12">{config.partnerDescription}</p>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">{config.partnerStats}</div>
                  <div className="text-slate-500">{config.partnerStatsSub}</div>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowPartnerModal(true)}
              className="bg-gradient-to-br from-blue-600 to-blue-400 text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all"
            >
              成为合作伙伴
            </button>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl relative z-10 border border-blue-100">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-xl">收益增长趋势</h4>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">2024</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold">2023</span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-4">
                {[40, 60, 85, 55, 95, 70].map((h, i) => (
                  <div key={i} className="w-full bg-blue-600/10 rounded-t-xl relative group" style={{ height: `${h}%` }}>
                    <div 
                      className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-xl transition-all duration-500" 
                      style={{ height: `${h * 0.8}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between text-xs text-slate-400 font-bold uppercase tracking-widest">
                <span>1月</span><span>3月</span><span>5月</span><span>7月</span><span>9月</span><span>11月</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Partner Modal */}
      <AnimatePresence>
        {showPartnerModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <button 
                onClick={closeModal}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {!isSubmitted ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">成为合作伙伴</h3>
                      <p className="text-sm text-slate-500">请填写以下信息，我们的团队将尽快与您联系。</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">姓名：</label>
                          <input 
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            placeholder="请输入您的姓名"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">职位：</label>
                          <input 
                            required
                            type="text"
                            value={formData.position}
                            onChange={(e) => setFormData({...formData, position: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            placeholder="请输入您的职位"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">公司：</label>
                          <input 
                            required
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            placeholder="请输入您的公司名称"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">地区：</label>
                          <input 
                            required
                            type="text"
                            value={formData.region}
                            onChange={(e) => setFormData({...formData, region: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            placeholder="请输入您所在的地区"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">电话：</label>
                          <input 
                            required
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            placeholder="请输入您的联系电话"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">邮箱：</label>
                          <input 
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            placeholder="请输入您的电子邮箱"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-bold text-slate-700">描述：</label>
                          <span className="text-xs text-slate-400">{formData.description.length} / 500</span>
                        </div>
                        <textarea 
                          required
                          maxLength={500}
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                          placeholder="请简要描述您的合作意向..."
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700">验证码：</label>
                          <div className="flex gap-2">
                            <input 
                              required
                              type="text"
                              value={formData.captcha}
                              onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                              placeholder="请输入验证码"
                            />
                            <div className="bg-slate-100 px-3 py-2.5 rounded-xl font-mono font-bold text-blue-600 select-none flex items-center justify-center border border-slate-200 min-w-[80px] text-sm">
                              8K2P
                            </div>
                          </div>
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
                        >
                          提交申请
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">申请已提交</h3>
                    <p className="text-xl text-slate-600 font-medium">待处理，请保持电话通畅</p>
                    <button 
                      onClick={closeModal}
                      className="mt-10 px-8 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                    >
                      返回首页
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-screen-xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="text-xl font-bold text-blue-600">AI Agent Hub</div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
              © 2024 AI Agent Hub. 智能赋能，连接未来。开创自主工作流与智能编排的未来。
            </p>
            <div className="flex gap-4">
              <Globe className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors w-5 h-5" />
              <Terminal className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors w-5 h-5" />
              <LayoutDashboard className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors w-5 h-5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold text-slate-900 mb-4 text-sm">平台</h5>
              <ul className="space-y-3">
                <li><a className="text-slate-500 hover:text-blue-600 text-sm transition-colors" href="#">隐私政策</a></li>
                <li><a className="text-slate-500 hover:text-blue-600 text-sm transition-colors" href="#">服务协议</a></li>
                <li><a className="text-slate-500 hover:text-blue-600 text-sm transition-colors" href="#">开发者接口</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-4 text-sm">支持</h5>
              <ul className="space-y-3">
                <li><a className="text-slate-500 hover:text-blue-600 text-sm transition-colors" href="#">运行状态</a></li>
                <li><a className="text-slate-500 hover:text-blue-600 text-sm transition-colors" href="#">联系我们</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
