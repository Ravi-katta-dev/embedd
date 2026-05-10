import React from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ source }: { source: string }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    const diagram = mermaid.createGraphFromString(source);
    diagram.drawSVG('diagram-container');
  }, [source]);

  return (
    <div id="diagram-container" className="mb-4">
      {/* Mermaid will render here */}
    </div>
  );
};

export default MermaidDiagram;