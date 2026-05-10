"use client";

import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  questions: Question[];
  onComplete: () => void;
}

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    if (isCorrect) setScore(score + 1);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const passed = score >= questions.length * 0.7;
    return (
      <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center">
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
          passed ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
        )}>
          {passed ? <CheckCircle2 size={40} /> : <XCircle size={40} />}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          {passed ? "Quiz Passed!" : "Keep Practicing"}
        </h3>
        <p className="text-slate-500 mb-8">
          You scored {score} out of {questions.length} questions correctly.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleReset} className="rounded-xl gap-2">
            <RefreshCcw size={16} /> Try Again
          </Button>
          {passed && (
            <Button onClick={onComplete} className="bg-blue-600 hover:bg-blue-700 rounded-xl gap-2">
              Continue Learning <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200">
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 w-8 rounded-full transition-colors",
                i === currentQuestion ? "bg-blue-600" : i < currentQuestion ? "bg-emerald-500" : "bg-slate-100"
              )}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-8">{question.text}</h3>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctAnswer;
          const isSelected = index === selectedOption;
          
          let variantClass = "border-slate-200 hover:border-blue-200 hover:bg-blue-50/30";
          if (isSubmitted) {
            if (isCorrect) variantClass = "border-emerald-500 bg-emerald-50 text-emerald-700";
            else if (isSelected) variantClass = "border-red-500 bg-red-50 text-red-700";
            else variantClass = "border-slate-100 opacity-50";
          } else if (isSelected) {
            variantClass = "border-blue-600 bg-blue-50 text-blue-700";
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isSubmitted}
              className={cn(
                "w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between group",
                variantClass
              )}
            >
              <span className="font-medium">{option}</span>
              {isSubmitted && isCorrect && <CheckCircle2 size={20} className="text-emerald-500" />}
              {isSubmitted && isSelected && !isCorrect && <XCircle size={20} className="text-red-500" />}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end">
        {!isSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedOption === null}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8"
          >
            Submit Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext} 
            className="bg-slate-900 hover:bg-slate-800 rounded-xl px-8 gap-2"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            <ArrowRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;