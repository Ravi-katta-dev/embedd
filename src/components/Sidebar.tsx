// ... (existing code)
// Add module progress badges
{curriculum.map((module, index) => (
  <div key={index} className="flex items-center mb-4">
    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-400">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-12h6m-6 0H6" />
      </svg>
    </div>
    <div className="ml-4">
      <h3 className="font-bold text-slate-900">{module.title}</h3>
      <p className="text-sm text-slate-500">
        {module.topics.filter(t => t.completed).length} / {module.topics.length}
      </p>
      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div 
          className="bg-blue-500 h-1.5 rounded-full w-[calc(${module.topics.filter(t => t.completed).length / module.topics.length * 100}%)]"
        />
      </div>
    </div>
  </div>
))}