// ... (existing code remains mostly unchanged)
// Add support for multiple code examples
interface CodeSnippetProps {
  examples: string[];
  language?: string;
}

// In render section:
{examples.map((example, index) => (
  <div key={index} className="mb-4">
    <h4 className="text-sm font-bold text-slate-800">Example {index + 1}</h4>
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm font-mono text-slate-300 leading-relaxed">
        {example}
      </code>
    </pre>
  </div>
))}