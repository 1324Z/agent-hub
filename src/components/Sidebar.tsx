import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Settings, 
  Wrench, 
  MessageSquare, 
  BarChart3, 
  Droplets,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { name: '用户管理', icon: Users, path: '/admin/users' },
    { name: '运营配置', icon: Settings, path: '/admin/config' },
    { name: '运营支撑', icon: Wrench, path: '/admin/support' },
    { name: '会话管理', icon: MessageSquare, path: '/admin/sessions' },
    { name: '数据分析', icon: BarChart3, path: '/admin/analytics' },
  ];

  if (location.pathname === '/') return null;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 z-50 bg-white flex flex-col p-4 gap-y-2 border-r border-slate-200/60">
      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-200">
          <Droplets className="text-white w-6 h-6 fill-current" />
        </div>
        <div>
          <h1 className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent font-black text-lg leading-tight">
            Fluid Authority
          </h1>
          <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
            Intelligence Platform
          </p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 transition-all duration-200 rounded-xl group
              ${isActive 
                ? 'bg-blue-50 text-blue-600 shadow-sm font-semibold' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}
            `}
          >
            <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-slate-100">
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 rounded-xl group font-medium text-sm"
        >
          <LogOut className="w-5 h-5" />
          <span>退出登录</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
