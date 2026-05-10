"use client";

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Trophy, 
  Settings, 
  Cpu, 
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'My Courses', path: '/' }, // For now, dashboard is the course list
  { icon: Trophy, label: 'Certifications', path: '/certifications' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex flex-col border-r border-slate-800 shrink-0 sticky top-0">
      <div className="p-6 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
        <div className="bg-blue-600 p-2 rounded-lg">
          <Cpu size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight">EmbedMaster</span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
              {isActive && <ChevronRight size={16} className="ml-auto" />}
            </button>
          );
        })}
      </nav>
      
      <div className="p-4 mt-auto">
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Current Progress</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold">12% Complete</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full w-[12%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;