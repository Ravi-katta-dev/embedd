"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Clock, 
  HardDrive,
  CheckCircle2,
  Circle
} from 'lucide-react';
import { Module } from '@/data/curriculum';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  Code2,
  Database,
  Terminal,
  Cpu,
  Clock,
  HardDrive
};

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  const Icon = iconMap[module.icon] || Code2;
  const completedCount = module.topics.filter(t => t.completed).length;
  const progress = (completedCount / module.topics.length) * 100;

  return (
    <Card className="overflow-hidden border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <div className={cn(
            "p-3 rounded-2xl transition-colors",
            module.level === 'Beginner' ? "bg-emerald-50 text-emerald-600" :
            module.level === 'Intermediate' ? "bg-blue-50 text-blue-600" :
            "bg-purple-50 text-purple-600"
          )}>
            <Icon size={24} />
          </div>
          <Badge variant="secondary" className="rounded-full font-medium">
            {module.duration}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
          {module.title}
        </CardTitle>
        <p className="text-sm text-slate-500 line-clamp-2 mt-2">
          {module.description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Topics</span>
            <span>{completedCount}/{module.topics.length}</span>
          </div>
          <div className="space-y-2">
            {module.topics.map((topic) => (
              <div key={topic.id} className="flex items-center gap-2 text-sm text-slate-600">
                {topic.completed ? (
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                ) : (
                  <Circle size={16} className="text-slate-300 shrink-0" />
                )}
                <span className={cn(topic.completed && "text-slate-400 line-through")}>
                  {topic.title}
                </span>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;