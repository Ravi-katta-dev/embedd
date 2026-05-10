"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { curriculum } from '../data/curriculum';
import CodeSnippet from '../components/CodeSnippet';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { showSuccess } from '@/utils/toast';

const TopicView = () => {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();
  
  const module = curriculum.find(m => m.id === moduleId);
  const topicIndex = module?.topics.findIndex(t => t.id === topicId) ?? -1;
  const topic = module?.topics[topicIndex];

  if (!module || !topic) return <div>Topic not found</div>;

  const nextTopic = module.topics[topicIndex + 1];
  const prevTopic = module.topics[topicIndex - 1];

  const handleComplete = () => {
    showSuccess("Topic marked as complete!");
    if (nextTopic) {
      navigate(`/module/${moduleId}/topic/${nextTopic.id}`);
    } else {
      navigate(`/module/${moduleId}`);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(`/module/${moduleId}`)}
              className="p-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{module.title}</p>
              <h2 className="text-sm font-bold text-slate-900">{topic.title}</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-xl gap-2">
              <MessageSquare size={16} />
              <span>Discuss</span>
            </Button>
            <Button 
              onClick={handleComplete}
              className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2"
            >
              <CheckCircle size={16} />
              <span>Complete & Next</span>
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-12 px-8">
            <article className="prose prose-slate max-w-none">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-8">{topic.title}</h1>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-8">
                <p className="text-blue-800 font-medium m-0">
                  In this lesson, we'll explore the fundamental concepts of {topic.title.toLowerCase()} and how they apply to embedded systems development.
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {topic.content || "Content for this topic is currently being prepared. Please check back soon for detailed explanations, diagrams, and code examples."}
              </p>

              {topic.id === 'c1' && (
                <>
                  <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">The Volatile Keyword</h3>
                  <p className="text-slate-600 mb-6">
                    The <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600">volatile</code> keyword is essential when dealing with memory-mapped I/O or variables modified by interrupts. It tells the compiler not to optimize accesses to that variable.
                  </p>
                  <CodeSnippet code={`// Example: Reading a hardware status register
volatile uint32_t *status_reg = (uint32_t *)0x40001000;

while ((*status_reg & 0x01) == 0) {
    // Wait for bit 0 to be set by hardware
    // Without 'volatile', the compiler might optimize this 
    // into an infinite loop if it thinks the value never changes.
}`} />
                </>
              )}

              {topic.id === 'c2' && (
                <>
                  <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Memory Mapping in C</h3>
                  <p className="text-slate-600 mb-6">
                    Directly accessing hardware registers requires casting integer addresses to pointers. This is a common pattern in low-level driver development.
                  </p>
                  <CodeSnippet code={`#define GPIO_BASE 0x40020000
#define GPIO_MODER (*(volatile uint32_t *)(GPIO_BASE + 0x00))

void init_gpio() {
    // Set pin 5 as output
    GPIO_MODER |= (1 << 10);
}`} />
                </>
              )}
            </article>

            {/* Bottom Navigation */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              {prevTopic ? (
                <button 
                  onClick={() => navigate(`/module/${moduleId}/topic/${prevTopic.id}`)}
                  className="flex flex-col items-start group"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
                    <ChevronLeft size={14} /> Previous
                  </span>
                  <span className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">{prevTopic.title}</span>
                </button>
              ) : <div />}

              {nextTopic ? (
                <button 
                  onClick={() => navigate(`/module/${moduleId}/topic/${nextTopic.id}`)}
                  className="flex flex-col items-end group text-right"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
                    Next <ChevronRight size={14} />
                  </span>
                  <span className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">{nextTopic.title}</span>
                </button>
              ) : (
                <button 
                  onClick={() => navigate(`/module/${moduleId}`)}
                  className="flex flex-col items-end group text-right"
                >
                  <span className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
                    Finish <ChevronRight size={14} />
                  </span>
                  <span className="text-slate-900 font-bold group-hover:text-blue-600 transition-colors">Back to Module</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopicView;