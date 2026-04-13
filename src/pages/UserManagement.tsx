import React from 'react';
import { 
  Plus, 
  Search, 
  Edit3, 
  UserX, 
  CheckCircle2, 
  Clock, 
  UserCircle 
} from 'lucide-react';
import { motion } from 'motion/react';

const UserManagement = () => {
  const users = [
    { name: '张伟杰', email: 'zwj_agent_2024@outlook.com', initial: 'Z', status: 'verified', roles: ['高级管理员', '开发者'] },
    { name: '李雨萌', email: 'yumeng.li@corp.com', initial: 'L', status: 'pending', roles: ['内容运营'] },
    { name: 'Kevin Zhang', email: 'kevin.z@intelligence.ai', initial: 'K', status: 'unverified', roles: ['普通访客'] },
  ];

  return (
    <div className="p-8 space-y-8">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            用户信息列表
          </h4>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-semibold bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              批量实名
            </button>
            <button className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
              <Plus className="w-4 h-4" />
              新增用户
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-50">
          <table className="w-full text-left">
            <thead className="bg-blue-50/50 text-blue-500 text-xs uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-4">用户基础信息</th>
                <th className="px-6 py-4">实名状态</th>
                <th className="px-6 py-4">所属角色</th>
                <th className="px-6 py-4 text-right">操作项</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {users.map((user, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {user.initial}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-900">{user.name}</div>
                        <div className="text-xs text-blue-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {user.status === 'verified' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        已实名
                      </span>
                    )}
                    {user.status === 'pending' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">
                        <Clock className="w-3 h-3 text-amber-500" />
                        审核中
                      </span>
                    )}
                    {user.status === 'unverified' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                        <UserCircle className="w-3 h-3 text-slate-400" />
                        未认证
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-1 flex-wrap">
                      {user.roles.map((role, j) => (
                        <span key={j} className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-medium">
                          {role}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-blue-300 hover:text-blue-600 transition-colors">
                        <Edit3 className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-blue-300 hover:text-red-500 transition-colors">
                        <UserX className="w-5 h-5" />
                      </button>
                    </div>
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

export default UserManagement;
