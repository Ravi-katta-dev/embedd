export interface Topic {
  id: string;
  title: string;
  completed: boolean;
  content?: string;
  duration?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  topics: Topic[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const curriculum: Module[] = [
  {
    id: 'c-prog',
    title: 'Advanced C Programming',
    description: 'Mastering pointers, memory management, and low-level optimizations essential for embedded systems.',
    icon: 'Code2',
    duration: '4 Weeks',
    level: 'Beginner',
    topics: [
      { 
        id: 'c1', 
        title: 'Data Types & Storage Classes', 
        completed: true,
        duration: '45 mins',
        content: 'In embedded C, understanding storage classes (static, extern, volatile) is crucial for memory mapping and hardware interaction.'
      },
      { 
        id: 'c2', 
        title: 'Pointers & Memory Mapping', 
        completed: false,
        duration: '60 mins',
        content: 'Learn how to use pointers to access hardware registers directly via memory-mapped I/O.'
      },
      { 
        id: 'c3', 
        title: 'Function Pointers & Callbacks', 
        completed: false,
        duration: '50 mins',
        content: 'Implementing modular code using function pointers for interrupt service routines and event handling.'
      },
      { 
        id: 'c4', 
        title: 'Bitwise Operations & Masking', 
        completed: false,
        duration: '40 mins',
        content: 'The bread and butter of embedded systems: manipulating individual bits in hardware registers.'
      },
    ]
  },
  {
    id: 'ds',
    title: 'Data Structures',
    description: 'Implementing efficient algorithms and data structures for resource-constrained environments.',
    icon: 'Database',
    duration: '3 Weeks',
    level: 'Beginner',
    topics: [
      { id: 'ds1', title: 'Linked Lists & Dynamic Memory', completed: false, duration: '55 mins' },
      { id: 'ds2', title: 'Stacks & Queues in Embedded', completed: false, duration: '45 mins' },
      { id: 'ds3', title: 'Binary Trees & Searching', completed: false, duration: '65 mins' },
      { id: 'ds4', title: 'Sorting Algorithms', completed: false, duration: '50 mins' },
    ]
  },
  {
    id: 'linux',
    title: 'Linux Systems & Shell',
    description: 'Understanding the Linux kernel, shell scripting, and system-level programming.',
    icon: 'Terminal',
    duration: '4 Weeks',
    level: 'Intermediate',
    topics: [
      { id: 'l1', title: 'Shell Scripting Basics', completed: false, duration: '40 mins' },
      { id: 'l2', title: 'Process Management', completed: false, duration: '60 mins' },
      { id: 'l3', title: 'Inter-Process Communication (IPC)', completed: false, duration: '70 mins' },
      { id: 'l4', title: 'System Calls & File I/O', completed: false, duration: '55 mins' },
    ]
  },
  {
    id: 'arm',
    title: 'ARM Architecture',
    description: 'Deep dive into ARM Cortex-M/A series, registers, and instruction sets.',
    icon: 'Cpu',
    duration: '5 Weeks',
    level: 'Intermediate',
    topics: [
      { id: 'a1', title: 'ARM Cortex Architecture', completed: false, duration: '90 mins' },
      { id: 'a2', title: 'Interrupt Handling & NVIC', completed: false, duration: '75 mins' },
      { id: 'a3', title: 'Peripheral Interfacing (I2C, SPI, UART)', completed: false, duration: '120 mins' },
      { id: 'a4', title: 'DMA Controllers', completed: false, duration: '80 mins' },
    ]
  },
  {
    id: 'rtos',
    title: 'Real-Time Operating Systems',
    description: 'Scheduling, task management, and synchronization in RTOS environments like FreeRTOS.',
    icon: 'Clock',
    duration: '4 Weeks',
    level: 'Advanced',
    topics: [
      { id: 'r1', title: 'Task Scheduling & Priorities', completed: false, duration: '60 mins' },
      { id: 'r2', title: 'Semaphores & Mutexes', completed: false, duration: '55 mins' },
      { id: 'r3', title: 'Message Queues & Event Groups', completed: false, duration: '65 mins' },
      { id: 'r4', title: 'Memory Management in RTOS', completed: false, duration: '50 mins' },
    ]
  },
  {
    id: 'drivers',
    title: 'Device Drivers',
    description: 'Writing kernel-level drivers for hardware peripherals in Linux.',
    icon: 'HardDrive',
    duration: '6 Weeks',
    level: 'Advanced',
    topics: [
      { id: 'd1', title: 'Kernel Module Programming', completed: false, duration: '120 mins' },
      { id: 'd2', title: 'Character Device Drivers', completed: false, duration: '150 mins' },
      { id: 'd3', title: 'Platform Drivers & Device Tree', completed: false, duration: '180 mins' },
      { id: 'd4', title: 'Interrupts in Kernel Space', completed: false, duration: '140 mins' },
    ]
  }
];