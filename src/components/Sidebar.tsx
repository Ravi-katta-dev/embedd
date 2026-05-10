"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Clock, 
  Database, 
  HardDrive,
  BookOpen,
  Trophy,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Code2,
  Cpu,
  Terminal,
  Clock,
  Database,
  HardDrive
};

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-80 bg-slate-900 text-white h-screen overflow-y-auto border-r border-slate-800">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Embedded Systems</h1>
            <p className="text-xs text-slate-400">Learning Platform</p>
          </div>
        </div>

        <nav className="space-y-2">
          <Link 
            to="/" 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              location.pathname === '/' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <BookOpen size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link 
            to="/certifications" 
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              location.pathname === '/certifications' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Trophy size={20} />
            <span className="font-medium">Certifications</span>
          </Link>
        </nav>

        <div className="mt-8">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Learning Modules</h3>
          <div className="space-y-4">
            {curriculum.map((module, index) => {
              const Icon = iconMap[module.icon] || Code2;
              const completedCount = module.topics.filter(t => t.completed).length;
              const progress = (completedCount / module.topics.length) * 100;
              
              return (
                <div key={module.id} className="group">
                  <Link 
                    to={`/module/${module.id}`}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === `/module/${module.id}` 
                        ? 'bg-blue-600 text-white' 
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-slate-800 group-hover:bg-slate-700 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{module.title}</h4>
                      <p className="text-xs text-slate-400">
                        {completedCount}/{module.topics.length} completed
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-slate-500 group-hover:text-white transition-colors" />
                  </Link>
                  
                  <div className="ml-12 mt-2">
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div 
                        className="bg-blue-500 h-1.5 rounded-full transition-all duration-500" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;