"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';
import { Trophy, Award, Lock, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from "../components/made-with-dyad";

const certifications = [
  {
    id: 'c-master',
    title: 'Embedded C Specialist',
    status: 'Locked',
    requirement: 'Complete Advanced C Programming module',
    color: 'emerald'
  },
  {
    id: 'linux-pro',
    title: 'Linux Systems Architect',
    status: 'Locked',
    requirement: 'Complete Linux Systems & Shell module',
    color: 'blue'
  },
  {
    id: 'rtos-expert',
    title: 'RTOS Certified Developer',
    status: 'Locked',
    requirement: 'Complete Real-Time Operating Systems module',
    color: 'purple'
  }
];

const Certifications = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 overflow-y-auto">
        <header className="mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Certifications</h1>
          <p className="text-slate-500 mt-1">Track your achievements and professional credentials.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6">
                {cert.status === 'Locked' ? (
                  <Lock size={20} className="text-slate-300" />
                ) : (
                  <Award size={24} className="text-emerald-500" />
                )}
              </div>
              
              <div className={`w-16 h-16 rounded-2xl bg-${cert.color}-50 flex items-center justify-center text-${cert.color}-600 mb-6`}>
                <Trophy size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {cert.requirement}
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                <Button 
                  variant={cert.status === 'Locked' ? "outline" : "default"} 
                  className="w-full rounded-xl gap-2"
                  disabled={cert.status === 'Locked'}
                >
                  {cert.status === 'Locked' ? 'Module Incomplete' : 'Download Certificate'}
                  {cert.status !== 'Locked' && <Download size={16} />}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-6 sm:p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-3">Ready for the Final Exam?</h2>
            <p className="text-blue-100 leading-relaxed">
              Complete all modules to unlock the Master Embedded Systems Certification. This comprehensive exam covers hardware, software, and system architecture.
            </p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-6 sm:px-8 py-4 sm:py-6 h-auto font-bold text-base sm:text-lg shrink-0 w-full md:w-auto">
            View Exam Details
          </Button>
        </div>

        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Certifications;
