// ... (existing code)
// Add icons next to topics
{module.topics.map((topic, index) => (
  <div key={topic.id} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-200 transition-all group cursor-pointer">
    <div className="flex items-center mb-4">
      {topic.content && <div className="text-sm text-blue-600">📝</div>}
      {topic.codeExamples && <div className="text-sm text-green-600">💻</div>}
      {topic.diagram && <div className="text-sm text-purple-600">📊</div>}
      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
        {topic.title}
      </h4>
    </div>
    {/* ... (rest of the component remains similar) */}
  </div>
))}

// Add Start Learning button
<Button 
  variant="ghost" 
  size="sm" 
  className="w-full rounded-xl text-slate-500 hover:text-blue-600 transition-colors"
  onClick={() => {
    const firstIncomplete = module.topics.find(t => !t.completed);
    if (firstIncomplete) navigate(`/module/${moduleId}/topic/${firstIncomplete.id}`);
  }}
>
  Start Learning
</Button>