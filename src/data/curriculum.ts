export interface Topic {
  id: string;
  title: string;
  completed: boolean;
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
      { id: 'c1', title: 'Data Types & Storage Classes', completed: true },
      { id: 'c2', title: 'Pointers & Memory Mapping', completed: false },
      { id: 'c3', title: 'Function Pointers & Callbacks', completed: false },
      { id: 'c4', title: 'Bitwise Operations & Masking', completed: false },
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
      { id: 'ds1', title: 'Linked Lists & Dynamic Memory', completed: false },
      { id: 'ds2', title: 'Stacks & Queues in Embedded', completed: false },
      { id: 'ds3', title: 'Binary Trees & Searching', completed: false },
      { id: 'ds4', title: 'Sorting Algorithms', completed: false },
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
      { id: 'l1', title: 'Shell Scripting Basics', completed: false },
      { id: 'l2', title: 'Process Management', completed: false },
      { id: 'l3', title: 'Inter-Process Communication (IPC)', completed: false },
      { id: 'l4', title: 'System Calls & File I/O', completed: false },
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
      { id: 'a1', title: 'ARM Cortex Architecture', completed: false },
      { id: 'a2', title: 'Interrupt Handling & NVIC', completed: false },
      { id: 'a3', title: 'Peripheral Interfacing (I2C, SPI, UART)', completed: false },
      { id: 'a4', title: 'DMA Controllers', completed: false },
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
      { id: 'r1', title: 'Task Scheduling & Priorities', completed: false },
      { id: 'r2', title: 'Semaphores & Mutexes', completed: false },
      { id: 'r3', title: 'Message Queues & Event Groups', completed: false },
      { id: 'r4', title: 'Memory Management in RTOS', completed: false },
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
      { id: 'd1', title: 'Kernel Module Programming', completed: false },
      { id: 'd2', title: 'Character Device Drivers', completed: false },
      { id: 'd3', title: 'Platform Drivers & Device Tree', completed: false },
      { id: 'd4', title: 'Interrupts in Kernel Space', completed: false },
    ]
  }
];