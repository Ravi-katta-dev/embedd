// ... (existing imports and setup)
// Add state for active tab
const [activeTab, setActiveTab] = React.useState('explanation');

// Add Tab component
const TabContent = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex flex-col space-y-4">
      <ContentTabs 
        activeTab={activeTab} 
        onTabChange={onTabChange}
      />
      
      {activeTab === 'explanation' && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{topic.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: topic.content || '' }} />
        </div>
      )}
      
      {activeTab === 'code' && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Code Examples</h2>
          {topic.codeExamples?.map((example, index) => (
            <CodeSnippet key={index} examples={[example]} />
          ))}
        </div>
      )}
      
      {activeTab === 'diagram' && (
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Diagram</h2>
          {topic.diagram && <MermaidDiagram source={topic.diagram} />}
        </div>
      )}
    </div>
  );
};

// Update render section to use TabContent
{topic && <TabContent activeTab={activeTab} onTabChange={setActiveTab} />}