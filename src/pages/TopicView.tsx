"use client";

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { curriculum } from '../data/curriculum';
import Quiz from '../components/Quiz';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { showSuccess } from '@/utils/toast';

const TopicView = () => {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = React.useState(false);
  
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

  // Mock quiz questions for demonstration
  const quizQuestions = [
    {
      id: 1,
      text: "What does the 'volatile' keyword tell the compiler?",
      options: [
        "The variable should be stored in flash memory",
        "The variable's value can change unexpectedly outside the program's control",
        "The variable is only accessible within the current file",
        "The variable should be optimized for speed"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: "Which memory address is typically used for memory-mapped I/O?",
      options: [
        "Stack memory addresses",
        "Heap memory addresses",
        "Specific hardware register addresses defined by the MCU",
        "Virtual memory addresses managed by the OS"
      ],
      correctAnswer: 2
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-screen overflow-hidden pt-16 lg:pt-0">
        <header className="min-h-16 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-2 lg:py-0 bg-white shrink-0 gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <button 
              onClick={() => navigate(`/module/${moduleId}`)}
              className="p-2 hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{module.title}</p>
              <h2 className="text-sm font-bold text-slate-900 truncate">{topic.title}</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-xl gap-2 flex-1 sm:flex-none"
              onClick={() => setShowQuiz(!showQuiz)}
            >
              <HelpCircle size={16} />
              <span>{showQuiz ? "Back to Lesson" : "Take Quiz"}</span>
            </Button>
            <Button 
              onClick={handleComplete}
              className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2 flex-1 sm:flex-none"
            >
              <CheckCircle size={16} />
              <span>Complete & Next</span>
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            {showQuiz ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Knowledge Check</h2>
                <Quiz questions={quizQuestions} onComplete={handleComplete} />
              </div>
            ) : (
              <article className="prose prose-slate max-w-none animate-in fade-in duration-500">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">{topic.title}</h1>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-8">
                  <p className="text-blue-800 font-medium m-0">
                    In this lesson, we'll explore the fundamental concepts of {topic.title.toLowerCase()} and how they apply to embedded systems development.
                  </p>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {topic.content || 'Content for this topic is currently being prepared. Please check back soon for detailed explanations and guided learning sections.'}
                </p>

                {topic.learningGoals && topic.learningGoals.length > 0 && (
                  <section className="mt-10 mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Learning Goals</h3>
                    <ul className="space-y-2">
                      {topic.learningGoals.map((goal, index) => (
                        <li key={`${topic.id}-goal-${index}`} className="text-slate-600 flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {topic.subtopics && topic.subtopics.length > 0 && (
                  <section className="mt-10">
                    <h3 className="text-2xl font-bold text-slate-800 mb-5">Subtopics</h3>
                    <div className="space-y-4">
                      {topic.subtopics.map((subtopic, index) => (
                        <div key={`${topic.id}-subtopic-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <h4 className="text-lg font-bold text-slate-900 mb-2">{subtopic.title}</h4>
                          <p className="text-slate-600 mb-3">{subtopic.description}</p>
                          <ul className="space-y-1.5">
                            {subtopic.keyPoints.map((point, pointIndex) => (
                              <li key={`${topic.id}-subtopic-${index}-point-${pointIndex}`} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </article>
            )}

            {!showQuiz && (
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopicView;
