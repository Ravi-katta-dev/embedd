import React from 'react';

interface CodeSnippetProps {
  examples: string[];
  language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ examples }) => {
  return (
    <div className="space-y-4">
      {examples.map((example, index) => (
        <div key={index}>
          <h4 className="text-sm font-bold text-slate-800 mb-2">Example {index + 1}</h4>
          <pre className="p-4 bg-slate-900 rounded-2xl overflow-x-auto">
            <code className="text-sm font-mono text-slate-300 leading-relaxed">
              {example}
            </code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default CodeSnippet;