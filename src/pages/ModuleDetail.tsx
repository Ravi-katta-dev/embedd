"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { curriculum } from '../data/curriculum';
import { 
  ArrowLeft, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  BookOpen,
  ChevronRight,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = curriculum.find(m => m.id === moduleId);

  if (!module) return <div>Module not found</div>;

  const completedCount = module.topics.filter(t => t.completed).length;
  const progress = (completedCount / module.topics.length) * 100;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Dashboard</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Module Info & Topics */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="rounded-full px-3 py-1 border-blue-200 text-blue-600 bg-blue-50">
                  {module.level}
                </Badge>
                <span className="text-slate-400">•</span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Clock size={14} /> {module.duration}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{module.title}</h1>
              <p className="text-slate-600 leading-relaxed mb-8">
                {module.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900">Module Progress</h3>
                  <span className="text-sm font-bold text-blue-600">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2 bg-slate-100" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 px-2">Curriculum Topics</h2>
              {module.topics.map((topic, index) => (
                <div 
                  key={topic.id}
                  onClick={() => navigate(`/module/${moduleId}/topic/${topic.id}`)}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {topic.completed ? (
                        <CheckCircle2 size={22} className="text-emerald-500" />
                      ) : (
                        <span className="font-bold text-sm">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {topic.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock size={12} /> {topic.duration || '45 mins'}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <FileText size={12} /> Reading Material
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <PlayCircle size={24} className="text-slate-300 group-hover:text-blue-600" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Resources & Instructor */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-400" />
                Learning Resources
              </h3>
              <div className="space-y-3">
                {['Course Syllabus.pdf', 'Hardware Setup Guide', 'Code Examples (GitHub)', 'Reference Manuals'].map((res) => (
                  <button key={res} className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors text-sm text-slate-300">
                    <span>{res}</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Your Instructor</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold">
                  DR
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dr. Rajesh Kumar</p>
                  <p className="text-xs text-slate-500">Embedded Systems Expert</p>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleDetail;