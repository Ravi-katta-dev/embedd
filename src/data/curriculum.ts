// Extend Topic interface with new fields
export interface Topic {
  id: string;
  title: string;
  completed: boolean;
  content?: string;          // Explanation (HTML/Markdown)
  codeExamples?: string[];   // Array of code strings
  diagram?: string;          // Mermaid diagram source
  duration?: string;
}

// Update all modules with placeholder content
export const curriculum: Module[] = [
  // ... (existing modules)
  {
    id: 'c-prog',
    title: 'Advanced C Programming',
    description: 'Mastering pointers, memory management, and low-level optimizations essential for embedded systems.',
    icon: 'Code2',
    duration: '4 Weeks',
    level: 'Beginner',
    topics: [
      // Topic 1: Data Types & Storage Classes
      {
        id: 'c1',
        title: 'Data Types & Storage Classes',
        completed: true,
        content: 'In embedded C, understanding storage classes (static, extern, volatile) is crucial for memory mapping and hardware interaction. The volatile keyword prevents compiler optimizations on variables that may change unexpectedly.',
        codeExamples: [
          '// Example: Volatile variable usage\nvolatile uint32_t *status_reg = (uint32_t *)0x40001000;',
          '// Example: Static vs Extern\nstatic int counter = 0;\nextern int global_counter;'
        ],
        diagram: '```mermaid\ngraph TD\nA[Memory Address] --> B[volatile Variable]\nC[Compiler Optimization] --> D[volatile Keyword]\n'
      },
      // ... (add similar placeholders for all 4 topics)
    ]
  },
  // ... (update other modules similarly)
];