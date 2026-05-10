import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram: React.FC<{ source: string }> = ({ source }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
    if (containerRef.current && source) {
      containerRef.current.innerHTML = '';
      mermaid.render('mermaid-diagram', source)
        .then(({ svg }) => {
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch((err) => console.error('Mermaid render error:', err));
    }
  }, [source]);

  return <div ref={containerRef} className="my-4" />;
};

export default MermaidDiagram;