export interface Subtopic {
  title: string;
  description: string;
  keyPoints: string[];
}

export interface Topic {
  id: string;
  title: string;
  completed: boolean;
  content?: string;
  learningGoals?: string[];
  subtopics?: Subtopic[];
  codeExamples?: string[];
  diagram?: string;
  duration?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  topics: Topic[];
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
        content: 'This lesson explains how C data representation and storage classes influence memory layout, scope, and reliability in firmware.',
        learningGoals: [
          'Differentiate automatic, static, and external storage duration.',
          'Choose the right type width for hardware and protocol data.',
          'Avoid undefined behavior from implicit promotions and overflow.'
        ],
        subtopics: [
          {
            title: 'Integer and floating-point representation',
            description: 'Understand bit width, signedness, and precision trade-offs for embedded targets.',
            keyPoints: [
              'Use fixed-width integer types for portability.',
              'Account for conversion and promotion rules in expressions.',
              'Limit floating point usage in time-critical paths.'
            ]
          },
          {
            title: 'Storage classes and lifetime',
            description: 'Map variable lifetime and visibility to practical firmware design.',
            keyPoints: [
              'Static objects persist across function calls.',
              'Extern symbols define module-level interfaces.',
              'Auto variables are stack-resident and temporary.'
            ]
          }
        ]
      },
      {
        id: 'c2',
        title: 'Memory Mapping in C',
        completed: false,
        content: 'Learn how firmware views peripherals and memory regions through addresses, sections, and linker-managed placement.',
        learningGoals: [
          'Relate linker sections to startup and runtime behavior.',
          'Interpret memory maps to estimate usage and free space.',
          'Design safer access patterns for memory-mapped peripherals.'
        ],
        subtopics: [
          {
            title: 'Memory regions and linker sections',
            description: 'Discover how code and data are placed in flash, SRAM, and special regions.',
            keyPoints: [
              'Text and rodata usually reside in flash.',
              'Data and bss are initialized during startup.',
              'Section planning helps prevent runtime memory overlap.'
            ]
          },
          {
            title: 'Peripheral address spaces',
            description: 'Understand why specific address ranges map to hardware registers.',
            keyPoints: [
              'Register access follows device reference manuals.',
              'Read-modify-write sequences need atomicity awareness.',
              'Alignment and access width matter for correctness.'
            ]
          }
        ]
      },
      {
        id: 'c3',
        title: 'Pointers & Arrays',
        completed: false,
        content: 'Build confidence with pointers and arrays for buffers, tables, and memory-efficient data flow.',
        learningGoals: [
          'Apply pointer arithmetic safely with clear bounds.',
          'Use const qualifiers to protect immutable data.',
          'Recognize common pointer aliasing risks in embedded code.'
        ],
        subtopics: [
          {
            title: 'Pointer basics and indirection',
            description: 'Use pointers to access and manipulate memory intentionally.',
            keyPoints: [
              'Separate pointer ownership from raw access.',
              'Validate addresses before dereferencing.',
              'Use clear naming for pointer intent.'
            ]
          },
          {
            title: 'Arrays, buffers, and traversal',
            description: 'Treat arrays as contiguous memory with explicit size handling.',
            keyPoints: [
              'Always carry buffer length with buffer pointer.',
              'Avoid off-by-one indexing errors.',
              'Prefer defensive checks in packet parsing.'
            ]
          }
        ]
      },
      {
        id: 'c4',
        title: 'Structs & Bitfields',
        completed: false,
        content: 'Organize related state with structures and reason carefully about bit-level fields for compact representations.',
        learningGoals: [
          'Model hardware-like layouts with understandable abstractions.',
          'Understand struct padding and alignment implications.',
          'Use bitfields judiciously where portability is acceptable.'
        ],
        subtopics: [
          {
            title: 'Struct layout and padding',
            description: 'Learn how compilers align structure members and why it matters.',
            keyPoints: [
              'Member order can affect memory footprint.',
              'Padding can impact protocol serialization.',
              'Explicit packing may trade speed for size.'
            ]
          },
          {
            title: 'Bitfield design considerations',
            description: 'Represent packed flags and small ranges with caution.',
            keyPoints: [
              'Bitfield ordering is compiler dependent.',
              'Prefer masks for highly portable register logic.',
              'Document semantics for each packed field.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mcu-basics',
    title: 'MCU Architecture & Peripherals',
    description: 'Understanding microcontroller internals, clock systems, and peripheral configuration.',
    icon: 'Cpu',
    duration: '3 Weeks',
    level: 'Beginner',
    topics: [
      {
        id: 'm1',
        title: 'ARM Cortex-M Overview',
        completed: false,
        content: 'Explore core architecture concepts that shape interrupt handling, memory access, and deterministic execution.',
        learningGoals: [
          'Identify key Cortex-M blocks and responsibilities.',
          'Understand privilege levels and exception model basics.',
          'Connect architecture features to firmware performance.'
        ],
        subtopics: [
          {
            title: 'Core pipeline and execution model',
            description: 'Understand instruction flow and how branch behavior affects timing.',
            keyPoints: [
              'Pipeline depth impacts latency and throughput.',
              'Thumb instruction set drives code density.',
              'Exception entry and exit influence real-time response.'
            ]
          },
          {
            title: 'NVIC and interrupt priorities',
            description: 'Use nested interrupts effectively without starving critical work.',
            keyPoints: [
              'Priority grouping controls preemption behavior.',
              'Keep interrupt handlers short and predictable.',
              'Defer noncritical work to background tasks.'
            ]
          }
        ]
      },
      {
        id: 'm2',
        title: 'Clock Configuration',
        completed: false,
        content: 'Understand clock sources and distribution so every subsystem runs at the intended frequency and power budget.',
        learningGoals: [
          'Select suitable clock sources for startup and runtime.',
          'Trace clock tree routing to core and peripherals.',
          'Balance performance, stability, and power consumption.'
        ],
        subtopics: [
          {
            title: 'Clock sources and PLL usage',
            description: 'Compare internal and external oscillators with multiplication stages.',
            keyPoints: [
              'Internal oscillators simplify design but vary in accuracy.',
              'External crystals improve timing-sensitive applications.',
              'PLL settings must respect vendor limits.'
            ]
          },
          {
            title: 'Bus clocks and prescalers',
            description: 'Distribute frequencies safely to buses and peripherals.',
            keyPoints: [
              'Different buses can run at different rates.',
              'Prescaler choices affect peripheral timing formulas.',
              'Incorrect setup can break communication peripherals.'
            ]
          }
        ]
      },
      {
        id: 'm3',
        title: 'GPIO Programming',
        completed: false,
        content: 'Develop practical control over digital I/O pins for sensing, actuation, and interface multiplexing.',
        learningGoals: [
          'Configure input, output, and alternate-function modes.',
          'Set pull, speed, and drive options appropriately.',
          'Avoid common pin-state and contention mistakes.'
        ],
        subtopics: [
          {
            title: 'Pin modes and electrical behavior',
            description: 'Map logical pin modes to actual electrical outcomes.',
            keyPoints: [
              'Input mode reads external state.',
              'Output mode drives high or low levels.',
              'Alternate mode routes peripheral signals.'
            ]
          },
          {
            title: 'Safe GPIO design patterns',
            description: 'Prevent accidental short conditions and unstable reads.',
            keyPoints: [
              'Use pull resistors for floating inputs.',
              'Initialize outputs before enabling connected loads.',
              'Debounce mechanical inputs in hardware or software.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'linux-basics',
    title: 'Linux Systems & Shell',
    description: 'Linux fundamentals, terminal navigation, and shell scripting for embedded development.',
    icon: 'Terminal',
    duration: '2 Weeks',
    level: 'Beginner',
    topics: [
      {
        id: 'l1',
        title: 'Linux Filesystem',
        completed: false,
        content: 'Understand Linux directory conventions, file metadata, links, and storage inspection workflows to diagnose systems and manage embedded images confidently.',
        learningGoals: [
          'Navigate the filesystem hierarchy with purpose.',
          'Interpret permissions and ownership quickly.',
          'Identify where device nodes and runtime data live.',
          'Use discovery commands to find configuration and log artifacts quickly.'
        ],
        subtopics: [
          {
            title: 'Hierarchy and system directories',
            description: 'Learn what belongs in root, configuration, temporary, and user spaces.',
            keyPoints: [
              '/etc stores system configuration files.',
              '/dev exposes device files for hardware interfaces.',
              '/proc and /sys provide kernel and runtime metadata.'
            ]
          },
          {
            title: 'Permissions and ownership model',
            description: 'Control access through user, group, and mode semantics.',
            keyPoints: [
              'Read, write, and execute bits define access rights.',
              'Ownership changes affect service behavior.',
              'Least privilege reduces security exposure.'
            ]
          },
          {
            title: 'Links, mounts, and disk usage',
            description: 'Work with symbolic links, mounted filesystems, and storage analysis during field debugging.',
            keyPoints: [
              'Distinguish hard links from symbolic links.',
              'Use mount information to understand removable and virtual filesystems.',
              'Measure disk usage to prevent log or image growth issues.'
            ]
          }
        ]
      },
      {
        id: 'l2',
        title: 'Shell Scripting Basics',
        completed: false,
        content: 'Use shell scripts to automate repetitive workflows in build, deployment, logging, diagnostics, and board bring-up validation.',
        learningGoals: [
          'Write maintainable command-line automation.',
          'Handle script inputs and error paths clearly.',
          'Structure scripts for reuse in CI and local workflows.',
          'Debug scripts quickly using tracing and safe logging patterns.'
        ],
        subtopics: [
          {
            title: 'Script structure and execution flow',
            description: 'Organize scripts with clear setup, action, and cleanup phases.',
            keyPoints: [
              'Use strict modes to catch errors early.',
              'Quote variables to avoid expansion surprises.',
              'Break complex logic into shell functions.'
            ]
          },
          {
            title: 'Automation patterns for embedded teams',
            description: 'Apply scripting to compilation, flashing, and report generation.',
            keyPoints: [
              'Loop over target boards or artifacts safely.',
              'Capture logs with timestamps for traceability.',
              'Return meaningful exit codes for CI pipelines.'
            ]
          },
          {
            title: 'Arguments, environment, and debugging',
            description: 'Make scripts configurable, robust, and observable in development and production CI runs.',
            keyPoints: [
              'Parse positional arguments and optional flags consistently.',
              'Validate required environment variables early.',
              'Use trace modes and controlled debug output to isolate failures.'
            ]
          }
        ]
      },
      {
        id: 'l3',
        title: 'Processes, Services, and Logs',
        completed: false,
        content: 'Operate Linux-based embedded targets by inspecting processes, managing services, and collecting actionable logs.',
        learningGoals: [
          'Inspect process state and resource consumption with confidence.',
          'Control service lifecycle during startup and runtime debugging.',
          'Read system and application logs to root-cause failures quickly.'
        ],
        subtopics: [
          {
            title: 'Process inspection and signals',
            description: 'Track long-running applications and use signals safely to control process behavior.',
            keyPoints: [
              'Use ps and top output to identify CPU and memory pressure.',
              'Understand common signals like TERM, INT, and KILL.',
              'Avoid abrupt termination when graceful shutdown is possible.'
            ]
          },
          {
            title: 'Service and log workflows',
            description: 'Manage startup services and investigate operational issues with centralized logs.',
            keyPoints: [
              'Start, stop, and verify service health with service managers.',
              'Filter log streams by unit, severity, or time window.',
              'Correlate boot-time and runtime events for faster triage.'
            ]
          }
        ]
      },
      {
        id: 'l4',
        title: 'Command-Line Text Processing',
        completed: false,
        content: 'Use standard shell tools to search, transform, and summarize data from logs, configs, and build outputs.',
        learningGoals: [
          'Filter large outputs into focused diagnostic views.',
          'Combine tools in pipelines for repeatable data extraction.',
          'Apply text processing to automate validation and reporting tasks.'
        ],
        subtopics: [
          {
            title: 'Search and filter techniques',
            description: 'Quickly isolate patterns and anomalies across many files and command outputs.',
            keyPoints: [
              'Use recursive search to locate symbols and configuration keys.',
              'Filter command output with precise include and exclude rules.',
              'Preserve context lines to debug related events.'
            ]
          },
          {
            title: 'Transformation and reporting pipelines',
            description: 'Chain tools to normalize output and build compact summaries for engineering workflows.',
            keyPoints: [
              'Extract relevant columns and fields from structured text.',
              'Sort and de-duplicate records to expose unique issues.',
              'Emit concise reports suitable for CI artifacts and handoffs.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rtos',
    title: 'Real-Time Operating Systems',
    description: 'RTOS concepts, task management, synchronization, and scheduling for embedded applications.',
    icon: 'Clock',
    duration: '5 Weeks',
    level: 'Advanced',
    topics: [
      {
        id: 'r1',
        title: 'RTOS Fundamentals',
        completed: false,
        content: 'Understand how an RTOS coordinates tasks with deterministic timing under constrained resources.',
        learningGoals: [
          'Differentiate tasks, threads, and scheduler roles.',
          'Interpret ready, blocked, and running states.',
          'Estimate context-switch overhead implications.'
        ],
        subtopics: [
          {
            title: 'Task model and lifecycle',
            description: 'Track how tasks are created, scheduled, and terminated.',
            keyPoints: [
              'Task priorities influence CPU allocation.',
              'Stack size must match worst-case usage.',
              'Blocked tasks wait for events efficiently.'
            ]
          },
          {
            title: 'Determinism and timing behavior',
            description: 'Build predictable systems by controlling latency sources.',
            keyPoints: [
              'Jitter affects control loops and sampling.',
              'Periodic task design needs stable timing reference.',
              'Runtime instrumentation reveals bottlenecks.'
            ]
          }
        ]
      },
      {
        id: 'r2',
        title: 'Synchronization Primitives',
        completed: false,
        content: 'Coordinate shared resources and task communication with the right synchronization mechanism.',
        learningGoals: [
          'Choose between semaphores, mutexes, and queues.',
          'Prevent deadlocks and priority inversion.',
          'Model producer-consumer communication safely.'
        ],
        subtopics: [
          {
            title: 'Mutual exclusion and shared state',
            description: 'Protect critical sections without blocking the system unnecessarily.',
            keyPoints: [
              'Mutexes guard ownership of shared resources.',
              'Hold locks for minimal duration.',
              'Use timeout strategies to detect lock issues.'
            ]
          },
          {
            title: 'Inter-task communication',
            description: 'Move data and events between tasks with predictable behavior.',
            keyPoints: [
              'Queues decouple producers and consumers.',
              'Semaphores signal event availability.',
              'Message design should include ownership rules.'
            ]
          }
        ]
      },
      {
        id: 'r3',
        title: 'Interrupt Handling in RTOS',
        completed: false,
        content: 'Design ISR paths that are fast, safe, and cooperative with scheduler-driven processing.',
        learningGoals: [
          'Separate time-critical ISR work from deferred processing.',
          'Use ISR-safe APIs and context switching correctly.',
          'Measure and reduce interrupt latency consistently.'
        ],
        subtopics: [
          {
            title: 'ISR design best practices',
            description: 'Keep interrupt code short and deterministic.',
            keyPoints: [
              'Acknowledge interrupt sources promptly.',
              'Avoid blocking operations in ISR context.',
              'Minimize shared-state writes from interrupts.'
            ]
          },
          {
            title: 'Deferred execution strategies',
            description: 'Hand off heavier work to tasks using queues or notifications.',
            keyPoints: [
              'Use wake-up mechanisms for high-priority handlers.',
              'Batch low-priority events to reduce overhead.',
              'Verify ISR to task handoff under peak load.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'peripherals',
    title: 'Communication Protocols',
    description: 'Mastering UART, SPI, I2C, and other communication protocols for embedded systems.',
    icon: 'Database',
    duration: '3 Weeks',
    level: 'Intermediate',
    topics: [
      {
        id: 'p1',
        title: 'UART Communication',
        completed: false,
        content: 'Build reliable asynchronous serial links for logging, command interfaces, and device integration.',
        learningGoals: [
          'Configure framing and baud-rate assumptions correctly.',
          'Identify and recover from communication errors.',
          'Design robust text and binary UART protocols.'
        ],
        subtopics: [
          {
            title: 'Framing and baud-rate alignment',
            description: 'Understand start bits, stop bits, parity, and timing tolerance.',
            keyPoints: [
              'Mismatched baud rates cause framing errors.',
              'Parity helps detect single-bit corruption.',
              'Stable clocks improve long-run reliability.'
            ]
          },
          {
            title: 'Practical UART integration',
            description: 'Implement buffering and flow control for real systems.',
            keyPoints: [
              'Use ring buffers for bursty traffic.',
              'Separate RX parsing from interrupt context.',
              'Choose suitable timeout and retry policies.'
            ]
          }
        ]
      },
      {
        id: 'p2',
        title: 'SPI Protocol',
        completed: false,
        content: 'Apply high-throughput synchronous communication between controllers and peripherals.',
        learningGoals: [
          'Select SPI mode and clock phase correctly.',
          'Manage chip-select behavior for multiple devices.',
          'Handle full-duplex transfers and transaction boundaries.'
        ],
        subtopics: [
          {
            title: 'Signal roles and timing modes',
            description: 'Map clock polarity and phase settings to slave expectations.',
            keyPoints: [
              'MOSI and MISO operate simultaneously.',
              'Mode mismatch leads to shifted data.',
              'Clock frequency must satisfy slave limits.'
            ]
          },
          {
            title: 'Transaction design',
            description: 'Structure command and payload exchanges for clarity and reliability.',
            keyPoints: [
              'Assert and release chip select at correct boundaries.',
              'Include status bytes where needed for validation.',
              'Document endian assumptions for multibyte fields.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'drivers',
    title: 'Device Drivers & HAL',
    description: 'Building hardware abstraction layers and device drivers for embedded peripherals.',
    icon: 'HardDrive',
    duration: '4 Weeks',
    level: 'Intermediate',
    topics: [
      {
        id: 'd1',
        title: 'HAL Architecture',
        completed: false,
        content: 'Design hardware abstraction boundaries that keep application logic portable and maintainable.',
        learningGoals: [
          'Separate application policy from hardware mechanism.',
          'Define stable, testable HAL contracts.',
          'Plan for platform variation without API breakage.'
        ],
        subtopics: [
          {
            title: 'Layer boundaries and responsibilities',
            description: 'Assign clear ownership to application, HAL, and low-level drivers.',
            keyPoints: [
              'HAL should expose intent-oriented operations.',
              'Low-level layers manage register details.',
              'Dependency direction should remain one-way.'
            ]
          },
          {
            title: 'Portability and testability',
            description: 'Enable host-based validation and board-specific adaptation.',
            keyPoints: [
              'Use interfaces that support mock implementations.',
              'Keep board configuration data explicit.',
              'Track assumptions that differ by hardware family.'
            ]
          }
        ]
      },
      {
        id: 'd2',
        title: 'Driver Development Patterns',
        completed: false,
        content: 'Build reusable drivers using lifecycle patterns, error strategies, and observability hooks.',
        learningGoals: [
          'Create consistent initialization and state transitions.',
          'Surface meaningful errors and recovery paths.',
          'Instrument drivers for diagnosis in field conditions.'
        ],
        subtopics: [
          {
            title: 'Driver lifecycle and state machines',
            description: 'Represent startup, active, error, and shutdown behavior explicitly.',
            keyPoints: [
              'State machines make edge cases visible.',
              'Initialization should validate dependencies first.',
              'Reset paths must restore known-safe states.'
            ]
          },
          {
            title: 'Error handling and diagnostics',
            description: 'Capture enough context to debug intermittent hardware faults.',
            keyPoints: [
              'Classify transient versus permanent failures.',
              'Expose counters for retries and dropped events.',
              'Use concise logs that preserve timing clarity.'
            ]
          }
        ]
      }
    ]
  }
];
