"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';
import ModuleCard from '../components/ModuleCard';
import { curriculum } from '../data/curriculum';
import { MadeWithDyad } from "../components/made-with-dyad";
import { 
  Search, 
  Bell, 
  TrendingUp, 
  BookOpen, 
  Award 
} from 'lucide-react';
import { Input } from '../components/ui/input';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Learning Path</h1>
            <p className="text-slate-500 mt-1">Welcome back! Continue your journey in Embedded Systems.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input 
                placeholder="Search topics..." 
                className="pl-10 bg-white border-slate-200 rounded-xl focus:ring-blue-500"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Alex Rivera</p>
                <p className="text-xs text-slate-500">Student ID: #8821</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Active Modules</p>
              <p className="text-2xl font-bold text-slate-900">6 Modules</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Overall Progress</p>
              <p className="text-2xl font-bold text-slate-900">12%</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Award size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Certificates</p>
              <p className="text-2xl font-bold text-slate-900">0 Earned</p>
            </div>
          </div>
        </div>

        {/* Curriculum Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">Curriculum Roadmap</h2>
            <div className="flex gap-2">
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Beginner
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div> Intermediate
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div> Advanced
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>

        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Index;