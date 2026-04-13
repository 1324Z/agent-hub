import React from 'react';
import { Search, Bell, HelpCircle, Download } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  if (location.pathname === '/') return null;

  const getTitle = () => {
    switch (location.pathname) {
      case '/admin/users': return '用户管理';
      case '/admin/config': return '运营配置中心';
      case '/admin/support': return '运营支撑';
      case '/admin/sessions': return 'AgentOS';
      case '/admin/analytics': return 'AgentOS';
      default: return 'AgentOS';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full h-16 glass-nav flex items-center justify-between px-8 border-b border-slate-200/40">
      <div className="flex items-center gap-8 flex-1">
        <span className="text-xl font-black tracking-tighter text-blue-600">
          {getTitle()}
        </span>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            className="w-full bg-slate-100/50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400"
            placeholder="搜索会话、用户 ID 或智能体..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {location.pathname === '/admin/analytics' && (
          <button className="flex items-center gap-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600/20 transition-all">
            <Download className="w-4 h-4" />
            <span>导出报表</span>
          </button>
        )}
        
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all relative text-slate-500">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>
        
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-all text-slate-500">
          <HelpCircle className="w-5 h-5" />
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900">Admin</p>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Administrator</p>
          </div>
          <img
            alt="Admin Avatar"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/10"
            src="https://picsum.photos/seed/admin/100/100"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
